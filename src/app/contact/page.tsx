'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/sections/shared/PageHero';
import SchoolProposalForm from '@/components/forms/SchoolProposalForm';
import ConsultationForm from '@/components/forms/ConsultationForm';

type Tab = 'proposal' | 'general';

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultTab: Tab = searchParams.get('type') === 'proposal' ? 'proposal' : 'general';
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);

  return (
    <>
      <PageHero
        eyebrow="상담 문의"
        title="함께 성장을 설계해보세요"
        subtitle="학교 맞춤 프로그램 제안부터 일반 상담까지, 편하게 문의해주세요."
      />

      <section className="bg-surface-secondary py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab toggle */}
          <div className="flex bg-white rounded-xl p-1 border border-border mb-10 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('proposal')}
              className={[
                'flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200',
                activeTab === 'proposal'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-text-secondary hover:text-brand-navy',
              ].join(' ')}
            >
              학교 제안서 요청
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={[
                'flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200',
                activeTab === 'general'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-text-secondary hover:text-brand-navy',
              ].join(' ')}
            >
              일반 상담 문의
            </button>
          </div>

          {/* Form container */}
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-border shadow-sm">
            {activeTab === 'proposal' ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">학교 제안서 요청</h2>
                  <p className="text-text-secondary text-sm">
                    학교 정보를 입력하시면 맞춤 프로그램 제안서를 보내드립니다.
                  </p>
                </div>
                <SchoolProposalForm />
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">일반 상담 문의</h2>
                  <p className="text-text-secondary text-sm">
                    WOW Growth Platform에 대해 궁금한 점을 자유롭게 문의해주세요.
                  </p>
                </div>
                <ConsultationForm />
              </>
            )}
          </div>

          {/* Additional info */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-border flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-emerald-pale flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm text-brand-navy">전화 상담</p>
                <p className="text-text-secondary text-sm mt-0.5">02-0000-0000</p>
                <p className="text-text-muted text-xs mt-0.5">평일 09:00 – 18:00</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-emerald-pale flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm text-brand-navy">이메일 상담</p>
                <p className="text-text-secondary text-sm mt-0.5">contact@wow-growth.kr</p>
                <p className="text-text-muted text-xs mt-0.5">1~2 영업일 내 회신</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-navy" />}>
      <ContactContent />
    </Suspense>
  );
}
