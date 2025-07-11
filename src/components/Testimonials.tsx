
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Xela Web transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded our expectations. The new website has increased our conversions by 40%."
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, Artisan Coffee Co.",
      company: "Artisan Coffee Co.",
      content: "Working with Xela Web was an absolute pleasure. They understood our brand perfectly and created an e-commerce platform that truly represents our values. Sales have tripled since launch!"
    },
    {
      name: "Dr. Emily Watson", 
      role: "Director, MindfulSpace Therapy",
      company: "MindfulSpace Therapy",
      content: "The team at Xela Web created a website that perfectly captures the calming, professional atmosphere we wanted to convey. Our online bookings have increased significantly."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-surface-bg py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative">
            <Quote className="text-tertiary-accent mb-6" size={48} />
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <div>
                <div className="font-semibold text-neutral-800 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-primary-accent font-medium">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-neutral-800" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 ${
                      index === currentIndex ? 'bg-primary-accent' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-neutral-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
