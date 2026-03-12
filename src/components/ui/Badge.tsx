import { type ReactNode } from 'react';

type BadgeVariant = 'emerald' | 'navy' | 'amber' | 'gray';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  emerald: 'bg-brand-emerald-pale text-brand-emerald-dark border border-brand-emerald-light',
  navy: 'bg-brand-navy text-white',
  amber: 'bg-accent-amber-pale text-amber-700 border border-amber-200',
  gray: 'bg-surface-tertiary text-text-secondary border border-border',
};

export default function Badge({ children, variant = 'emerald', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
