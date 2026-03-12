import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import TwoAxisSection from '@/components/sections/home/TwoAxisSection';
import CampSummarySection from '@/components/sections/home/CampSummarySection';
import PlatformSummarySection from '@/components/sections/home/PlatformSummarySection';
import GwCoachTeaser from '@/components/sections/home/GwCoachTeaser';
import HomeCTASection from '@/components/sections/home/HomeCTASection';

export const metadata: Metadata = {
  title: 'WOW Growth Platform | 16년 교육의 신뢰, 성장 플랫폼으로 진화',
  description:
    'WOW교육컨설팅의 Growth Platform — 캠프로 방향을 세우고, 데이터 기반 코칭으로 성장을 이어갑니다. 학교 맞춤 프로그램 및 GW-Coach AI 코칭 시스템.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TwoAxisSection />
      <CampSummarySection />
      <PlatformSummarySection />
      <GwCoachTeaser />
      <HomeCTASection />
    </>
  );
}
