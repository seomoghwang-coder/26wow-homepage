import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const sprintCards = [
  {
    title: 'GW-Sprint 2주',
    color: 'border-brand-emerald',
    header: 'bg-brand-emerald',
    items: ['캠프 목표 전환', '주 2회 실행 체크', 'AI 코치 중간 점검', '2주 성과 리포트'],
    ideal: '캠프 직후 적용, 첫 Growth 경험',
  },
  {
    title: 'GW-Sprint 4주',
    color: 'border-brand-navy',
    header: 'bg-brand-navy',
    items: ['상세 목표 분해', '주 2~3회 실행 체크', 'AI 코치 주간 점검', '중간 방향 재설정', '4주 종합 리포트', '다음 Sprint 설계'],
    ideal: '심화 성장, 측정 가능한 성과 필요',
  },
];

export default function GwSprintSection() {
  return (
    <SectionWrapper bg="navy">
      <SectionHeading
        eyebrow="GW-Sprint"
        title="구조화된 실행 프로그램"
        subtitle="목표를 실제 행동으로 전환하는 Sprint 구조입니다."
        dark
        center
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {sprintCards.map((card, i) => (
          <AnimatedEntry key={card.title} delay={i * 80}>
            <div className={`bg-brand-navy-light rounded-2xl border-2 ${card.color} overflow-hidden h-full`}>
              <div className={`${card.header} px-6 py-4`}>
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-text-on-dark-muted">
                      <span className="w-4 h-4 rounded-full bg-brand-emerald flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand-navy-muted pt-4">
                  <p className="text-xs text-text-on-dark-muted">
                    <span className="text-brand-emerald-light font-semibold">적합:</span> {card.ideal}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
