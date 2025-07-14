
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectDetails?: string;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      // Reset form and close modal on success
      setFormData({ name: '', email: '', phone: '', company: '', projectDetails: '' });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
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
        className="bg-surface-bg rounded-lg shadow-xl max-w-lg w-full max-h-[95vh] overflow-y-auto"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-neutral-800 font-medium">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 focus:ring-primary-accent focus:border-primary-accent transition-all duration-300 focus:scale-105 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your full name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
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
                  className={`mt-1 focus:ring-primary-accent focus:border-primary-accent ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="your@email.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-neutral-800 font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 focus:ring-primary-accent focus:border-primary-accent"
                  placeholder="(optional)"
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
            </div>

            <div>
              <Label htmlFor="projectDetails" className="text-neutral-800 font-medium">Project Details *</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                className={`mt-1 focus:ring-primary-accent focus:border-primary-accent min-h-[80px] ${
                  errors.projectDetails ? 'border-red-500' : ''
                }`}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                aria-describedby={errors.projectDetails ? "project-error" : undefined}
              />
              {errors.projectDetails && (
                <p id="project-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.projectDetails}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift hover-glow focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 border-gray-300 text-neutral-800 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
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
