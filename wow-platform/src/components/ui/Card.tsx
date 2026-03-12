import { type ReactNode } from 'react';

type CardVariant = 'default' | 'elevated' | 'bordered' | 'dark' | 'emerald';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-border',
  elevated: 'bg-white shadow-md',
  bordered: 'bg-white border-2 border-border',
  dark: 'bg-brand-navy text-text-on-dark border border-brand-navy-muted',
  emerald: 'bg-brand-emerald-pale border border-brand-emerald-light',
};

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={[
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        hover ? 'transition-shadow duration-200 hover:shadow-lg cursor-pointer' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
