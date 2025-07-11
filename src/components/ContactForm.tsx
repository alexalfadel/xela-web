
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '', projectDetails: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className="bg-surface-bg rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-neutral-800">Get In Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 rounded p-1"
            aria-label="Close contact form"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-neutral-800 font-medium">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 focus:ring-primary-accent focus:border-primary-accent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-neutral-800 font-medium">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 focus:ring-primary-accent focus:border-primary-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-neutral-800 font-medium">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 focus:ring-primary-accent focus:border-primary-accent"
                placeholder="Your company name"
              />
            </div>

            <div>
              <Label htmlFor="projectDetails" className="text-neutral-800 font-medium">Project Details *</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                className="mt-1 focus:ring-primary-accent focus:border-primary-accent min-h-[100px]"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-300 text-neutral-800 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
