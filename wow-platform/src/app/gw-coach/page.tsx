import type { Metadata } from 'next';
import PageHero from '@/components/sections/shared/PageHero';
import CoachPhilosophySection from '@/components/sections/gw-coach/CoachPhilosophySection';
import CoachToneSection from '@/components/sections/gw-coach/CoachToneSection';
import DataAnalysisSection from '@/components/sections/gw-coach/DataAnalysisSection';
import CoachInterventionSection from '@/components/sections/gw-coach/CoachInterventionSection';
import CoachGreetingSection from '@/components/sections/gw-coach/CoachGreetingSection';

export const metadata: Metadata = {
  title: 'GW-Coach',
  description: 'GW-Coach (Growth Coach by WOW) — 학생의 실행 데이터를 분석하고 성장의 방향을 함께 점검하는 데이터 기반 AI 코치.',
};

export default function GwCoachPage() {
  return (
    <>
      <PageHero
        eyebrow="GW-Coach"
        title="데이터 기반 AI 성장 코치"
        quote="오늘의 성장을 함께 점검해보겠습니다."
      />
      <CoachPhilosophySection />
      <CoachToneSection />
      <DataAnalysisSection />
      <CoachInterventionSection />
      <CoachGreetingSection />
    </>
  );
}
