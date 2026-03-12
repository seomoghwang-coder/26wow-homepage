import { TRUST_STATS } from '@/lib/constants';

interface TrustBarProps {
  dark?: boolean;
}

export default function TrustBar({ dark = true }: TrustBarProps) {
  return (
    <div
      className={[
        'flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 pt-10',
        dark ? 'border-t border-brand-navy-muted' : 'border-t border-border',
      ].join(' ')}
    >
      {TRUST_STATS.map((stat, i) => (
        <div key={i} className="text-center">
          <p
            className={`text-3xl font-black leading-none ${dark ? 'text-white' : 'text-brand-navy'}`}
          >
            {stat.value}
            <span className={`text-xl ${dark ? 'text-brand-emerald-light' : 'text-brand-emerald'}`}>
              {stat.suffix}
            </span>
          </p>
          <p className={`text-sm mt-1 ${dark ? 'text-text-on-dark-muted' : 'text-text-secondary'}`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
