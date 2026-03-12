import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const reportCards = [
  {
    title: '주간 실행 리포트',
    icon: '📊',
    metrics: [
      { label: '목표 달성률', value: '72%', bar: 72, color: 'bg-brand-emerald' },
      { label: '실행 일관성', value: '85%', bar: 85, color: 'bg-brand-navy' },
      { label: '집중도 점수', value: '68%', bar: 68, color: 'bg-brand-emerald' },
    ],
  },
  {
    title: '성장 진도 리포트',
    icon: '📈',
    metrics: [
      { label: '1주차', value: '42%', bar: 42, color: 'bg-surface-tertiary' },
      { label: '2주차', value: '61%', bar: 61, color: 'bg-brand-emerald-light' },
      { label: '3주차', value: '78%', bar: 78, color: 'bg-brand-emerald' },
    ],
  },
  {
    title: 'GW-Coach 종합 분석',
    icon: '🤖',
    bullets: [
      '오전 시간대 집중력 최고',
      '목표 세분화 시 달성률 +23%',
      '다음 Sprint 추천: 4주 심화',
    ],
  },
];

export default function ReportSystemSection() {
  return (
    <SectionWrapper bg="gray">
      <SectionHeading
        eyebrow="성장 리포트"
        title="보이는 성장, 증명 가능한 효과"
        subtitle="학생·코치·학교 모두가 성장 데이터를 실시간으로 확인할 수 있습니다."
        center
      />

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {reportCards.map((card, i) => (
          <AnimatedEntry key={card.title} delay={i * 80}>
            <div className="bg-white rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-sm font-bold text-brand-navy">{card.title}</h3>
              </div>

              {card.metrics && (
                <div className="space-y-4">
                  {card.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-text-secondary">{m.label}</span>
                        <span className="font-bold text-brand-navy">{m.value}</span>
                      </div>
                      <div className="h-2 bg-surface-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${m.color} rounded-full transition-all duration-700`}
                          style={{ width: `${m.bar}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {card.bullets && (
                <ul className="space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-brand-emerald-pale flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedEntry>
        ))}
      </div>

      {/* Roles */}
      <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          { role: '학생', desc: '나의 성장 진도와 AI 코치 피드백 확인' },
          { role: '코치', desc: '전체 학생 데이터 모니터링 및 개입 지점 파악' },
          { role: '학교·교사', desc: '프로그램 효과 측정 및 보고서 출력' },
        ].map((item) => (
          <div key={item.role} className="bg-white rounded-xl p-4 border border-border text-center">
            <p className="font-bold text-brand-navy text-sm mb-1">{item.role}</p>
            <p className="text-xs text-text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
