import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { scrollRef, isReady } = useSmoothScroll();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  
  // Split title text for character animation
  useEffect(() => {
    if (!titleRef.current || !isReady) return;
    
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Text animation for title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
    
    // Text animation for description
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    );
    
    // Buttons animation
    if (buttonsRef.current?.children) {
      tl.fromTo(
        Array.from(buttonsRef.current.children),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.5'
      );
    }
    
    // Clients section animation
    tl.fromTo(
      clientsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.3'
    );
    
    // Image and badge animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=1.2'
    ).fromTo(
      badgeRef.current,
      { opacity: 0, x: -20, y: 20 },
      { opacity: 1, x: 0, y: 0, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );
    
    return () => {
      tl.kill();
    };
  }, [isReady]);
  
  return (
    <section 
      id="home" 
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-primary/5 to-neutral-50"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 
              ref={titleRef}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-neutral-800 mb-6"
              data-scroll
              data-scroll-speed="0.5"
            >
              Transform your digital <span className="text-primary">presence</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg text-neutral-600 mb-8 max-w-lg"
              data-scroll
              data-scroll-speed="0.3"
            >
              We build innovative, user-centric web solutions that help businesses thrive in the digital landscape.
            </p>
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4"
              data-scroll
              data-scroll-speed="0.1"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div 
              ref={clientsRef}
              className="mt-12 flex items-center space-x-6"
              data-scroll
              data-scroll-speed="0"
            >
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="text-sm text-neutral-600">
                <span className="font-bold text-neutral-800">50+</span> satisfied clients
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650&q=80" 
              alt="Team working on digital solutions" 
              className="w-full h-auto rounded-2xl shadow-xl"
              data-scroll
              data-scroll-speed="-0.3"
            />
            <div 
              ref={badgeRef}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
              data-scroll
              data-scroll-speed="-0.5"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <p className="text-neutral-800 font-medium">100% Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
