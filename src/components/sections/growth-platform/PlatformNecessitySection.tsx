import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

export default function PlatformNecessitySection() {
  return (
    <SectionWrapper bg="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedEntry animation="slide-left">
          <SectionHeading
            eyebrow="왜 플랫폼인가?"
            title="캠프는 시작일 뿐,\n성장은 그 이후입니다"
            subtitle="WOW Growth Platform은 캠프에서 설계한 방향을 실행과 데이터로 이어가는 성장 관리 시스템입니다."
          />

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: '일회성 캠프', desc: '경험으로 끝남', bad: true },
              { label: 'Growth Platform', desc: '지속 성장 구조', bad: false },
              { label: '주관적 평가', desc: '성과 측정 불가', bad: true },
              { label: '데이터 기반', desc: '성과 가시화', bad: false },
            ].map((item) => (
              <div
                key={item.label}
                className={[
                  'rounded-xl p-4 border',
                  item.bad
                    ? 'bg-red-50 border-red-200'
                    : 'bg-brand-emerald-pale border-brand-emerald-light',
                ].join(' ')}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {item.bad ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2l10 10M12 2L2 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3 3 7-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <span className={`text-xs font-bold ${item.bad ? 'text-red-600' : 'text-brand-emerald-dark'}`}>
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedEntry>

        <AnimatedEntry animation="slide-right">
          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <p className="text-brand-emerald-light text-sm font-bold uppercase tracking-wider mb-4">
              Growth Platform 정의
            </p>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
              &ldquo;Growth Platform은 캠프에서 설계한 방향을 실행과 데이터로 이어가는 성장 관리 시스템입니다.&rdquo;
            </blockquote>
            <div className="space-y-3">
              {[
                '진단 → 실행 → 측정 → 코칭의 순환 구조',
                'GW-Coach AI 기반 개인화 코칭',
                '실행 데이터 기반 성장 리포트',
                '학교·교사가 확인 가능한 투명한 대시보드',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-text-on-dark-muted">
                  <span className="w-5 h-5 rounded-full bg-brand-emerald flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5l3 3 5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
