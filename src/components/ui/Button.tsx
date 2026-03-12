import Link from 'next/link';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-emerald text-white hover:bg-brand-emerald-dark active:scale-[0.98] shadow-sm',
  secondary:
    'bg-white text-brand-navy border-2 border-brand-navy hover:bg-surface-secondary active:scale-[0.98]',
  ghost:
    'text-brand-navy hover:text-brand-emerald underline underline-offset-4',
  'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-brand-navy active:scale-[0.98]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-emerald disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
