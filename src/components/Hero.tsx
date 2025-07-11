
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-800 leading-tight mb-8">
            We build{' '}
            <span className="bg-gradient-to-r from-primary-accent via-tertiary-accent to-secondary-accent bg-clip-text text-transparent">
              elegant
            </span>
            , high-performance websites
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Boutique web development agency crafting beautiful, accessible, and lightning-fast digital experiences for forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#portfolio"
              className="bg-primary-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Our Work
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="#contact"
              className="border-2 border-neutral-800 text-neutral-800 px-8 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
