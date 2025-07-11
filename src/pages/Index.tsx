
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-canvas-bg">
      <Header onContactClick={handleContactClick} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CallToAction onContactClick={handleContactClick} />
      <Footer onContactClick={handleContactClick} />
      <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />
    </div>
  );
};

export default Index;
