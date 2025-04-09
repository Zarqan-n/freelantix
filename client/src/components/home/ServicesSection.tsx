import { Service } from '@/lib/types';
import { Link } from 'wouter';

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom website development tailored to your specific business needs and objectives.",
    icon: "fas fa-code",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description: "Robust online stores with secure payment gateways and user-friendly interfaces.",
    icon: "fas fa-shopping-cart",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHwy"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "fas fa-mobile-alt",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to increase your online visibility and drive conversions.",
    icon: "fas fa-bullhorn",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centered design that focuses on creating intuitive, engaging digital experiences.",
    icon: "fas fa-paint-brush",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    id: 6,
    title: "SEO & Content Strategy",
    description: "Comprehensive SEO services to improve your search rankings and drive organic traffic.",
    icon: "fas fa-search",
    image: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvJTIwb3B0aW1pc2F0aW9ufGVufDB8fDB8fHwy"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-2">Our Services</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-neutral-600">
            We offer a full range of services to help you achieve your business goals in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8 hover-lift transition-transform"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <Link 
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary font-medium"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
