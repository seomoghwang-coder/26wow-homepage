import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const camps = [
  {
    badge: '1일형',
    title: '집중 체험 캠프',
    subtitle: '하루에 완성되는 진로 탐색 프로그램',
    duration: '1일 (6~8시간)',
    students: '20~300명',
    features: [
      '자기 이해 검사 & 결과 워크숍',
      '진로 분야 체험 액티비티',
      '목표 설계 워크북 작성',
      '팀 발표 & 마무리 세션',
    ],
    highlight: null,
    recommended: false,
    simulatorHref: '#simulator',
  },
  {
    badge: '2일형',
    title: '심화 프로젝트 캠프',
    subtitle: '1박 2일, 방향 설계부터 실행까지',
    duration: '2일 (1박 2일)',
    students: '20~200명',
    features: [
      '1일 캠프 전체 과정 포함',
      '심화 프로젝트 팀 미션',
      '코치 1:1 목표 면담',
      '기본 Growth Sprint 2주 포함',
      '필요 시 4주 연장 가능',
    ],
    highlight: '기본 Growth Sprint 2주 포함',
    recommended: true,
    simulatorHref: '#simulator-2day',
  },
];

export default function CampLineupSection() {
  return (
    <SectionWrapper bg="gray">
      <SectionHeading
        eyebrow="캠프 라인업"
        title="학교에 맞는 캠프를 선택하세요"
        center
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {camps.map((camp, i) => (
          <AnimatedEntry key={camp.badge} delay={i * 80}>
            <div className={[
              'rounded-2xl border-2 p-8 h-full flex flex-col relative',
              camp.recommended ? 'border-brand-emerald shadow-lg' : 'border-border',
            ].join(' ')}>
              {camp.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-brand-emerald text-white text-xs font-bold rounded-full shadow-sm">
                    추천
                  </span>
                </div>
              )}

              <div className="mb-5">
                <Badge variant={camp.recommended ? 'emerald' : 'gray'} className="mb-3">
                  {camp.badge}
                </Badge>
                <h3 className="text-xl font-bold text-brand-navy mb-1">{camp.title}</h3>
                <p className="text-sm text-text-secondary">{camp.subtitle}</p>
              </div>

              {/* Info row */}
              <div className="flex gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-xs text-text-muted mb-0.5">운영 기간</p>
                  <p className="text-sm font-semibold text-brand-navy">{camp.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">참가 인원</p>
                  <p className="text-sm font-semibold text-brand-navy">{camp.students}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {camp.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${feat === camp.highlight ? 'bg-brand-emerald' : 'bg-surface-secondary'}`}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke={feat === camp.highlight ? 'white' : '#10b981'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className={feat === camp.highlight ? 'text-brand-emerald-dark font-semibold' : 'text-text-secondary'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  href={camp.simulatorHref}
                  variant={camp.recommended ? 'primary' : 'secondary'}
                  size="md"
                  fullWidth
                >
                  이 프로그램 예상비용 확인하기
                </Button>
              </div>
            </div>
          </AnimatedEntry>
        ))}
      </div>
    </SectionWrapper>
  );
}
