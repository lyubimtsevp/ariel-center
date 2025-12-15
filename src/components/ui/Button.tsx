'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-xl
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-gradient-to-br from-primary to-primary-dark
        text-white
        shadow-lg shadow-primary/25
        hover:shadow-xl hover:shadow-primary/30
        hover:-translate-y-0.5
        focus:ring-primary
      `,
      secondary: `
        bg-secondary
        text-white
        shadow-lg shadow-secondary/25
        hover:bg-secondary-dark
        hover:-translate-y-0.5
        focus:ring-secondary
      `,
      outline: `
        border-2 border-primary
        text-primary
        bg-transparent
        hover:bg-primary hover:text-white
        focus:ring-primary
      `,
      ghost: `
        text-foreground
        bg-transparent
        hover:bg-gray-100
        focus:ring-primary
      `,
      link: `
        text-primary
        bg-transparent
        underline-offset-4
        hover:underline
        focus:ring-primary
        p-0
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'link' && sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
