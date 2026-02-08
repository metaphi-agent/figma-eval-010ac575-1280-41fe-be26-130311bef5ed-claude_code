import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-150 cursor-pointer',
        {
          'bg-action-primary text-white hover:bg-action-primary/90 active:bg-action-primary/80':
            variant === 'primary',
          'border-2 border-heading text-heading hover:bg-heading hover:text-white active:bg-heading/90':
            variant === 'outline',
          'px-6 py-2.5 text-lg': size === 'md',
          'px-8 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
