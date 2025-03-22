import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <a className={`font-medium hover:text-primary transition duration-300 ${isActive ? "text-primary" : "text-gray-700"}`}>
        {children}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? "bg-white shadow-sm" : "bg-white"} transition-all duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-2xl font-bold text-primary font-montserrat">Freelantix</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
          </div>
          
          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-4 space-y-2">
            <Link href="/">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                About
              </a>
            </Link>
            <Link href="/blog">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                Contact
              </a>
            </Link>
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
