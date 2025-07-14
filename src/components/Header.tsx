
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileContactClick = () => {
    closeMenu();
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none rounded"
              aria-label="Go to top of page"
            >
              <img 
                src="/lovable-uploads/e12e6d3b-9fd1-49e9-b5a7-8443d6a313ea.png" 
                alt="Xela Web Logo" 
                className="h-[142.8px] w-auto hover:scale-105 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#services" className="text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium">
                Portfolio
              </a>
              <a href="#testimonials" className="text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium">
                Testimonials
              </a>
              <button 
                onClick={onContactClick}
                className="bg-primary-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
              >
                Get In Touch
              </button>
              <a
                href="tel:+16504651676"
                className="bg-secondary-accent text-white p-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none active:outline-none flex items-center"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-800 hover:text-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 rounded p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                onClick={closeMenu}
                className="block px-3 py-2 text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={closeMenu}
                className="block px-3 py-2 text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                onClick={closeMenu}
                className="block px-3 py-2 text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>
              <a 
                href="#testimonials" 
                onClick={closeMenu}
                className="block px-3 py-2 text-neutral-800 hover:text-primary-accent transition-colors duration-300 font-medium"
              >
                Testimonials
              </a>
              <button 
                onClick={handleMobileContactClick}
                className="mx-3 mt-4 bg-primary-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium text-center w-[calc(100%-24px)] focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
              >
                Get In Touch
              </button>
              <a
                href="tel:+1234567890"
                onClick={closeMenu}
                className="flex items-center justify-center mx-3 mt-2 bg-tertiary-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium focus:outline-none active:outline-none w-[calc(100%-24px)]"
              >
                <Phone size={20} className="mr-2" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
