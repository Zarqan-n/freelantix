import { Feature } from '@/lib/types';

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Clean Code",
    description: "We write maintainable, efficient code that follows best practices and industry standards.",
    icon: "fas fa-code"
  },
  {
    id: 2,
    title: "Creative Design",
    description: "Our designs are not just beautiful, but strategic and aligned with your business goals.",
    icon: "fas fa-paint-brush"
  },
  {
    id: 3,
    title: "Fast Performance",
    description: "We optimize every aspect of your website to ensure lightning-fast loading times.",
    icon: "fas fa-rocket"
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Your website will look and function perfectly on any device, from desktops to smartphones.",
    icon: "fas fa-mobile-alt"
  },
  {
    id: 5,
    title: "SEO Optimized",
    description: "We implement SEO best practices to improve your visibility in search engine results.",
    icon: "fas fa-search"
  },
  {
    id: 6,
    title: "Dedicated Support",
    description: "Our team is always available to assist you with any questions or issues you may have.",
    icon: "fas fa-headset"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-4">
            Why Choose Freelantix?
          </h2>
          <p className="text-neutral-600">
            We combine technical expertise with creative innovation to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className="bg-neutral-50 rounded-xl p-8 hover-lift transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
