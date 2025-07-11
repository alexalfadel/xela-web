import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, Company X',
      quote: "Xela Web transformed our online presence. Their attention to detail and commitment to excellence is unmatched.",
      image: '/lovable-uploads/person1.jpg',
    },
    {
      name: 'Michael Brown',
      title: 'Marketing Director, Company Y',
      quote: "We've seen a significant increase in engagement since Xela Web redesigned our website. Highly recommended!",
      image: '/lovable-uploads/person2.jpg',
    },
    {
      name: 'Emily White',
      title: 'Founder, Company Z',
      quote: "The team at Xela Web is creative, responsive, and truly cares about their clients' success. A fantastic partner!",
      image: '/lovable-uploads/person3.jpg',
    },
  ];

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients. See why businesses love working with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-32 h-32 rounded-full object-cover shadow-md" 
                    />
                    <div>
                      <p className="text-xl italic text-gray-700 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div className="font-semibold text-neutral-800">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-neutral-800 rounded-full p-2 shadow-md focus:outline-none"
            aria-label="Go to previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-neutral-800 rounded-full p-2 shadow-md focus:outline-none"
            aria-label="Go to next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
