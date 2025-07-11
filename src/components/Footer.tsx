
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/e12e6d3b-9fd1-49e9-b5a7-8443d6a313ea.png" 
              alt="Xela Web Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              Boutique web development agency creating elegant, high-performance websites 
              for forward-thinking businesses. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hello@xelaweb.com"
                className="text-gray-400 hover:text-primary-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Web Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Ongoing Support</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Consultation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Xela Web. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-accent transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-accent transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
