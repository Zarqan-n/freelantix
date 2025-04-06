import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Add scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      "fixed w-full z-50 transition-all duration-300",
      "bg-background border-b border-border",
      isScrolled ? "shadow-md py-2" : "py-4"
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
                  "nav-link text-foreground hover:text-primary font-medium transition-colors",
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
              className="text-foreground hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Mobile Menu Content */}
        <div 
          ref={mobileMenuRef}
          className={cn(
            "fixed top-[73px] right-0 bottom-0 w-3/4 max-w-sm bg-background border-l border-border shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="space-y-6 flex-1">
              {navItems.map((item) => (
                <div 
                  key={item.path}
                  className="border-b border-border pb-3"
                >
                  <Link 
                    href={item.path}
                    className={cn(
                      "group flex items-center justify-between py-2 text-lg font-medium transition-colors",
                      isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight 
                      size={18} 
                      className={cn(
                        "transition-transform duration-300",
                        "group-hover:translate-x-1 text-primary opacity-0 group-hover:opacity-100"
                      )} 
                    />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
