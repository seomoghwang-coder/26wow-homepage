// ── Types ─────────────────────────────────────────────

export type CampType = 'general' | 'vocational';

export type ProgramName =
  | '학습전략캠프'
  | '모의창업캠프'
  | '자기주도학습캠프'
  | '고교학점제캠프'
  | '직업인체험'
  | '기타';

export type Duration = 2 | 4 | 5 | 6;

// ── Pricing Constants ─────────────────────────────────

/** 강사비 기본 (1학급 기준) */
export const INSTRUCTOR_BASE_FEE = 120_000;

/** 강사비 시간당 추가분 */
export const INSTRUCTOR_PER_HOUR_FEE = 60_000;

/** 보조강사비 시간당 */
export const ASSISTANT_PER_HOUR_FEE = 40_000;

/** 보조강사 투입 기준 (학급당 학생 수) */
export const ASSISTANT_THRESHOLD = 28;

/** 재료비 1인당 (항상 자동 포함) */
export const MATERIAL_COST_PER_STUDENT = 2_000;

/** 직업인 체험 기본 비용 (2시간 고정) */
export const VOCATIONAL_BASE_FEE = 300_000;


/** 워크북 선택 시 프로그램별 단가 */
export const WORKBOOK_PRICES: Record<ProgramName, number> = {
  '고교학점제캠프': 10_000,
  '모의창업캠프':   8_000,
  '학습전략캠프':   8_000,
  '자기주도학습캠프': 8_000,
  '직업인체험':     5_000,
  '기타':          8_000,
};

/** 운영 가능 시간 옵션 */
export const DURATION_OPTIONS: Duration[] = [2, 4, 5, 6];

/** 일반 캠프 프로그램 목록 */
export const GENERAL_PROGRAMS: ProgramName[] = [
  '학습전략캠프',
  '모의창업캠프',
  '자기주도학습캠프',
  '고교학점제캠프',
  '기타',
];

// ── Input / Output Types ──────────────────────────────

export interface SimulatorInputs {
  campType: CampType;
  programName: ProgramName;
  duration: Duration;
  grade: string;
  classCount: number;
  studentsPerClass: number;
  includeWorkbook: boolean;
  /** PDF 상단에 표시될 학교명 (파일명에도 사용) */
  schoolName: string;
  /** 선택 항목 - PDF에 표시 */
  teacherName: string;
  /** 기타 선택 시 직접 입력하는 프로그램명 */
  customProgramName: string;
}

export interface SimulatorResult {
  totalStudents: number;
  instructorFee: number;
  assistantFee: number;
  workbookCost: number;
  materialCost: number;
  vocationalBaseFee: number;
  totalAmount: number;
  perStudentAmount: number;
  hasAssistant: boolean;
  isVocational: boolean;
}

// ── Calculation ───────────────────────────────────────

export function calculateSimulator(inputs: SimulatorInputs): SimulatorResult {
  const {
    campType,
    programName,
    duration,
    classCount,
    studentsPerClass,
    includeWorkbook,
  } = inputs;

  const safeClasses = Math.max(1, classCount);
  const safeStudentsPerClass = Math.max(1, studentsPerClass);
  const totalStudents = safeClasses * safeStudentsPerClass;
  const isVocational = campType === 'vocational';

  // 재료비 (항상)
  const materialCost = MATERIAL_COST_PER_STUDENT * totalStudents;

  // 워크북 비용 (미선택 시 0원, 재료비는 항상 별도 포함)
  const workbookCost = includeWorkbook
    ? WORKBOOK_PRICES[programName] * totalStudents
    : 0;

  // ── 직업인 체험 ──
  if (isVocational) {
    const totalAmount = VOCATIONAL_BASE_FEE + workbookCost + materialCost;
    return {
      totalStudents,
      instructorFee: 0,
      assistantFee: 0,
      workbookCost,
      materialCost,
      vocationalBaseFee: VOCATIONAL_BASE_FEE,
      totalAmount,
      perStudentAmount: Math.round(totalAmount / totalStudents),
      hasAssistant: false,
      isVocational: true,
    };
  }

  // ── 일반 캠프 ──
  // 강사비(1학급) = 120,000 + (시간 - 1) × 60,000
  const instructorFeePerClass =
    INSTRUCTOR_BASE_FEE + (duration - 1) * INSTRUCTOR_PER_HOUR_FEE;
  const instructorFee = instructorFeePerClass * safeClasses;

  // 보조강사비 (학급당 학생 수 ≥ 28일 때)
  const hasAssistant = safeStudentsPerClass >= ASSISTANT_THRESHOLD;
  const assistantFeePerClass = hasAssistant ? duration * ASSISTANT_PER_HOUR_FEE : 0;
  const assistantFee = assistantFeePerClass * safeClasses;

  const totalAmount = instructorFee + assistantFee + workbookCost + materialCost;

  return {
    totalStudents,
    instructorFee,
    assistantFee,
    workbookCost,
    materialCost,
    vocationalBaseFee: 0,
    totalAmount,
    perStudentAmount: Math.round(totalAmount / totalStudents),
    hasAssistant,
    isVocational: false,
  };
}

// ── Formatting ────────────────────────────────────────

export function formatKRW(amount: number): string {
  return `${amount.toLocaleString('ko-KR')}원`;
}

export function formatKRWCompact(amount: number): string {
  if (amount >= 10_000_000) {
    const v = amount / 10_000_000;
    return `${v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}천만원`;
  }
  if (amount >= 1_000_000) {
    const v = amount / 1_000_000;
    return `${v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}백만원`;
  }
  return formatKRW(amount);
}

/** PDF 파일명 생성 */
export function generatePDFFilename(schoolName: string): string {
  const today = new Date();
  const ymd = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('');
  const name = schoolName.trim() || '학교명미입력';
  return `WOW_캠프가견적_${name}_${ymd}.pdf`;
}

/** 오늘 날짜 YYYY.MM.DD 형식 */
export function todayFormatted(): string {
  const d = new Date();
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

// ── Legacy aliases (홈 페이지의 기존 코드와 호환) ──────
// school-programs 이외 페이지의 Growth Platform 설명용 상수는 constants.ts에 유지
export { formatKRW as formatKRWFull };
