import React, { useState } from 'react';
import Button from './Button';

interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className={`border-2 border-[#EBEAED] rounded-[10px] p-8 ${className}`}>
      <h3 className="text-[#1E0D63] text-lg font-medium leading-7 mb-2">
        Newsletter
      </h3>
      <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-6">
        Get our news earlier, let's get in touch.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={`w-full px-4 py-3 border-2 rounded-[10px] text-base focus:outline-none focus:border-[#2F1893] transition-colors ${
              error ? 'border-red-400' : 'border-[#EBEAED]'
            }`}
          />
          {error && (
            <span className="absolute -bottom-5 left-0 text-red-500 text-sm">
              {error}
            </span>
          )}
        </div>
        <Button type="submit" variant="primary" size="md" className="px-6">
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
