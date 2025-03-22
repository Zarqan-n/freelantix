import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { services } from "@/lib/data";
import { 
  Laptop, 
  TrendingUp, 
  Smartphone, 
  Search, 
  MessageSquare, 
  Palette, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const [_, setLocation] = useLocation();
  const activeSection = useScrollspy(['web-design', 'digital-marketing', 'app-development', 'seo', 'social-media', 'brand-identity'], { offset: 200 });
  
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "web-design":
        return <Laptop className="text-2xl" />;
      case "digital-marketing":
        return <TrendingUp className="text-2xl" />;
      case "app-development":
        return <Smartphone className="text-2xl" />;
      case "seo":
        return <Search className="text-2xl" />;
      case "social-media":
        return <MessageSquare className="text-2xl" />;
      case "brand-identity":
        return <Palette className="text-2xl" />;
      default:
        return <Laptop className="text-2xl" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-tertiary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight mb-6">
              Innovative Digital Solutions for Your Business
            </h1>
            <p className="text-xl opacity-90 mb-8">
              We offer a comprehensive range of digital services designed to help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <div className="sticky top-16 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-6 no-scrollbar" id="services-list">
            {services.map((service) => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className={`whitespace-nowrap pb-2 border-b-2 font-medium transition-colors duration-300 px-1 ${
                  activeSection === service.id 
                    ? `border-${service.colorClass} text-${service.colorClass}` 
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Service Sections */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <section 
              key={service.id} 
              id={service.id} 
              className={`py-16 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <span className={`text-sm font-medium text-${service.colorClass} bg-${service.colorClass}/10 px-4 py-1 rounded-full`}>
                    {service.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-montserrat">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`bg-${service.colorClass}/10 p-2 rounded-lg mr-4`}>
                          <i className={`fas fa-check text-${service.colorClass}`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className={`bg-${service.colorClass} text-white hover:bg-${service.colorClass}/90`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-xl">
                    <div className={`w-20 h-20 bg-${service.colorClass}/10 rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4 font-montserrat">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <i className={`fas fa-check-circle text-${service.colorClass} mr-2`}></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {service.pricing && (
                      <div className="mt-8 text-center">
                        <p className="text-gray-500">Starting at</p>
                        <p className="text-3xl font-bold font-montserrat">{service.pricing}</p>
                      </div>
                    )}
                  </div>
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${service.colorClass} opacity-10 rounded-lg -z-10`}></div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your business goals through our digital services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
