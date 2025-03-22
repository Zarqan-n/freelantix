import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return path === '/' ? location === path : location.startsWith(path);
  };

  return (
    <header className={cn(
      "fixed w-full bg-white z-50 transition-all duration-300",
      isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-heading font-bold text-2xl">Freelantix</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-neutral-700 hover:text-primary font-medium",
                  isActive(item.path) && "text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              onClick={toggleMenu} 
              className="text-neutral-700 hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={closeMenu}
                className={cn(
                  "block py-2 px-3 text-neutral-700 hover:text-primary font-medium",
                  isActive(item.path) && "text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="w-full mt-4 bg-primary hover:bg-primary/90"
            >
              <Link href="/contact" onClick={closeMenu}>Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
