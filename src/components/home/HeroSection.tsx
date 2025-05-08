import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-primary/5 to-neutral-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-neutral-800 mb-6"
            >
              Transform your digital <span className="text-primary">presence</span>
            </h1>
            <p 
              className="text-lg text-neutral-600 mb-8 max-w-lg"
            >
              We build innovative, user-centric web solutions that help businesses thrive in the digital landscape.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-white border border-green-500 hover:bg-primary/90 text-white">
              <Link href="/projects">
                  View Projects
                </Link>
              </Button> 
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div 
              className="mt-12 flex items-center space-x-6"
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650&q=80" 
              alt="Team working on digital solutions" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
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
