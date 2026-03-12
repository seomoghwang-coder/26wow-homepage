interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={[center ? 'text-center' : '', 'mb-12 md:mb-16', className].filter(Boolean).join(' ')}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${dark ? 'text-brand-emerald-light' : 'text-brand-emerald'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? 'text-text-on-dark' : 'text-text-primary'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-text-on-dark-muted' : 'text-text-secondary'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
