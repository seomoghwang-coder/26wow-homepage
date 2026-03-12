import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import TrustBar from '@/components/sections/shared/TrustBar';

export default function HeroSection() {
  return (
    <section className="bg-brand-navy pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <Badge variant="emerald" className="mb-6">
          16년 교육의 신뢰
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          이제 성장 플랫폼으로<br className="hidden sm:block" />
          <span className="text-brand-emerald-light"> 진화합니다.</span>
        </h1>

        {/* Sub copy */}
        <p className="text-lg md:text-xl text-text-on-dark-muted leading-relaxed max-w-2xl mx-auto mb-10">
          캠프로 방향을 세우고,<br className="sm:hidden" /> 데이터 기반 코칭으로 성장을 이어갑니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/school-programs" variant="primary" size="lg">
            프로그램 알아보기
          </Button>
          <Button href="/gw-coach" variant="outline-white" size="lg">
            GW-Coach 소개
          </Button>
        </div>

        {/* Trust stats */}
        <TrustBar dark />
      </div>
    </section>
  );
}
