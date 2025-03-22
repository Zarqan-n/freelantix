import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      await apiRequest('POST', '/api/newsletter', { email });
      
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-white font-heading font-bold text-2xl">Freelantix</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              We create digital experiences that help businesses grow in the digital world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web-development" className="text-neutral-400 hover:text-white transition duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-neutral-400 hover:text-white transition duration-300">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="text-neutral-400 hover:text-white transition duration-300">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="text-neutral-400 hover:text-white transition duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="text-neutral-400 hover:text-white transition duration-300">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-neutral-400 hover:text-white transition duration-300">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form className="mb-6" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none text-neutral-800 focus:outline-none"
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 rounded-l-none px-4"
                  disabled={isLoading}
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </form>
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Freelantix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
