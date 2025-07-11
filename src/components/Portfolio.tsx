
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "TechFlow Solutions",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      description: "Modern dashboard design for a workflow automation platform"
    },
    {
      title: "Green Earth Initiative", 
      category: "Non-Profit",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
      description: "Responsive website promoting environmental sustainability"
    },
    {
      title: "Artisan Coffee Co.",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&crop=center", 
      description: "Beautiful online store with integrated payment system"
    },
    {
      title: "MindfulSpace Therapy",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      description: "Calming, accessible website for mental health services"
    },
    {
      title: "FinanceFirst Advisory",
      category: "Financial Services", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      description: "Professional platform for financial planning consultancy"
    },
    {
      title: "Creative Studio Collective",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
      description: "Dynamic portfolio showcasing artistic work and exhibitions"
    }
  ];

  return (
    <section id="portfolio" className="bg-surface-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses 
            create meaningful digital experiences that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-secondary-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <ExternalLink size={16} className="text-neutral-800" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-medium text-primary-accent mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
