import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create ScrollTrigger animation for section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
    
    // Text animations
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    ).fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
    
    // Paragraphs animation with stagger
    if (paragraphsRef.current) {
      const paragraphs = paragraphsRef.current.querySelectorAll('p');
      if (paragraphs.length > 0) {
        tl.fromTo(
          Array.from(paragraphs),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    }
    
    // Stats animation with counter effect
    const statElements = statsRef.current?.querySelectorAll('h3');
    if (statElements) {
      statElements.forEach((stat, index) => {
        const targetValue = parseInt(stat.textContent?.replace(/\D/g, '') || '0', 10);
        tl.fromTo(
          stat,
          { 
            textContent: "0", 
            opacity: 0, 
            y: 20 
          },
          { 
            textContent: `${targetValue}+`,
            opacity: 1, 
            y: 0, 
            duration: 1.5,
            ease: "power1.out",
            snap: { textContent: 1 },
            stagger: 0.1
          },
          "-=0.9"
        );
        
        // Add plus sign back if needed
        gsap.set(stat, { textContent: `${targetValue}+` });
      });
    }
    
    // Stats descriptions fade in
    if (statsRef.current) {
      const statDescriptions = statsRef.current.querySelectorAll('p');
      if (statDescriptions.length > 0) {
        tl.fromTo(
          Array.from(statDescriptions),
          { opacity: 0 },
          { opacity: 1, stagger: 0.1, duration: 0.4 },
          "-=1"
        );
      }
    }
    
    // Button animation
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.8"
    );
    
    // Image and badge animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, x: 30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=1.5"
    ).fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.5"
    );
    
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 lg:py-24 bg-white"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-scroll data-scroll-speed="0.2">
            <span 
              ref={subtitleRef}
              className="inline-block text-primary font-medium mb-2"
            >
              About Us
            </span>
            <h2 
              ref={titleRef}
              className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6"
            >
              We're a team of digital experts
            </h2>
            <div ref={paragraphsRef}>
              <p className="text-neutral-600 mb-6">
                Freelantix was founded in 2015 with a mission to help businesses of all sizes leverage the power of digital technology to grow and succeed. Our team combines technical expertise with creative thinking to deliver solutions that drive real results.
              </p>
              <p className="text-neutral-600 mb-8">
                We believe in transparency, collaboration, and continuous improvement. Our client-centered approach ensures that we fully understand your business needs and deliver solutions that exceed your expectations.
              </p>
            </div>
            
            <div 
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8"
              data-scroll 
              data-scroll-speed="0.1"
            >
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">200+</h3>
                <p className="text-neutral-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">50+</h3>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">15+</h3>
                <p className="text-neutral-600">Team Members</p>
              </div>
            </div>
            
            <div ref={buttonRef}>
              <Button asChild className="bg-primary hover:bg-primary/90 inline-flex items-center">
                <Link href="/about">
                  Meet Our Team <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative" data-scroll data-scroll-speed="-0.1">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Freelantix Team" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
            <div 
              ref={badgeRef}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block"
              data-scroll 
              data-scroll-speed="-0.2"
            >
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
