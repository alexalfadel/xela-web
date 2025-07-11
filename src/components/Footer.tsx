
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded mb-4"
              aria-label="Go to top of page"
            >
              <img 
                src="/lovable-uploads/e12e6d3b-9fd1-49e9-b5a7-8443d6a313ea.png" 
                alt="Xela Web Logo" 
                className="h-14 w-auto filter brightness-0 invert hover:opacity-90 transition-opacity duration-300"
              />
            </button>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              Boutique web development agency creating elegant, high-performance websites 
              for forward-thinking businesses. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded p-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded p-1"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <button 
                onClick={onContactClick}
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded p-1"
                aria-label="Contact us"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Web Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Ongoing Support</a></li>
              <li><button onClick={onContactClick} className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Consultation</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Testimonials</a></li>
              <li><button onClick={onContactClick} className="text-gray-300 hover:text-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Xela Web. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-accent transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-accent transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-neutral-800 rounded">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
