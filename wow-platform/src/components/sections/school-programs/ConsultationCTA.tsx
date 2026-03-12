import Button from '@/components/ui/Button';

export default function ConsultationCTA() {
  return (
    <section className="bg-brand-navy py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-emerald-light text-sm font-semibold uppercase tracking-widest mb-4">
          지금 시작하세요
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          우리 학교에 맞는<br />제안을 받아보세요.
        </h2>
        <p className="text-text-on-dark-muted text-lg mb-10 leading-relaxed">
          학교 규모와 예산에 맞는 맞춤 제안서를<br className="hidden sm:block" />
          영업일 기준 1~2일 내에 받으실 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact?type=proposal" variant="primary" size="lg">
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
