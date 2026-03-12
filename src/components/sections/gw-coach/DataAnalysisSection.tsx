import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedEntry from '@/components/ui/AnimatedEntry';

const dimensions = [
  { label: '실행 일관성', score: 85, desc: '계획 대비 실제 실행 비율과 패턴 분석' },
  { label: '목표 달성률', score: 72, desc: '설정한 목표 중 완료된 비율 추적' },
  { label: '에너지 집중 시간대', score: 91, desc: '최고 효율이 나오는 시간·요일 파악' },
  { label: '성장 가속도', score: 68, desc: '시간 경과에 따른 성장 속도 변화' },
];

export default function DataAnalysisSection() {
  return (
    <SectionWrapper bg="navy">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="데이터 분석"
          title="4가지 차원으로 성장을 분석합니다"
          subtitle="GW-Coach는 학생의 실행 데이터를 다각도로 수집·분석해 정확한 피드백을 제공합니다."
          dark
          center
        />

        <div className="grid md:grid-cols-2 gap-5">
          {dimensions.map((dim, i) => (
            <AnimatedEntry key={dim.label} delay={i * 80}>
              <div className="bg-brand-navy-light rounded-xl p-5 border border-brand-navy-muted">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-white text-sm">{dim.label}</h3>
                    <p className="text-xs text-text-on-dark-muted mt-0.5">{dim.desc}</p>
                  </div>
                  <span className="text-2xl font-black text-brand-emerald-light">{dim.score}%</span>
                </div>
                {/* Bar */}
                <div className="h-2.5 bg-brand-navy rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-emerald rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            </AnimatedEntry>
          ))}
        </div>

        <AnimatedEntry delay={400}>
          <div className="mt-8 bg-brand-navy-light rounded-2xl p-6 border border-brand-navy-muted">
            <p className="text-brand-emerald-light text-xs font-bold uppercase tracking-wider mb-3">
              GW-Coach 분석 결과 예시
            </p>
            <p className="text-text-on-dark-muted text-sm leading-relaxed">
              &ldquo;3주간의 데이터를 분석했을 때, 오전 9–11시에 실행한 목표의 달성률이 오후 대비 <span className="text-brand-emerald-light font-semibold">38% 높습니다</span>.
              또한 목표를 3개 이하로 설정한 날의 완료율이 <span className="text-brand-emerald-light font-semibold">91%</span>로,
              다음 Sprint에서는 집중 목표 수를 줄이고 오전 실행에 우선순위를 두는 것을 권장합니다.&rdquo;
            </p>
          </div>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  );
}
