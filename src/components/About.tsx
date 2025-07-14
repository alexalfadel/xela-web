
import { Users, Target, Heart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();

  return (
    <section id="about" className="bg-surface-bg py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            About Xela Web
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a boutique web development agency passionate about creating elegant, high-performance websites that drive results for our clients.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className={`text-center scroll-hidden ${cardsVisible ? 'animate-fade-in-up animate-stagger-1' : ''} hover-lift group relative overflow-hidden bg-white rounded-lg p-8 h-80`}>
            <div className="absolute inset-0 bg-primary-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative w-16 h-16 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="relative text-2xl font-bold text-neutral-800 mb-4">Our Story</h3>
            <p className="relative text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between beautiful design and powerful functionality, we've been crafting digital experiences that make an impact.
            </p>
          </div>

          <div className={`text-center scroll-hidden ${cardsVisible ? 'animate-fade-in-up animate-stagger-2' : ''} hover-lift group relative overflow-hidden bg-white rounded-lg p-8 h-80`}>
            <div className="absolute inset-0 bg-secondary-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative w-16 h-16 bg-secondary-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="relative text-2xl font-bold text-neutral-800 mb-4">Our Mission</h3>
            <p className="relative text-gray-600 leading-relaxed">
              To empower businesses with websites that not only look exceptional but perform flawlessly, driving growth and creating lasting connections with their audience.
            </p>
          </div>

          <div className={`text-center scroll-hidden ${cardsVisible ? 'animate-fade-in-up animate-stagger-3' : ''} hover-lift group relative overflow-hidden bg-white rounded-lg p-8 h-80`}>
            <div className="absolute inset-0 bg-tertiary-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative w-16 h-16 bg-tertiary-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="relative text-2xl font-bold text-neutral-800 mb-4">Our Values</h3>
            <p className="relative text-gray-600 leading-relaxed">
              Quality, creativity, and client satisfaction are at the heart of everything we do. We believe in transparent communication and delivering beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
