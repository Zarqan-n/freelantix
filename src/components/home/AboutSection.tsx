import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const NumberCounter = ({ end, duration = 2000, suffix = '' }: NumberCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - (startTime || 0)) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="font-heading font-bold text-3xl text-primary">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium mb-2">
              About Us
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
              We're a team of digital experts
            </h2>
            <div>
              <p className="text-neutral-600 mb-6">
                Freelantix was founded in 2015 with a mission to help businesses of all sizes leverage the power of digital technology to grow and succeed. Our team combines technical expertise with creative thinking to deliver solutions that drive real results.
              </p>
              <p className="text-neutral-600 mb-8">
                We believe in transparency, collaboration, and continuous improvement. Our client-centered approach ensures that we fully understand your business needs and deliver solutions that exceed your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                  <NumberCounter end={200} suffix="+" />
                </h3>
                <p className="text-neutral-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                  <NumberCounter end={50} suffix="+" />
                </h3>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                  <NumberCounter end={15} suffix="+" />
                </h3>
                <p className="text-neutral-600">Team Members</p>
              </div>
            </div>
            
            <div>
              <Button asChild className="bg-white border border-green-600 hover:bg-accent/90 inline-flex items-center">
                <Link href="/about">
                  Meet Our Team <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Freelantix Team" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <i className="fas fa-trophy text-xl"></i>
                </div>
                <div>
                  <p className="text-neutral-800 font-medium">Award-winning agency</p>
                  <p className="text-sm text-neutral-500">3 years in a row</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
