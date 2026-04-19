'use client';

import { Button } from '@/components/ui/Button';
import { useSignupModal } from '@/components/ui/SignupModal';
import { ArrowRight } from 'lucide-react';

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
  const { open } = useSignupModal();
  return (
    <Button onClick={open} variant={variant} size={size} className={className}>
      {label}
      {withArrow && <ArrowRight size={16} strokeWidth={2.25} />}
    </Button>
  );
}
