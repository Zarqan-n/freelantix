import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would submit to an API endpoint
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    alert(`Thank you for subscribing with ${email}! We will be in touch soon.`);
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-montserrat">Freelantix</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative digital solutions. We help brands thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-montserrat">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#web-design"><a className="text-gray-400 hover:text-white transition duration-300">Web Design & Development</a></Link></li>
              <li><Link href="/services#digital-marketing"><a className="text-gray-400 hover:text-white transition duration-300">Digital Marketing</a></Link></li>
              <li><Link href="/services#app-development"><a className="text-gray-400 hover:text-white transition duration-300">App Development</a></Link></li>
              <li><Link href="/services#seo"><a className="text-gray-400 hover:text-white transition duration-300">SEO Optimization</a></Link></li>
              <li><Link href="/services#social-media"><a className="text-gray-400 hover:text-white transition duration-300">Social Media Marketing</a></Link></li>
              <li><Link href="/services#brand-identity"><a className="text-gray-400 hover:text-white transition duration-300">Brand Identity</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-montserrat">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/"><a className="text-gray-400 hover:text-white transition duration-300">Home</a></Link></li>
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition duration-300">Services</a></Link></li>
              <li><Link href="/about"><a className="text-gray-400 hover:text-white transition duration-300">About Us</a></Link></li>
              <li><Link href="/blog"><a className="text-gray-400 hover:text-white transition duration-300">Blog</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition duration-300">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-montserrat">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on our latest news and services.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-primary/90 transition duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Freelantix. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
