import { Testimonial } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '@/contexts/ThemeContext';

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
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Founder",
    company: "Innovate Solutions",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "The team at Freelantix exceeded our expectations in every way. Their attention to detail and creative approach helped us launch a website that perfectly represents our brand and has received countless compliments from our clients."
  },
  {
    id: 5,
    name: "Amanda Patel",
    position: "CMO",
    company: "EcoSmart",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 4.5,
    content: "Freelantix helped us revamp our entire digital presence with outstanding results. Their team is incredibly knowledgeable, responsive, and truly invested in our success. I highly recommend their services to anyone looking to elevate their online presence."
  }
];

const TestimonialsSection = () => {
  const { theme } = useTheme();
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Adjust slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-2">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="testimonials-slider">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-card p-8 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4 border-2 border-primary/20" 
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex text-amber-400">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <StarHalf size={18} fill="currentColor" />
                    )}
                  </div>
                  <p className="text-card-foreground italic">"{testimonial.content}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
