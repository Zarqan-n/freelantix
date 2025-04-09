import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/types';

const Services = () => {
  const servicesData: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "We build custom, responsive websites that engage visitors and drive conversions. Our web development services include:",
      icon: "fas fa-code",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description: "Transform your business with our comprehensive e-commerce solutions designed to maximize sales and enhance user experience:",
      icon: "fas fa-shopping-cart",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHwy"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "We create intuitive, feature-rich mobile applications that provide exceptional user experiences across all devices:",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Our data-driven digital marketing strategies help you reach your target audience and achieve measurable results:",
      icon: "fas fa-bullhorn",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "We create stunning, user-centered designs that enhance user engagement and drive business goals:",
      icon: "fas fa-paint-brush",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8Mg%3D%3D"
    },
    {
      id: 6,
      title: "SEO & Content Strategy",
      description: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO services:",
      icon: "fas fa-search",
      image: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvJTIwb3B0aW1pc2F0aW9ufGVufDB8fDB8fHwy"
    }
  ];

  const serviceFeatures = {
    "Web Development": [
      "Custom website design and development",
      "Content Management System (CMS) implementation",
      "Progressive Web Applications (PWA)",
      "Website performance optimization",
      "API development and integration",
      "Maintenance and support"
    ],
    "E-Commerce Solutions": [
      "Custom online store development",
      "Product catalog management",
      "Secure payment gateway integration",
      "Inventory management systems",
      "Customer account management",
      "Mobile-responsive shopping experiences"
    ],
    "Mobile App Development": [
      "iOS and Android app development",
      "Cross-platform applications",
      "UI/UX design for mobile",
      "App testing and quality assurance",
      "App store optimization",
      "Ongoing maintenance and updates"
    ],
    "Digital Marketing": [
      "Search Engine Marketing (SEM)",
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing",
      "Pay-per-click (PPC) advertising",
      "Analytics and performance tracking"
    ],
    "UI/UX Design": [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems"
    ],
    "SEO & Content Strategy": [
      "SEO audits and strategy development",
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Content creation and optimization",
      "Local SEO for businesses",
      "SEO performance reporting"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Services | Freelantix</title>
        <meta name="description" content="Explore our comprehensive range of digital services including web development, e-commerce solutions, mobile app development, UI/UX design, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-800 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-neutral-600">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape. From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index !== 0 ? 'mt-24' : ''}`}
            >
              <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <i className={`${service.icon} text-3xl`}></i>
                </div>
                <h2 className="font-heading font-bold text-3xl text-neutral-800 mb-6">
                  {service.title}
                </h2>
                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {serviceFeatures[service.title as keyof typeof serviceFeatures].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-white border border-red-800 hover:bg-primary/90">
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-2xl shadow-xl" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-primary">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild size="lg"  className="border-white text-white hover:bg-primary">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
