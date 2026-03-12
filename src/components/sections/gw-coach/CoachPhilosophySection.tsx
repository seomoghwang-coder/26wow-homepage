import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const pillars = [
  {
    number: '01',
    title: '데이터가 먼저입니다',
    desc: '감각이나 추측이 아닌, 실행 데이터를 기반으로 학생의 상태를 정확히 파악합니다. 주관적 평가를 객관적 데이터로 대체합니다.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '방향을 함께 점검합니다',
    desc: '정답을 주는 것이 아니라, 학생이 스스로 방향을 찾을 수 있도록 질문하고 안내합니다. 코치는 동반자입니다.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: '개인화가 핵심입니다',
    desc: '같은 목표를 가져도 학생마다 실행 방식이 다릅니다. GW-Coach는 각 학생의 패턴을 분석해 맞춤형 접근을 제공합니다.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function CoachPhilosophySection() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="코치 철학"
        title="GW-Coach의 3가지 원칙"
        subtitle="기술이 아닌 철학이 코칭의 품질을 결정합니다."
        center
      />

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <AnimatedEntry key={pillar.number} delay={i * 80}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center mx-auto mb-5">
                {pillar.icon}
              </div>
              <span className="text-4xl font-black text-border block mb-3">{pillar.number}</span>
              <h3 className="text-lg font-bold text-brand-navy mb-3">{pillar.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{pillar.desc}</p>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
