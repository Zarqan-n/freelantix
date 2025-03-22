import { Testimonial } from '@/lib/types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "Freelantix transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversions. Their team was professional, responsive, and delivered exactly what we needed."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "GrowthBrand",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "The digital marketing strategy Freelantix developed for us has been a game-changer. We've seen a 200% increase in organic traffic and a significant boost in leads. Their expertise and dedication are unmatched."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Owner",
    company: "StyleShop",
    avatar: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 4.5,
    content: "Working with Freelantix on our e-commerce site was a pleasure from start to finish. They understood our vision and created a beautiful, functional online store that our customers love. Sales have increased by 45% since launch."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-2">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-heading font-semibold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt"></i>
                )}
              </div>
              <p className="text-neutral-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
