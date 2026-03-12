import type { Metadata } from 'next';
import PageHero from '@/components/sections/shared/PageHero';
import ProblemSection from '@/components/sections/school-programs/ProblemSection';
import PlatformNecessitySection from '@/components/sections/growth-platform/PlatformNecessitySection';
import GrowthLoopSection from '@/components/sections/growth-platform/GrowthLoopSection';
import GwSprintSection from '@/components/sections/growth-platform/GwSprintSection';
import GwCoachDetailSection from '@/components/sections/growth-platform/GwCoachDetailSection';
import ReportSystemSection from '@/components/sections/growth-platform/ReportSystemSection';
import FutureExpansionSection from '@/components/sections/growth-platform/FutureExpansionSection';
import ConsultationCTA from '@/components/sections/school-programs/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Growth Platform',
  description: '캠프에서 설계한 방향을 실행과 데이터로 이어가는 Growth Platform. Growth Loop, GW-Sprint, GW-Coach, 성장 리포트 시스템.',
};

export default function GrowthPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="성장 플랫폼"
        title="데이터로 이어가는 성장 구조"
        subtitle="캠프는 시작입니다. Growth Platform이 그 이후를 함께합니다."
      />
      <ProblemSection />
      <PlatformNecessitySection />
      <GrowthLoopSection />
      <GwSprintSection />
      <GwCoachDetailSection />
      <ReportSystemSection />
      <FutureExpansionSection />
      <ConsultationCTA />
    </>
  );
}
