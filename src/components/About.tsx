
import { Heart, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-surface-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            About Xela Web
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a boutique web development agency passionate about creating digital experiences that matter. 
            Founded on the belief that great websites should be both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-tertiary-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with websites that not only look stunning but drive results. 
              We believe every brand deserves a digital presence that truly represents their vision.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-accent to-primary-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              We combine cutting-edge technology with timeless design principles. 
              Every project starts with understanding your goals and ends with exceeding your expectations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-tertiary-accent to-secondary-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Transparency, quality, and collaboration are at our core. 
              We're not just service providers—we're your partners in digital success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
