import { CheckCircle, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a boutique web development agency dedicated to crafting beautiful, 
            high-performance websites that drive results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary-accent mr-2" />
              <h3 className="text-lg font-semibold text-neutral-800">Quality</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We maintain the highest standards in design and development, ensuring every project is pixel-perfect and performs flawlessly.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-secondary-accent mr-2" />
              <h3 className="text-lg font-semibold text-neutral-800">Client-Focused</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your goals are our priority. We work closely with you throughout the entire process to ensure your vision is realized.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-tertiary-accent mr-2" />
              <h3 className="text-lg font-semibold text-neutral-800">Speed</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We leverage the latest technologies and agile methodologies to deliver your project quickly and efficiently.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-primary-accent mr-2" />
              <h3 className="text-lg font-semibold text-neutral-800">Passion</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We love what we do, and that passion shines through in every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
