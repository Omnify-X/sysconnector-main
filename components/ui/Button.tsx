'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-black text-white border border-black hover:bg-accent hover:border-accent shadow-sm dark:bg-white dark:text-black dark:border-white dark:hover:bg-accent dark:hover:text-accent-fg dark:hover:border-accent',
  secondary:
    'bg-bg-elevated text-fg border border-border-strong hover:bg-bg-sunken hover:border-fg-subtle',
  ghost:
    'bg-transparent text-fg border border-transparent hover:bg-bg-sunken',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.875rem]',
  md: 'h-10 px-5 text-[0.9375rem]',
  lg: 'h-12 px-7 text-[1rem]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', className = '', children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
