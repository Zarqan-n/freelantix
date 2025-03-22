import { useEffect } from "react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  TrendingUp, 
  Smartphone, 
  Search, 
  MessageSquare, 
  Palette, 
  CheckSquare 
} from "lucide-react";
import { services, blogPosts, testimonials } from "@/lib/data";

const Home = () => {
  const { toast } = useToast();

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById("backToTop");
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.replace("opacity-0", "opacity-100");
          backToTopButton.classList.remove("invisible");
        } else {
          backToTopButton.classList.replace("opacity-100", "opacity-0");
          backToTopButton.classList.add("invisible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        return <CheckSquare className="text-2xl" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-shape bg-gradient-to-r from-primary to-tertiary text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="blob absolute top-20 right-20 w-96 h-96 bg-white"></div>
          <div className="blob absolute bottom-20 right-40 w-64 h-64 bg-white"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                Your Digital Success Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                Transform Your Digital <span className="text-secondary">Presence</span>
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                We create stunning digital experiences that captivate your audience and drive measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600" 
                alt="Digital marketing team working together" 
                className="rounded-xl shadow-2xl" 
                width="600" 
                height="400"
              />
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold font-montserrat">250+</h3>
              <p className="text-white/80 mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold font-montserrat">120+</h3>
              <p className="text-white/80 mt-2">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold font-montserrat">15+</h3>
              <p className="text-white/80 mt-2">Team Experts</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold font-montserrat">8+</h3>
              <p className="text-white/80 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500">Trusted by innovative companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center">
              <i className="fab fa-apple text-3xl"></i>
              <span className="ml-2 font-medium">Applio</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-google text-3xl"></i>
              <span className="ml-2 font-medium">Googlex</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-shopify text-3xl"></i>
              <span className="ml-2 font-medium">ShopWave</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-slack text-3xl"></i>
              <span className="ml-2 font-medium">Slackly</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-spotify text-3xl"></i>
              <span className="ml-2 font-medium">Soundify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-montserrat">Innovative Solutions for Your Business Growth</h2>
            <p className="text-gray-600 mt-4 text-lg">We offer comprehensive digital services to help your business thrive in the digital landscape</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 service-card border-t-4 border-${service.colorClass}`}
              >
                <div className={`w-16 h-16 bg-${service.colorClass}/10 rounded-lg flex items-center justify-center mb-6`}>
                  {getServiceIcon(service.id)}
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services#${service.id}`}>
                  <a className={`text-${service.colorClass} font-medium flex items-center`}>
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-montserrat">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Freelantix is a forward-thinking digital agency dedicated to helping businesses thrive in the digital landscape. With a team of passionate experts, we create innovative solutions that drive growth and deliver measurable results.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach combines creativity, strategy, and technical expertise to develop customized solutions that address your unique challenges and goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-bullseye text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Our Mission</h4>
                    <p className="text-gray-600">To empower businesses through innovative digital solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-eye text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Our Vision</h4>
                    <p className="text-gray-600">To be the leading force in digital transformation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tertiary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-handshake text-tertiary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Our Values</h4>
                    <p className="text-gray-600">Integrity, innovation, and client success guide our work.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-users text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Our Team</h4>
                    <p className="text-gray-600">Passionate experts dedicated to your digital success.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                    Get to Know Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                  alt="Our team working together" 
                  className="rounded-xl shadow-xl" 
                  width="600" 
                  height="400"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary opacity-10 rounded-lg z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary opacity-10 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-montserrat">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4 text-lg">Hear from businesses that have transformed their digital presence with our help</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star${i === 4 && testimonial.rating < 5 ? '-half-alt' : ''}`}></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-montserrat">Latest Insights & News</h2>
            <p className="text-gray-600 mt-4 text-lg">Stay up to date with the latest trends and insights in digital marketing and web development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-${post.categoryColor} text-white text-xs px-3 py-1 rounded-full`}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 font-montserrat">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link href={`/blog/${post.id}`}>
                      <a className={`text-${post.categoryColor} font-medium text-sm`}>Read More</a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your business goals through innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        id="backToTop" 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all duration-300 z-50"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Home;
