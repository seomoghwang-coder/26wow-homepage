import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const problems = [
  {
    number: '01',
    title: '일회성 캠프의 한계',
    desc: '좋은 캠프를 경험해도 이후 연결이 없으면 효과가 지속되지 않습니다. 학생들은 캠프가 끝나면 원래 상태로 돌아갑니다.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '측정 불가능한 성과',
    desc: '프로그램 이후 학생이 어떻게 변했는지 데이터로 확인하기 어렵습니다. 학교는 효과를 증명하기 어렵고, 예산 책정도 막막합니다.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: '개인화 부재',
    desc: '동일한 프로그램이 모든 학생에게 적용됩니다. 각기 다른 출발점과 목표를 가진 학생들에게 맞춤형 접근이 필요합니다.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="현실적인 문제"
        title="왜 기존 교육 프로그램으로는 부족할까요?"
        subtitle="단발성 행사로는 변화를 만들 수 없습니다. 구조가 필요합니다."
        center
      />

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((prob, i) => (
          <AnimatedEntry key={prob.number} delay={i * 80}>
            <div className="bg-surface-secondary rounded-xl p-6 border border-border h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-red-400">{prob.icon}</div>
                <span className="text-3xl font-black text-border">{prob.number}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{prob.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{prob.desc}</p>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
