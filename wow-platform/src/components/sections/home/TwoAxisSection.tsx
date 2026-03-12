import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';
import Button from '@/components/ui/Button';

export default function TwoAxisSection() {
  return (
    <SectionWrapper bg="gray">
      <SectionHeading
        eyebrow="두 축의 성장 구조"
        title="캠프와 플랫폼이 함께 작동합니다"
        subtitle="WOW Growth Platform은 단발성 캠프를 넘어, 지속 가능한 성장 시스템을 설계합니다."
        center
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Camp Axis */}
        <AnimatedEntry delay={0}>
          <div className="bg-white rounded-2xl p-8 border-2 border-border hover:border-brand-navy hover:shadow-lg transition-all duration-300 h-full flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5">
              {/* Tent icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L12 4 3 20z" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">AXIS 1</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">캠프 프로그램</h3>
            <p className="text-text-secondary leading-relaxed flex-1">
              1일형·2일형 집중 캠프로 학생의 방향을 설계합니다. 진로 탐색부터 목표 수립까지, 구조화된 프로그램이 핵심 역량을 깨웁니다.
            </p>
            <ul className="mt-5 space-y-2">
              {['1일 집중 체험형 캠프', '2일 심화 프로젝트형 캠프', '기본 2주 Growth Sprint 포함'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/school-programs" variant="secondary" size="sm">
                프로그램 보기
              </Button>
            </div>
          </div>
        </AnimatedEntry>

        {/* Platform Axis */}
        <AnimatedEntry delay={100}>
          <div className="bg-brand-navy rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-emerald flex items-center justify-center mb-5">
              {/* Chart icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald-light">AXIS 2</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Growth Platform</h3>
            <p className="text-text-on-dark-muted leading-relaxed flex-1">
              캠프에서 설계한 방향을 실행과 데이터로 이어가는 성장 관리 시스템. GW-Coach AI가 학생 개개인의 성장을 추적합니다.
            </p>
            <ul className="mt-5 space-y-2">
              {['GW-Sprint 2주·4주 과정', 'GW-Coach AI 데이터 코칭', '개인별 성장 리포트'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-on-dark-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/growth-platform" variant="outline-white" size="sm">
                플랫폼 보기
              </Button>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
