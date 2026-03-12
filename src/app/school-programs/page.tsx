import type { Metadata } from 'next';
import PageHero from '@/components/sections/shared/PageHero';
import CampLineupSection from '@/components/sections/school-programs/CampLineupSection';
import BudgetSimulator from '@/components/simulators/BudgetSimulator';
import ConsultationCTA from '@/components/sections/school-programs/ConsultationCTA';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: '학교 프로그램',
  description: '학교 맞춤 캠프 라인업과 예산 시뮬레이터. 예상 비용을 미리 확인하고 맞춤 제안을 받아보세요.',
};

export default function SchoolProgramsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="학교 프로그램"
        title="학생의 성장을 설계합니다"
        subtitle="캠프 유형을 확인하고, 버튼 하나로 예상 비용을 바로 산출해보세요."
      />

      {/* ① 캠프 라인업 — 버튼 클릭 시 아래 시뮬레이터로 스크롤 */}
      <CampLineupSection />

      {/* ② 예산 시뮬레이터 */}
      <SectionWrapper bg="gray" id="simulator">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-emerald mb-3">
            예산 시뮬레이터
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            예상 비용을 미리 확인해보세요
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            프로그램 유형과 인원을 선택하면 예상 비용과 PDF 가견적서를 즉시 생성합니다.
          </p>
        </div>
        <BudgetSimulator />
      </SectionWrapper>

      {/* ③ 2일형 예산 시뮬레이터 (준비중) */}
      <SectionWrapper bg="white" id="simulator-2day">
        <div className="text-center py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-emerald mb-3">
            2일형 예산 시뮬레이터
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            준비 중입니다
          </h2>
          <p className="mt-2 text-lg text-text-secondary max-w-xl mx-auto">
            2일형 심화 프로젝트 캠프 전용 예산 시뮬레이터를 준비 중입니다.
            <br />
            지금 바로 문의하시면 맞춤 견적을 안내해드립니다.
          </p>
        </div>
      </SectionWrapper>

      {/* ④ 프로그램 문의 */}
      <ConsultationCTA />
    </>
  );
}
