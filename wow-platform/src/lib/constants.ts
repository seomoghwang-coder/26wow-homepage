import type { NavItem, StatItem, Testimonial } from './types';

// ── Site Info ─────────────────────────────────────────

export const SITE_NAME = 'WOW Growth Platform';
export const SITE_TAGLINE = '16년 교육의 신뢰, 이제 성장 플랫폼으로 진화합니다.';
export const SITE_DESCRIPTION =
  'WOW교육컨설팅의 Growth Platform — 캠프로 방향을 세우고, 데이터 기반 코칭으로 성장을 이어갑니다.';
export const CONTACT_EMAIL = 'fr3dom@naver.com';
export const CONTACT_PHONE = '051-465-5567';
export const COMPANY_NAME = 'WOW교육컨설팅';
export const COMPANY_REPRESENTATIVE = '황서목';
export const COMPANY_ADDRESS = '부산광역시 기장군 정관읍 정관중앙로 45, CGV 2층';
export const BUSINESS_NUMBER = '606-86-30266';

// ── Navigation ────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: '학교 프로그램', href: '/school-programs', description: '캠프 라인업 및 Growth Sprint' },
  { label: 'Growth Platform', href: '/growth-platform', description: '성장 관리 시스템 소개' },
  { label: 'GW-Coach', href: '/gw-coach', description: 'AI 기반 데이터 코칭' },
  { label: '상담 문의', href: '/contact', description: '제안서 요청 및 상담' },
];

// ── Trust Stats (Hero TrustBar) ───────────────────────

export const TRUST_STATS: StatItem[] = [
  { value: '16', suffix: '년', label: '교육 운영 경력' },
  { value: '1,200', suffix: '+', label: '협력 학교' },
  { value: '30,000', suffix: '+', label: '수혜 학생' },
];

// ── Testimonials ──────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    schoolType: '서울 중학교',
    schoolSize: '학생 320명',
    result: '진로 목표 설정률 87% 달성',
    quote:
      '캠프 후 학생들이 스스로 목표를 세우고 실행하는 모습이 눈에 띄게 달라졌습니다. Growth Sprint 2주 과정이 특히 효과적이었어요.',
    programUsed: '2일 캠프 + Growth Sprint 2주',
  },
  {
    id: '2',
    schoolType: '경기 고등학교',
    schoolSize: '학생 180명',
    result: '참여 학생 만족도 4.8/5.0',
    quote:
      'GW-Coach의 데이터 기반 피드백이 학생 개개인 맞춤으로 제공되어 교사의 상담 부담도 줄고 효과는 높았습니다.',
    programUsed: 'Growth Sprint 4주 + GW-Coach',
  },
  {
    id: '3',
    schoolType: '인천 중학교',
    schoolSize: '학생 240명',
    result: '프로그램 재계약률 100%',
    quote:
      '단순 이벤트성 캠프가 아니라 지속 가능한 성장 구조를 만들어주는 것이 WOW Growth Platform의 차별점입니다.',
    programUsed: '1일 캠프 × 3회 + Sprint 2주',
  },
];

// ── Growth Loop Nodes ─────────────────────────────────

export const GROWTH_LOOP_NODES = [
  { id: 'diagnose', label: '진단', description: '현재 위치 파악', color: 'navy' as const, position: 'top' as const },
  { id: 'execute', label: '실행', description: '목표 행동 실행', color: 'emerald' as const, position: 'right' as const },
  { id: 'measure', label: '측정', description: '데이터 수집·분석', color: 'navy' as const, position: 'bottom' as const },
  { id: 'coach', label: '코칭', description: '방향 재설정', color: 'emerald' as const, position: 'left' as const },
];
