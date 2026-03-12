import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const chatMessages = [
  { from: 'coach', text: '오늘의 성장을 함께 점검해보겠습니다. 이번 주 목표 달성률은 72%입니다.' },
  { from: 'student', text: '수요일 실행이 어려웠어요.' },
  { from: 'coach', text: '수요일 패턴을 분석했을 때, 에너지 집중 시간대가 오전임을 확인했습니다. 목표 실행 시간을 오전으로 이동해보는 건 어떨까요?' },
];

export default function GwCoachDetailSection() {
  return (
    <SectionWrapper bg="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Chat mock */}
        <AnimatedEntry animation="slide-left">
          <div className="bg-surface-secondary rounded-2xl border border-border overflow-hidden">
            {/* Chat header */}
            <div className="bg-brand-navy px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-emerald flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">GW-Coach</p>
                <p className="text-brand-emerald-light text-xs">데이터 기반 AI 코치</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-emerald animate-growth-pulse" />
                <span className="text-text-on-dark-muted text-xs">온라인</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-5 space-y-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={[
                      'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                      msg.from === 'coach'
                        ? 'bg-white border border-border text-text-primary rounded-tl-none'
                        : 'bg-brand-navy text-white rounded-tr-none',
                    ].join(' ')}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedEntry>

        {/* Description */}
        <AnimatedEntry animation="slide-right">
          <SectionHeading
            eyebrow="GW-Coach"
            title="데이터가 말하는 코칭"
          />
          <div className="space-y-4">
            {[
              {
                title: '실행 데이터 분석',
                desc: '학생의 목표 달성률, 실행 패턴, 시간대별 성과를 자동으로 수집·분석합니다.',
              },
              {
                title: '개인화 메시지',
                desc: '동일한 메시지가 아닌, 학생 데이터에 기반한 맞춤형 코칭 피드백을 제공합니다.',
              },
              {
                title: '방향 재설정',
                desc: '실행이 막히는 지점을 감지하고, 다음 단계 방향을 구체적으로 안내합니다.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-surface-secondary rounded-xl p-4 border border-border">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald-pale flex items-center justify-center shrink-0">
                  <span className="text-brand-emerald text-xs font-black">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy mb-1">{item.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
