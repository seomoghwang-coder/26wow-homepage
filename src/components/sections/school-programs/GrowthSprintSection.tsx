import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const sprints = [
  {
    title: 'Growth Sprint 2주',
    tag: '기본 포함',
    tagColor: 'bg-brand-emerald text-white',
    weeks: [
      { week: 'Week 1', milestone: '목표 실행 시작', desc: '캠프에서 수립한 목표를 첫 주에 실행으로 전환. GW-Coach 초기 진단' },
      { week: 'Week 2', milestone: '중간 점검 & 마무리', desc: '실행 데이터 분석, AI 코치 피드백, 다음 단계 방향 설정' },
    ],
    suitable: ['첫 번째 Growth 경험', '캠프 후 2주 집중 연습', '예산 효율 중시'],
  },
  {
    title: 'Growth Sprint 4주',
    tag: '심화 과정',
    tagColor: 'bg-brand-navy text-white',
    weeks: [
      { week: 'Week 1', milestone: '목표 설정 & 실행 시작', desc: '상세 목표 분해 및 1주차 실행 계획 수립' },
      { week: 'Week 2', milestone: '중간 점검', desc: 'AI 코치 데이터 분석 및 방향 재조정' },
      { week: 'Week 3', milestone: '가속 실행', desc: '중간 피드백 반영, 집중 실행 구간' },
      { week: 'Week 4', milestone: '성과 정리 & 다음 목표', desc: '4주 성과 리포트, 다음 Sprint 방향 설계' },
    ],
    suitable: ['깊이 있는 성장 경험', '측정 가능한 성과 필요', 'GW-Coach AI 연동 극대화'],
  },
];

export default function GrowthSprintSection() {
  return (
    <SectionWrapper bg="gray">
      <SectionHeading
        eyebrow="Growth Sprint"
        title="캠프 이후 성장을 이어가는 구조"
        subtitle="2주 또는 4주 단위로 실행을 관리하고, AI 코치가 동행합니다."
        center
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sprints.map((sprint, i) => (
          <AnimatedEntry key={sprint.title} delay={i * 100}>
            <div className="bg-white rounded-2xl border border-border overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-brand-navy px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{sprint.title}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${sprint.tagColor}`}>
                    {sprint.tag}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 flex-1">
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">주차별 마일스톤</p>
                <div className="space-y-4">
                  {sprint.weeks.map((w, wi) => (
                    <div key={w.week} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-brand-emerald-pale border-2 border-brand-emerald flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-brand-emerald">{wi + 1}</span>
                        </div>
                        {wi < sprint.weeks.length - 1 && (
                          <div className="w-0.5 bg-border flex-1 mt-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-brand-emerald">{w.week}</span>
                          <span className="text-sm font-semibold text-brand-navy">{w.milestone}</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suitable for */}
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">이런 학교에 적합</p>
                  <ul className="space-y-1">
                    {sprint.suitable.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
