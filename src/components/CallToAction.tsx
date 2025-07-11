
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface CallToActionProps {
  onContactClick?: () => void;
}

const CallToAction = ({ onContactClick }: CallToActionProps) => {
  return (
    <section id="contact" className="bg-gradient-to-br from-primary-accent via-tertiary-accent to-secondary-accent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Talk
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to transform your digital presence? We'd love to discuss your project 
            and explore how we can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={onContactClick}
              className="bg-white text-neutral-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-accent"
            >
              <Mail size={20} />
              Get Started Today
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-neutral-800 transition-all duration-300 font-semibold text-lg flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-accent"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="opacity-90">We'll get back to you within 24 hours</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="opacity-90">No commitment, just great advice</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="opacity-90">Clear quotes with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
