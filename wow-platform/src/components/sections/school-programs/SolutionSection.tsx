import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const steps = [
  {
    step: '1',
    label: '방향 설계',
    title: '캠프에서 목표를 세웁니다',
    desc: '1일·2일 집중 캠프를 통해 학생 스스로 방향을 탐색하고 실행 목표를 수립합니다.',
    color: 'bg-brand-navy',
  },
  {
    step: '2',
    label: '실행 관리',
    title: 'Growth Sprint로 실행합니다',
    desc: '2주·4주 단위 Sprint로 목표를 실제 행동으로 전환하고, 달성 여부를 데이터로 기록합니다.',
    color: 'bg-brand-emerald',
  },
  {
    step: '3',
    label: 'AI 코칭',
    title: 'GW-Coach가 함께합니다',
    desc: '실행 데이터를 분석한 AI 코치가 개인화된 피드백과 방향 재설정을 지원합니다.',
    color: 'bg-brand-navy-light',
  },
];

export default function SolutionSection() {
  return (
    <SectionWrapper bg="navy">
      <SectionHeading
        eyebrow="WOW의 해결 구조"
        title="캠프에서 시작해, 플랫폼으로 이어갑니다"
        subtitle="단발성 이벤트를 지속 가능한 성장 구조로 전환합니다."
        dark
        center
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-brand-navy-muted" />

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => (
            <AnimatedEntry key={step.step} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-5 relative z-10 shadow-md`}>
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                <span className="text-brand-emerald-light text-xs font-bold uppercase tracking-widest mb-2">
                  {step.label}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-text-on-dark-muted leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
