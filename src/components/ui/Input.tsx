import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, fullWidth, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'px-4 py-3 rounded-lg border transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent',
          'placeholder:text-gray-400',
          {
            'border-red-500 focus:ring-red-500': error,
            'border-gray-300': !error,
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
