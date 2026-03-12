import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const dialogues = [
  {
    from: 'coach',
    text: '오늘의 성장을 함께 점검해보겠습니다. 이번 주 실행 기록을 보면, 화요일과 목요일 목표 달성률이 특히 높았네요. 어떤 점이 달랐나요?',
  },
  {
    from: 'student',
    text: '그날은 시간을 미리 정해두고 실행했어요.',
  },
  {
    from: 'coach',
    text: '좋은 발견이에요. 데이터를 보면 사전 계획이 있는 날 달성률이 평균 31% 높습니다. 다음 주에도 이 방식을 유지해보는 건 어떨까요?',
  },
  {
    from: 'student',
    text: '네, 해볼게요. 수요일이 항상 어려운데요...',
  },
  {
    from: 'coach',
    text: '수요일은 에너지 소모가 많은 날이군요. 목표 난이도를 조금 낮춰 "가볍게 시작하기" 버전으로 바꿔볼까요? 완벽한 실행보다 지속하는 것이 더 중요합니다.',
  },
];

const toneTraits = [
  '따뜻하지만 데이터에 근거한 언어 사용',
  '질문을 통해 학생이 스스로 발견하도록 유도',
  '잘한 점 인정 → 개선점 제시 → 다음 행동 제안',
  '과도한 격려 없이 사실 기반의 명확한 피드백',
];

export default function CoachToneSection() {
  return (
    <SectionWrapper bg="gray">
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Dialogue */}
        <AnimatedEntry animation="slide-left">
          <SectionHeading
            eyebrow="코칭 대화 예시"
            title="GW-Coach의 말하는 방식"
          />
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="bg-brand-navy px-5 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-brand-emerald" />
              </div>
              <span className="text-text-on-dark-muted text-xs ml-2">GW-Coach 대화</span>
            </div>
            <div className="p-5 space-y-3 max-h-80 overflow-y-auto">
              {dialogues.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'student' ? 'justify-end' : 'justify-start'}`}>
                  {msg.from === 'coach' && (
                    <div className="w-7 h-7 rounded-full bg-brand-emerald flex items-center justify-center shrink-0 mr-2 mt-1">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                  )}
                  <div
                    className={[
                      'max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                      msg.from === 'coach'
                        ? 'bg-surface-secondary text-text-primary rounded-tl-none border border-border'
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

        {/* Tone traits */}
        <AnimatedEntry animation="slide-right" delay={100}>
          <SectionHeading
            eyebrow="말하기 원칙"
            title="코칭 언어의 4가지 특징"
          />
          <div className="space-y-4">
            {toneTraits.map((trait, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center shrink-0 text-white font-black text-sm">
                  {i + 1}
                </div>
                <p className="text-sm text-text-primary leading-relaxed pt-1">{trait}</p>
              </div>
            ))}
          </div>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
