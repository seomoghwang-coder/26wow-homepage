import Button from '@/components/ui/Button';

export default function CoachGreetingSection() {
  return (
    <section className="bg-brand-navy py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coach icon */}
        <div className="w-20 h-20 rounded-2xl bg-brand-emerald flex items-center justify-center mx-auto mb-10">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
          </svg>
        </div>

        <p className="text-brand-emerald-light text-sm font-bold uppercase tracking-widest mb-6">
          GW-Coach 인사말
        </p>

        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 italic">
          &ldquo;오늘의 성장을<br />함께 점검해보겠습니다.&rdquo;
        </blockquote>

        <p className="text-text-on-dark-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          GW-Coach (Growth Coach by WOW)는<br />
          학생의 실행 데이터를 분석하고,<br />
          성장의 방향을 함께 점검하는 데이터 기반 AI 코치입니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact?type=proposal" variant="primary" size="lg">
            GW-Coach 도입 문의
          </Button>
          <Button href="/growth-platform" variant="outline-white" size="lg">
            Growth Platform 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
