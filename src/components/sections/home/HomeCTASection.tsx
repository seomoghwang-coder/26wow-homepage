import Button from '@/components/ui/Button';

export default function HomeCTASection() {
  return (
    <section className="bg-brand-emerald py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">
          지금 시작하세요
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          우리 학교에 맞는<br />제안을 받아보세요.
        </h2>
        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          학교 규모, 예산, 목적에 맞는 최적의 프로그램을<br className="hidden sm:block" />
          WOW Growth Platform이 직접 설계해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact?type=proposal" variant="secondary" size="lg">
            제안서 요청하기
          </Button>
          <Button href="/contact" variant="outline-white" size="lg">
            상담 문의
          </Button>
        </div>
      </div>
    </section>
  );
}
