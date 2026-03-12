import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const steps = [
  {
    step: '1',
    trigger: '실행 데이터 감지',
    desc: '목표 달성 진도, 실행 패턴 변화, 이상 신호를 자동으로 감지합니다.',
    type: 'auto',
  },
  {
    step: '2',
    trigger: '개입 시점 판단',
    desc: '데이터 임계값과 패턴을 분석해 코치 개입이 필요한 시점을 결정합니다.',
    type: 'ai',
  },
  {
    step: '3',
    trigger: '맞춤 메시지 생성',
    desc: '해당 학생의 실행 이력과 목표를 반영한 개인화된 코칭 메시지를 작성합니다.',
    type: 'ai',
  },
  {
    step: '4',
    trigger: '학생 전달 & 반응 수집',
    desc: '코칭 메시지를 전달하고 학생 반응을 기록해 다음 분석에 활용합니다.',
    type: 'auto',
  },
];

export default function CoachInterventionSection() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="개입 구조"
        title="코치는 언제 개입하는가?"
        subtitle="GW-Coach는 데이터 기반으로 최적의 타이밍에 정확히 개입합니다."
        center
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimatedEntry key={step.step} delay={i * 80}>
                <div className="flex items-start gap-5">
                  {/* Step indicator */}
                  <div className="w-12 h-12 rounded-full bg-brand-navy border-4 border-white shadow-md flex items-center justify-center shrink-0 relative z-10">
                    <span className="text-white font-black text-sm">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface-secondary rounded-xl p-5 border border-border">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-brand-navy">{step.trigger}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${
                        step.type === 'ai'
                          ? 'bg-brand-emerald-pale text-brand-emerald-dark'
                          : 'bg-surface-tertiary text-text-secondary'
                      }`}>
                        {step.type === 'ai' ? 'AI 처리' : '자동화'}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
