
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLetsTalkClick = () => {
    // On mobile (screen width < 768px), scroll to contact section
    // On desktop, scroll to contact section
    scrollToContact();
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-800 leading-tight mb-8 opacity-0">
            We build{' '}
            <span className="bg-gradient-to-r from-primary-accent via-tertiary-accent to-secondary-accent bg-clip-text text-transparent">
              elegant
            </span>
            , high-performance websites
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
            Boutique web development agency crafting beautiful, accessible, and lightning-fast digital experiences for forward-thinking businesses.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
            <a 
              href="#portfolio"
              className="bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover-lift hover-glow group"
            >
              View Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button 
              onClick={handleLetsTalkClick}
              className="border-2 border-neutral-800 text-neutral-800 px-8 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-all duration-300 font-semibold text-lg hover-lift"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
