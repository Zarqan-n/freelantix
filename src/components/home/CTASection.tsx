import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const CTASection = () => {
  return (
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
            <Button asChild size="lg" className="bg-white border  text-primary hover:bg-transparent hover:border-white">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" className="border border-white text-blue-400 hover:border-white">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
