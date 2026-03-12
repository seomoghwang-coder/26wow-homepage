import { type ReactNode } from 'react';

type BgVariant = 'white' | 'gray' | 'navy' | 'emerald';

interface SectionWrapperProps {
  children: ReactNode;
  bg?: BgVariant;
  className?: string;
  innerClassName?: string;
  id?: string;
  narrow?: boolean;
}

const bgClasses: Record<BgVariant, string> = {
  white: 'bg-surface-primary',
  gray: 'bg-surface-secondary',
  navy: 'bg-brand-navy',
  emerald: 'bg-brand-emerald',
};

export default function SectionWrapper({
  children,
  bg = 'white',
  className = '',
  innerClassName = '',
  id,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[bgClasses[bg], 'py-20 md:py-28', className].filter(Boolean).join(' ')}
    >
      <div
        className={[
          'mx-auto px-4 sm:px-6 lg:px-8',
          narrow ? 'max-w-4xl' : 'max-w-7xl',
          innerClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </section>
  );
}
