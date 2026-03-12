import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const camps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: '1일형',
    title: '집중 체험 캠프',
    desc: '하루 안에 완성되는 진로 탐색·역량 체험 프로그램',
    tag: '인기',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18L12 4 3 20z" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    label: '2일형',
    title: '심화 프로젝트 캠프',
    desc: '1박 2일, 팀 기반 프로젝트로 실질적 성장 경험 설계',
    tag: 'Sprint 포함',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: '2주·4주형',
    title: 'Growth Sprint',
    desc: '캠프 이후 지속 성장을 위한 정기 실행 관리 과정',
    tag: '플랫폼 연동',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: '맞춤형',
    title: '학교 특화 프로그램',
    desc: '학교 규모·학년·예산에 맞춘 커스텀 프로그램 설계',
    tag: '상담 필요',
  },
];

export default function CampSummarySection() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="캠프 라인업"
        title="학교에 맞는 캠프를 선택하세요"
        subtitle="규모와 목적에 따라 유연하게 구성할 수 있습니다."
        center
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {camps.map((camp, i) => (
          <AnimatedEntry key={camp.label} delay={i * 80}>
            <div className="bg-surface-secondary rounded-xl p-6 border border-border hover:border-brand-emerald hover:shadow-md transition-all duration-200 h-full">
              <div className="text-brand-navy mb-4">{camp.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-brand-emerald">{camp.label}</span>
                <span className="text-xs bg-brand-emerald-pale text-brand-emerald-dark px-2 py-0.5 rounded-full">
                  {camp.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">{camp.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{camp.desc}</p>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
