
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import brewBeanImg from '../media/coffee.png'

const Portfolio = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: projectsRef, isIntersecting: projectsVisible } = useIntersectionObserver();

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Modern shopping experience with seamless checkout"
    },
    {
      title: "Healthcare Portal", 
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      description: "Patient management system with intuitive interface"
    },
    {
      title: "Brew & Bean",
      category: "Food & Beverage",
      image: brewBeanImg,
      description: "Artisanal espresso experience with easy online menu"
    },
    {
      title: "TechStartup",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Bold design showcasing innovative solutions"
    },
    {
      title: "Creative Agency",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Portfolio showcase with dynamic animations"
    },
    {
      title: "Financial Services",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      description: "Professional platform with secure client portal"
    }
  ];

  return (
    <section id="portfolio" className="py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <a 
              key={index}
              href="https://brewbean.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-white rounded-lg overflow-hidden shadow-lg hover-lift hover-glow group scroll-hidden-scale ${
                projectsVisible ? `animate-scale-in animate-stagger-${Math.min(index + 1, 4)}` : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" size={32} />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-tertiary-accent font-semibold mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
