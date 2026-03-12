import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

// Pentagon positions: radius 130 from center (200, 200)
// Clockwise from top: 진단 → 실행 → 성찰 → 측정 → 코칭
const nodes = [
  { id: 'diagnose', label: '진단', desc: '현재 위치 파악', cx: 200, cy: 70,  fill: '#0f2044' },
  { id: 'execute',  label: '실행', desc: '목표 행동 실행', cx: 324, cy: 160, fill: '#10b981' },
  { id: 'reflect',  label: '성찰', desc: '경험 돌아보기',  cx: 276, cy: 305, fill: '#10b981' },
  { id: 'measure',  label: '측정', desc: '데이터 수집·분석', cx: 124, cy: 305, fill: '#0f2044' },
  { id: 'coach',   label: '코칭', desc: '방향 재설정',    cx: 76,  cy: 160, fill: '#10b981' },
];

const descriptions = [
  '학생의 현재 상태, 목표, 실행 역량을 GW-Coach가 초기 진단합니다.',
  '진단 결과를 바탕으로 수립된 목표를 Sprint 구조 안에서 실행합니다.',
  '실행 과정의 경험과 변화를 스스로 돌아보고, 성장 포인트를 발견합니다.',
  '실행 데이터를 수집·분석해 성장 진도와 패턴을 가시화합니다.',
  'AI 코치가 데이터를 해석해 다음 단계 방향과 개선점을 제시합니다.',
];

// Quadratic Bezier arc: curves slightly toward center for clockwise flow
function arcPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const cx = mx + (200 - mx) * 0.25;
  const cy = my + (200 - my) * 0.25;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export default function GrowthLoopSection() {
  return (
    <SectionWrapper bg="gray">
      <SectionHeading
        eyebrow="Growth Loop"
        title="성장의 5단계 순환 구조"
        subtitle="진단에서 코칭까지, 데이터 기반 성장이 반복되는 순환 시스템입니다."
        center
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* SVG Pentagon Diagram */}
        <div className="w-full max-w-sm lg:max-w-[400px] shrink-0">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-auto drop-shadow-md"
            aria-label="Growth Loop 5단계 순환 다이어그램"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
              </marker>
            </defs>

            {/* Background guide circle */}
            <circle cx="200" cy="200" r="130" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />

            {/* Connecting arcs (clockwise: 0→1→2→3→4→0) */}
            {nodes.map((node, i) => {
              const next = nodes[(i + 1) % nodes.length];
              return (
                <path
                  key={node.id}
                  d={arcPath(node.cx, node.cy, next.cx, next.cy)}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  markerEnd="url(#arrowhead)"
                  opacity="0.7"
                />
              );
            })}

            {/* Center circle */}
            <circle cx="200" cy="200" r="44" fill="#0f2044" />
            <text x="200" y="196" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="system-ui">
              성장
            </text>
            <text x="200" y="214" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="system-ui">
              Growth
            </text>

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle cx={node.cx} cy={node.cy} r="34" fill={node.fill} stroke="white" strokeWidth="3" />
                <text x={node.cx} y={node.cy - 4} textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">
                  {node.label}
                </text>
                <text x={node.cx} y={node.cy + 13} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="system-ui">
                  {node.desc}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Step descriptions */}
        <div className="space-y-5 flex-1">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm"
                style={{ backgroundColor: node.fill }}
              >
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">{node.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{descriptions[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
