
import { Palette, Code, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Beautiful, user-centered designs that capture your brand essence and engage your audience. From wireframes to pixel-perfect interfaces.",
      features: ["UI/UX Design", "Brand Integration", "Responsive Layouts", "Accessibility Focus"]
    },
    {
      icon: Code,
      title: "Development", 
      description: "High-performance websites built with modern technologies. Clean code, optimal performance, and seamless user experiences.",
      features: ["React & Next.js", "Performance Optimization", "SEO Integration", "CMS Solutions"]
    },
    {
      icon: Wrench,
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support to keep your website running smoothly. Updates, security, and continuous improvements.",
      features: ["Regular Updates", "Security Monitoring", "Performance Tuning", "Content Management"]
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch and beyond, we provide comprehensive web solutions 
            tailored to your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-surface-bg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-tertiary-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-primary-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className="text-primary-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
