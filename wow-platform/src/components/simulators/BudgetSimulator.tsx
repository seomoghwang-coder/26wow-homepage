'use client';

import { useState } from 'react';
import { useBudgetCalculator } from '@/hooks/useBudgetCalculator';
import {
  DURATION_OPTIONS,
  GENERAL_PROGRAMS,
  formatKRW,
  generatePDFFilename,
  type Duration,
  type ProgramName,
} from '@/lib/budget';
import QuoteTemplate from './QuoteTemplate';
import Button from '@/components/ui/Button';

// ── 공통 UI 서브컴포넌트 ──────────────────────────────

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-150',
        active
          ? 'bg-brand-navy text-white shadow-sm'
          : 'bg-white border border-border text-text-secondary hover:border-brand-navy',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

function StepLabel({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
        {n}
      </span>
      <span className="text-sm font-bold text-text-primary uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function NumberInput({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold text-text-secondary">{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Math.max(min ?? 1, Number(e.target.value)))}
        className="w-full px-3 py-2.5 rounded-lg border border-border text-sm font-semibold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-emerald"
      />
    </div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────

export default function BudgetSimulator() {
  const { inputs, result, updateInput } = useBudgetCalculator();
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState('');

  const handleDownloadPDF = async () => {
    setPdfLoading(true);
    setPdfError('');
    try {
      const { generateQuotePDF } = await import('@/lib/generatePDF');
      await generateQuotePDF('quote-template', generatePDFFilename(inputs.schoolName));
    } catch (e) {
      console.error(e);
      setPdfError('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setPdfLoading(false);
    }
  };

  const isPDFReady = inputs.classCount > 0 && inputs.studentsPerClass > 0;

  return (
    <>
      {/* PDF 캡처용 숨겨진 템플릿 */}
      <QuoteTemplate inputs={inputs} result={result} />

      {/* 시뮬레이터 UI */}
      <div className="bg-white rounded-2xl border-2 border-brand-navy shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-brand-navy px-6 md:px-8 py-5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-emerald flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">예산 시뮬레이터</h3>
            <p className="text-text-on-dark-muted text-sm">
              조건을 입력하면 예상 비용과 PDF 가견적서를 즉시 생성합니다.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px]">

          {/* ── 입력 패널 ── */}
          <div className="p-6 md:p-8 space-y-7 border-b lg:border-b-0 lg:border-r border-border">

            {/* Step 1: 캠프 구분 */}
            <div>
              <StepLabel n={1} label="캠프 구분" />
              <div className="flex gap-2">
                <ToggleBtn
                  active={inputs.campType === 'general'}
                  onClick={() => updateInput('campType', 'general')}
                >
                  일반 캠프
                </ToggleBtn>
                <ToggleBtn
                  active={inputs.campType === 'vocational'}
                  onClick={() => updateInput('campType', 'vocational')}
                >
                  직업인 체험
                </ToggleBtn>
              </div>
            </div>

            {/* Step 2: 프로그램 선택 */}
            <div>
              <StepLabel n={2} label="프로그램 선택" />
              {inputs.campType === 'general' ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {GENERAL_PROGRAMS.map((prog) => (
                      <button
                        key={prog}
                        type="button"
                        onClick={() => updateInput('programName', prog as ProgramName)}
                        className={[
                          'text-left px-3 py-2.5 rounded-lg border-2 text-sm transition-all duration-150',
                          inputs.programName === prog
                            ? 'border-brand-emerald bg-brand-emerald-pale text-brand-emerald-dark font-semibold'
                            : 'border-border hover:border-brand-navy text-text-secondary',
                        ].join(' ')}
                      >
                        {prog === '고교학점제캠프' ? '고교학점제' : prog}
                      </button>
                    ))}
                  </div>
                  {inputs.programName === '기타' && (
                    <input
                      type="text"
                      placeholder="프로그램명을 직접 입력하세요"
                      value={inputs.customProgramName}
                      onChange={(e) => updateInput('customProgramName', e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-emerald text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                    />
                  )}
                </div>
              ) : (
                <div className="px-4 py-3 rounded-lg bg-surface-secondary border border-border text-sm font-semibold text-brand-navy">
                  직업인 체험 (고정)
                </div>
              )}
            </div>

            {/* Step 3: 운영 시간 */}
            <div>
              <StepLabel n={3} label="운영 시간" />
              {inputs.campType === 'vocational' ? (
                <div className="px-4 py-3 rounded-lg bg-surface-secondary border border-border text-sm font-semibold text-brand-navy">
                  2시간 (직업인 체험 고정)
                </div>
              ) : (
                <div className="flex gap-2">
                  {DURATION_OPTIONS.map((h) => (
                    <ToggleBtn
                      key={h}
                      active={inputs.duration === h}
                      onClick={() => updateInput('duration', h as Duration)}
                    >
                      {h}시간
                    </ToggleBtn>
                  ))}
                </div>
              )}
            </div>

            {/* Step 4: 학급 정보 */}
            <div>
              <StepLabel n={4} label="학급 정보" />
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-text-secondary">학년</label>
                  <input
                    type="text"
                    placeholder="예: 2학년"
                    value={inputs.grade}
                    onChange={(e) => updateInput('grade', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>
                <NumberInput
                  label="학급 수"
                  value={inputs.classCount}
                  min={1}
                  max={50}
                  onChange={(v) => updateInput('classCount', v)}
                />
                <NumberInput
                  label="학급당 학생 수"
                  value={inputs.studentsPerClass}
                  min={1}
                  max={50}
                  onChange={(v) => updateInput('studentsPerClass', v)}
                />
              </div>
              {result.hasAssistant && (
                <p className="mt-2 text-xs text-brand-emerald-dark bg-brand-emerald-pale rounded-lg px-3 py-1.5">
                  학급당 28명 이상 — 보조강사 자동 투입 적용됩니다.
                </p>
              )}
            </div>

            {/* Step 5: 워크북 */}
            <div>
              <StepLabel n={5} label="워크북" />
              <div className="flex gap-2">
                <ToggleBtn
                  active={inputs.includeWorkbook}
                  onClick={() => updateInput('includeWorkbook', true)}
                >
                  워크북 선택
                </ToggleBtn>
                <ToggleBtn
                  active={!inputs.includeWorkbook}
                  onClick={() => updateInput('includeWorkbook', false)}
                >
                  미선택
                </ToggleBtn>
              </div>
            </div>

            {/* PDF 정보 입력 */}
            <div className="pt-5 border-t border-border">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                PDF 가견적서 정보 (선택)
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-text-secondary">
                    학교명
                    <span className="font-normal text-text-muted ml-1">(파일명에 자동 반영)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="예: ○○중학교"
                    value={inputs.schoolName}
                    onChange={(e) => updateInput('schoolName', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-text-secondary">
                    담당 교사명
                    <span className="font-normal text-text-muted ml-1">(선택)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="예: 홍길동"
                    value={inputs.teacherName}
                    onChange={(e) => updateInput('teacherName', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── 결과 패널 ── */}
          <div className="p-6 md:p-8 bg-surface-secondary flex flex-col">
            <p className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5">
              예상 비용
            </p>

            {/* 항목별 내역 */}
            <div className="space-y-2.5 flex-1 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">총 학생 수</span>
                <span className="font-bold text-brand-navy">{result.totalStudents}명</span>
              </div>

              {!result.isVocational && (
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">총 강사비</span>
                  <span className="font-medium">{formatKRW(result.instructorFee)}</span>
                </div>
              )}

              {result.hasAssistant && (
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">총 보조강사비</span>
                  <span className="font-medium">{formatKRW(result.assistantFee)}</span>
                </div>
              )}

              {result.isVocational && (
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">직업인 체험 기본</span>
                  <span className="font-medium">{formatKRW(result.vocationalBaseFee)}</span>
                </div>
              )}

              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">워크북 비용</span>
                <span className="font-medium">{formatKRW(result.workbookCost)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">재료비</span>
                <span className="font-medium">{formatKRW(result.materialCost)}</span>
              </div>
            </div>

            {/* 합계 */}
            <div className="border-t border-border pt-5 mb-5">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-text-secondary">총 예상 금액</span>
                <span className="text-2xl font-black text-brand-navy">
                  {formatKRW(result.totalAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted">1인당 예상 금액</span>
                <span className="text-sm font-bold text-brand-emerald-dark">
                  {formatKRW(result.perStudentAmount)}
                </span>
              </div>
            </div>

            {/* 고지 문구 */}
            <p className="text-xs text-text-muted mb-5 leading-relaxed">
              ※ 본 금액은 예상 금액이며, 학교 상황 및 세부 운영 조건에 따라 조정될 수 있습니다.
            </p>

            {/* PDF 다운로드 버튼 */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={!isPDFReady || pdfLoading}
              className={[
                'w-full py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 mb-3',
                isPDFReady && !pdfLoading
                  ? 'bg-brand-navy text-white hover:bg-brand-navy-light active:scale-[0.98]'
                  : 'bg-surface-tertiary text-text-muted cursor-not-allowed',
              ].join(' ')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {pdfLoading ? 'PDF 생성 중...' : '견적서 PDF 다운로드'}
            </button>

            {pdfError && (
              <p className="mb-3 text-xs text-red-500 text-center">{pdfError}</p>
            )}

            <Button href="/contact?type=proposal" variant="primary" size="md" fullWidth>
              정확한 견적 상담하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
