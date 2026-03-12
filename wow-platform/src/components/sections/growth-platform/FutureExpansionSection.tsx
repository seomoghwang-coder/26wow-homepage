import SectionWrapper from '@/components/ui/SectionWrapper';

function ProgressBar({ label, pct, color = 'emerald' }: { label: string; pct: number; color?: 'emerald' | 'navy' }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-text-secondary">
        <span>{label}</span>
        <span className="font-semibold">{pct}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={color === 'emerald' ? 'h-full bg-brand-emerald rounded-full' : 'h-full bg-brand-navy rounded-full'}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

const studentTasks = [
  { label: '영어 단어 30개 암기', done: true },
  { label: '수학 문제풀이 2시간', done: true },
  { label: '독서 30분', done: false },
];

const coachStudents = [
  { name: '김민준', rate: 78, status: '안정', ok: true },
  { name: '이서연', rate: 92, status: '우수', ok: true },
  { name: '박지호', rate: 41, status: '개입 필요', ok: false },
];

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 shrink-0">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded text-xs text-slate-400 px-3 py-1 text-center truncate">
        {url}
      </div>
    </div>
  );
}

export default function FutureExpansionSection() {
  return (
    <SectionWrapper bg="navy">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-emerald/20 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald inline-block" />
          Phase 2 · Coming Soon
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          성장 플랫폼의 다음 단계
        </h2>
        <p className="text-text-on-dark-muted text-lg max-w-2xl mx-auto leading-relaxed">
          캠프와 코칭이 연결된 온라인 플랫폼으로 확장됩니다.<br />
          학생은 목표를 기록하고, 코치는 데이터로 관리합니다.
        </p>
      </div>

      {/* Mockup cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Student Dashboard */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <BrowserChrome url="growthplatform.kr/student" />
          <div className="p-5 flex flex-col gap-4 flex-1">
            {/* Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-brand-navy text-sm">안녕하세요, 김민준 님 👋</div>
                <div className="text-xs text-text-secondary mt-0.5">Growth Sprint D+12</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald font-bold text-sm shrink-0">
                김
              </div>
            </div>

            {/* Daily tasks */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wide">오늘의 실행 체크</div>
              {studentTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs">
                  <div className={[
                    'w-4 h-4 rounded flex items-center justify-center shrink-0',
                    task.done ? 'bg-brand-emerald text-white' : 'border-2 border-slate-200',
                  ].join(' ')}>
                    {task.done && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <span className={task.done ? 'line-through text-text-muted' : 'text-text-primary'}>
                    {task.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wide">성장 현황</div>
              <ProgressBar label="실행률" pct={78} />
              <ProgressBar label="목표 달성률" pct={65} color="navy" />
            </div>

            {/* Coach message */}
            <div className="bg-brand-emerald/10 rounded-lg p-3 text-xs text-brand-emerald-dark leading-relaxed">
              💬 GW-Coach: &ldquo;지난 이틀 연속 실행 달성, 정말 잘하고 있어요!&rdquo;
            </div>
          </div>
        </div>

        {/* Coach Dashboard */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <BrowserChrome url="growthplatform.kr/coach" />
          <div className="p-5 flex flex-col gap-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-brand-navy text-sm">코치 대시보드</div>
                <div className="text-xs text-text-secondary mt-0.5">담당 학생 28명</div>
              </div>
              <span className="px-2 py-0.5 bg-brand-emerald/10 text-brand-emerald text-xs font-bold rounded">
                Sprint 2주
              </span>
            </div>

            {/* Student list */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wide">실행률 현황</div>
              {coachStudents.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-bold text-xs shrink-0">
                    {s.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-0.5">
                      <span className="font-medium text-text-primary">{s.name}</span>
                      <span className={s.ok ? 'text-brand-emerald font-semibold' : 'text-red-500 font-semibold'}>
                        {s.rate}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={s.ok ? 'h-full bg-brand-emerald rounded-full' : 'h-full bg-red-400 rounded-full'}
                        style={{ width: `${s.rate}%` }}
                      />
                    </div>
                  </div>
                  <span className={[
                    'px-1.5 py-0.5 rounded text-xs shrink-0',
                    s.ok ? 'bg-slate-100 text-text-secondary' : 'bg-red-50 text-red-600',
                  ].join(' ')}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Group analytics */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wide">그룹 인사이트</div>
              <ProgressBar label="그룹 평균 실행률" pct={71} />
              <ProgressBar label="평균 만족도" pct={88} color="navy" />
            </div>

            {/* Alert */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-xs text-red-700 leading-relaxed">
              ⚠ 개입 필요 학생 3명 · 코칭 메시지 발송 권장
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-text-on-dark-muted text-sm mt-10">
        Phase 2 플랫폼 출시 예정 · 캠프 진행 학교 우선 안내
      </p>
    </SectionWrapper>
  );
}
