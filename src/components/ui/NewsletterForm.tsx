import React, { useState } from 'react';

interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

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
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className={`border-2 border-[#EBEAED] rounded-[10px] px-[30px] py-[31px] ${className}`}>
      <h3 className="text-[#1E0D63] text-lg font-medium leading-7 mb-1">
        Newsletter
      </h3>
      <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-5">
        Get our news earlier, let's get in touch.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2.5">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
              setSuccess(false);
            }}
            placeholder="Your email"
            className={`w-full h-[50px] px-6 border-2 rounded-full text-lg font-medium placeholder:text-[rgba(21,20,57,0.4)] placeholder:font-medium focus:outline-none focus:border-[#2F1893] transition-colors ${
              error ? 'border-red-400' : 'border-[#EBEAED]'
            }`}
          />
          {error && (
            <span className="absolute -bottom-5 left-6 text-red-500 text-sm">
              {error}
            </span>
          )}
          {success && (
            <span className="absolute -bottom-5 left-6 text-green-500 text-sm">
              Subscribed!
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[50px] px-[18px] bg-[#25DAC4] text-white text-lg font-medium rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
