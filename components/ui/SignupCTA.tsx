import { ArrowRight } from 'lucide-react';

const variantClasses = {
  primary:
    'bg-black text-white border border-black hover:bg-accent hover:border-accent shadow-sm dark:bg-white dark:text-black dark:border-white dark:hover:bg-accent dark:hover:text-accent-fg dark:hover:border-accent',
  secondary:
    'bg-bg-elevated text-fg border border-border-strong hover:bg-bg-sunken hover:border-fg-subtle',
  ghost: 'bg-transparent text-fg border border-transparent hover:bg-bg-sunken',
};

const sizeClasses = {
  sm: 'h-9 px-4 text-[0.875rem]',
  md: 'h-10 px-5 text-[0.9375rem]',
  lg: 'h-12 px-7 text-[1rem]',
};

interface SignupCTAProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withArrow?: boolean;
}

export function SignupCTA({
  label,
  variant = 'primary',
  size = 'lg',
  className = '',
  withArrow = true,
}: SignupCTAProps) {
  return (
    <a
      href="https://app.sysconnector.com"
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {label}
      {withArrow && <ArrowRight size={16} strokeWidth={2.25} />}
    </a>
  );
}
