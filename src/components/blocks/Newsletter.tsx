import { useState, FormEvent } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-[--color-text-primary] font-bold text-base mb-2">
        Newsletter
      </h3>
      <p className="text-secondary text-sm mb-4">
        Get our news letter, let's get in touch.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          className="text-sm"
          disabled={isSubmitting || submitted}
        />
        <Button
          type="submit"
          variant="teal"
          size="sm"
          disabled={isSubmitting || submitted}
          className="whitespace-nowrap px-6"
        >
          {submitted ? 'Sent!' : 'Send'}
        </Button>
      </form>
    </div>
  );
}
