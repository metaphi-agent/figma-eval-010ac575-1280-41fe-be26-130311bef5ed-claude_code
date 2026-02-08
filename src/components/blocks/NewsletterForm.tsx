import { useState } from 'react';
import { Button } from '../ui/Button';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate(email);
    if (error) {
      setErrors({ email: error });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="border-2 border-grey-border rounded-[10px] p-8">
      <h4 className="text-heading font-medium text-lg leading-7">Newsletter</h4>
      <p className="text-text-muted text-base leading-[26px] mt-2">
        Get our news earlier, let's get in touch.
      </p>
      {submitted ? (
        <p className="text-action-primary font-medium text-base mt-4">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({});
              }}
              onBlur={() => {
                if (email) {
                  const error = validate(email);
                  if (error) setErrors({ email: error });
                }
              }}
              className="w-full h-[50px] px-5 border-2 border-heading rounded-[10px] text-heading text-base leading-[26px] placeholder:text-text-muted focus:outline-none focus:border-action-primary transition-colors duration-150"
            />
            {errors.email && (
              <p className="text-action-primary text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="h-[50px] px-5 shrink-0"
          >
            {isSubmitting ? '...' : 'Send'}
          </Button>
        </form>
      )}
    </div>
  );
}
