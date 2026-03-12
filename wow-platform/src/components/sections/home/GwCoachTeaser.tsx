import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedEntry from '@/components/ui/AnimatedEntry';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function GwCoachTeaser() {
  return (
    <SectionWrapper bg="gray">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedEntry>
          <Badge variant="navy" className="mb-5">GW-Coach</Badge>

          {/* AI Coach icon */}
          <div className="w-20 h-20 rounded-2xl bg-brand-navy flex items-center justify-center mx-auto mb-8 animate-growth-pulse">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            GW-Coach (Growth Coach by WOW)
          </h2>

          {/* Greeting quote */}
          <blockquote className="text-xl md:text-2xl text-brand-emerald font-medium italic mb-6">
            &ldquo;오늘의 성장을 함께 점검해보겠습니다.&rdquo;
          </blockquote>

          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            학생의 실행 데이터를 분석하고,<br />
            성장의 방향을 함께 점검하는 데이터 기반 AI 코치입니다.
          </p>

          {/* Mini feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              '데이터 기반 분석',
              '개인화 코칭 메시지',
              '성장 방향 점검',
              '실행 추적',
            ].map((feat) => (
              <span
                key={feat}
                className="px-4 py-1.5 bg-white rounded-full text-sm font-medium text-brand-navy border border-border shadow-sm"
              >
                {feat}
              </span>
            ))}
          </div>

          <Button href="/gw-coach" variant="primary" size="lg">
            GW-Coach 자세히 알아보기
          </Button>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
