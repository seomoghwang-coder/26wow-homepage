import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';
import { TESTIMONIALS } from '@/lib/constants';

export default function SuccessCasesSection() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="도입 사례"
        title="실제 학교들의 이야기"
        subtitle="WOW Growth Platform을 도입한 학교들의 실제 변화입니다."
        center
      />

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <AnimatedEntry key={t.id} delay={i * 80}>
            <div className="bg-surface-secondary rounded-2xl p-6 border border-border h-full flex flex-col">
              {/* School info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-brand-navy">{t.schoolType}</p>
                  <p className="text-xs text-text-muted">{t.schoolSize}</p>
                </div>
              </div>

              {/* Result metric */}
              <div className="bg-brand-emerald-pale rounded-xl px-4 py-3 mb-4 border border-brand-emerald-light">
                <p className="text-sm font-bold text-brand-emerald-dark">{t.result}</p>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Program used */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-text-muted">사용 프로그램</p>
                <p className="text-xs font-semibold text-brand-navy mt-0.5">{t.programUsed}</p>
              </div>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
