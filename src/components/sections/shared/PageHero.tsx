import Badge from '@/components/ui/Badge';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  quote?: string;
}

export default function PageHero({ eyebrow, title, subtitle, quote }: PageHeroProps) {
  return (
    <section className="bg-brand-navy pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <Badge variant="emerald" className="mb-5">
            {eyebrow}
          </Badge>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-text-on-dark-muted leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {quote && (
          <blockquote className="mt-8 text-2xl md:text-3xl font-medium text-brand-emerald-light italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
      </div>
    </section>
  );
}
