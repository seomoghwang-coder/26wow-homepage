// ── Navigation ────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

// ── Program / Camp ────────────────────────────────────

export type ProgramFormat = '1day' | '2day' | 'sprint-2w' | 'sprint-4w';

export interface ProgramCard {
  id: ProgramFormat;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  features: string[];
  badge?: string;
}

// ── Testimonial ───────────────────────────────────────

export interface Testimonial {
  id: string;
  schoolType: string;    // e.g. "서울 중학교"
  schoolSize: string;    // e.g. "학생 280명"
  result: string;        // key result metric
  quote: string;
  programUsed: string;
}

// ── Contact Forms ─────────────────────────────────────

export interface SchoolProposalFormData {
  schoolName: string;
  region: string;
  studentCount: string;
  programInterest: string[];
  contactName: string;
  phone: string;
  email: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
}

// ── Budget Simulator types → now in src/lib/budget.ts ──
// (SimulatorInputs, SimulatorResult, CampType, ProgramName, Duration)

// ── Growth Platform ───────────────────────────────────

export interface GrowthLoopNode {
  id: string;
  label: string;
  description: string;
  color: 'navy' | 'emerald';
  position: 'top' | 'right' | 'bottom' | 'left';
}

// ── Stats ─────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}
