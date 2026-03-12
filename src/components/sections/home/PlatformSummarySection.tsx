import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';
import Button from '@/components/ui/Button';

const features = [
  {
    title: 'Growth Loop 시스템',
    desc: '진단 → 실행 → 측정 → 코칭의 순환 구조로 성장을 데이터화합니다.',
  },
  {
    title: 'GW-Sprint 과정',
    desc: '2주·4주 단위의 구조화된 실행 프로그램으로 목표를 현실로 전환합니다.',
  },
  {
    title: 'GW-Coach AI',
    desc: '학생의 실행 데이터를 분석하고 개인화된 성장 방향을 제시하는 AI 코치입니다.',
  },
  {
    title: '성장 리포트',
    desc: '학교와 교사가 확인 가능한 투명한 성장 데이터 대시보드를 제공합니다.',
  },
];

export default function PlatformSummarySection() {
  return (
    <SectionWrapper bg="navy">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading + description */}
        <AnimatedEntry animation="slide-left">
          <SectionHeading
            eyebrow="Growth Platform"
            title="일회성 캠프를 넘어, 지속 가능한 성장으로"
            subtitle="Growth Platform은 캠프에서 설계한 방향을 실행과 데이터로 이어가는 성장 관리 시스템입니다."
            dark
          />
          <div className="mt-6">
            <Button href="/growth-platform" variant="primary" size="md">
              플랫폼 자세히 보기
            </Button>
          </div>
        </AnimatedEntry>

        {/* Right: Feature list */}
        <div className="space-y-4">
          {features.map((feat, i) => (
            <AnimatedEntry key={feat.title} delay={i * 80} animation="slide-right">
              <div className="flex items-start gap-4 bg-brand-navy-light rounded-xl p-5 border border-brand-navy-muted">
                <div className="w-6 h-6 rounded-full bg-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{feat.title}</p>
                  <p className="text-sm text-text-on-dark-muted leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
