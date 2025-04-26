import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from 'client/public/assets/logo.png';

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
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return path === '/' ? location === path : location.startsWith(path);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      "bg-green-200 border-b border-border",
      isScrolled ? "shadow-md py-2" : "py-4"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="logo" className="h-7 w-7" />
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
            <div className="flex items-center gap-4">
              <Button asChild className="btn btn-primary text-white">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="text-green-600 hover:text-green-800"
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
          "fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Mobile Menu Content */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-green-200 p-3 pt-6 border-l border-border shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="logo" className="h-7 w-7" />
              <span className="text-primary font-heading font-bold text-2xl">Freelantix</span>
            </Link>


          </div>
          <div className="p-6 flex flex-col">
            
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
                className="w-full btn btn-primary text-white border"
                size="lg"
              >
                <Link href="/contact"><span className="text-green">Get Started</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;