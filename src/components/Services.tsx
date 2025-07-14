
import { Palette, Code, Settings } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Services = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch and beyond, we provide comprehensive web solutions tailored to your unique needs.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className={`bg-white rounded-lg p-8 shadow-lg hover-lift hover-glow group scroll-hidden ${cardsVisible ? 'animate-scale-in animate-stagger-1' : ''}`}>
            <div className="w-16 h-16 bg-primary-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8 text-white animate-bounce-subtle" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Design</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Beautiful, user-centered designs that capture your brand essence and create memorable experiences for your visitors.
            </p>
            <a 
              href="#contact" 
              className="text-primary-accent hover:text-primary-accent/80 font-semibold transition-colors duration-300 group-hover:translate-x-2 inline-block"
            >
              Learn More →
            </a>
          </div>

          <div className={`bg-white rounded-lg p-8 shadow-lg hover-lift hover-glow group scroll-hidden ${cardsVisible ? 'animate-scale-in animate-stagger-2' : ''}`}>
            <div className="w-16 h-16 bg-secondary-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-white animate-float" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Clean, efficient code that brings your vision to life with optimal performance, security, and scalability.
            </p>
            <a 
              href="#contact" 
              className="text-primary-accent hover:text-primary-accent/80 font-semibold transition-colors duration-300 group-hover:translate-x-2 inline-block"
            >
              Learn More →
            </a>
          </div>

          <div className={`bg-white rounded-lg p-8 shadow-lg hover-lift hover-glow group scroll-hidden ${cardsVisible ? 'animate-scale-in animate-stagger-3' : ''}`}>
            <div className="w-16 h-16 bg-tertiary-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Settings className="w-8 h-8 text-white animate-bounce-subtle" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Ongoing Support</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Continuous maintenance, updates, and optimization to ensure your website stays fast, secure, and up-to-date.
            </p>
            <a 
              href="#contact" 
              className="text-primary-accent hover:text-primary-accent/80 font-semibold transition-colors duration-300 group-hover:translate-x-2 inline-block"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
