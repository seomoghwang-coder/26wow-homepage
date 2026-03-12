# WOW 교육컨설팅 홈페이지

WOW교육컨설팅(16년 운영)의 리브랜딩 홈페이지.
캠프 중심 기관에서 **Growth Platform 기반 성장 인프라 기관**으로의 전환을 표현합니다.

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | Next.js 15.1.6 (App Router) |
| 언어 | TypeScript (strict mode) |
| 스타일 | Tailwind CSS v4 (`@theme inline` 토큰) |
| 폰트 | Noto Sans KR (Google Fonts) |
| 애니메이션 | CSS `@keyframes` + IntersectionObserver |
| PDF 생성 | html2canvas + jsPDF |
| 배포 | Vercel (예정) |

---

## 디렉토리 구조

```
wow-homepage/
├── wow-platform/               ← Next.js 프로젝트 루트
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                    메인 (/)
│   │   │   ├── school-programs/page.tsx    학교 프로그램
│   │   │   ├── growth-platform/page.tsx    Growth Platform
│   │   │   ├── gw-coach/page.tsx           GW-Coach
│   │   │   ├── contact/page.tsx            상담 문의
│   │   │   └── api/contact/route.ts        문의 API stub
│   │   │
│   │   ├── components/
│   │   │   ├── layout/         Header, Footer, Navigation, MobileMenu
│   │   │   ├── ui/             Button, Card, Badge, SectionWrapper 등 공통 UI
│   │   │   ├── sections/       페이지별 섹션 컴포넌트
│   │   │   ├── forms/          SchoolProposalForm, ConsultationForm
│   │   │   └── simulators/     BudgetSimulator, QuoteTemplate
│   │   │
│   │   ├── hooks/
│   │   │   ├── useInView.ts            스크롤 애니메이션 트리거
│   │   │   └── useBudgetCalculator.ts  예산 계산 상태 관리
│   │   │
│   │   └── lib/
│   │       ├── constants.ts    회사 정보, 네비게이션, 연락처
│   │       ├── types.ts        공유 TypeScript 인터페이스
│   │       ├── budget.ts       예산 계산 순수 함수 + 가격 데이터
│   │       └── generatePDF.ts  PDF 가견적서 생성
│   │
│   └── public/
│       └── 와우로고1.png
│
└── README.md
```

---

## 페이지 구성

### `/` 메인
- Hero (Navy 배경, 슬로건 + CTA)
- TrustBar (16년 / 1,200+ 학교 / 30,000+ 학생)
- 2축 소개 (캠프 축 | 플랫폼 축)
- 캠프 요약 / 플랫폼 요약 / GW-Coach 티저
- HomeCTA (Emerald 배경)

### `/school-programs` 학교 프로그램
- 캠프 라인업 (1일형 / 2일형)
- 예산 시뮬레이터 (1일형 전용, PDF 가견적서 생성)
- 2일형 시뮬레이터 (준비중)
- 상담 문의 CTA

### `/growth-platform` Growth Platform
- 현실적인 문제 3가지
- 플랫폼 필요성
- Growth Loop 5단계 SVG 다이어그램 (진단→실행→성찰→측정→코칭)
- GW-Sprint / GW-Coach 상세 / 리포트 시스템
- 향후 확장 (Phase 2 Coming Soon)

### `/gw-coach` GW-Coach
- 코칭 철학 / 챗버블 대화 예시 / 데이터 분석 방식
- 개입 구조 / 마무리 인용구

### `/contact` 상담 문의
- 학교 제안 요청 폼 / 일반 상담 폼

---

## 예산 시뮬레이터 가격 구조

| 항목 | 기본 운영비 | 1인당 추가 | 인원 범위 |
|---|---|---|---|
| 1일 캠프 | 800,000원 | 15,000원 | 20~300명 |
| Growth Sprint 2주 | 3,000,000원 | 35,000원 | 15~150명 |
| Growth Sprint 4주 | 5,500,000원 | 55,000원 | 15~100명 |

**옵션** : GW-Coach AI 모듈 +500,000원 / 성장 리포트 시스템 +300,000원
**할인** : 50명↑ 단체 할인 / 100명↑ 특별 할인 문의 유도

---

## 개발 환경 실행

```bash
cd wow-platform
npm install
npm run dev
# http://localhost:3000
```

## 프로덕션 빌드

```bash
cd wow-platform
npm run build
npm run start
```

---

## 디자인 토큰 (주요 컬러)

| 토큰 | 값 | 용도 |
|---|---|---|
| `brand-navy` | `#0f2044` | 주요 배경, Hero, 헤더 |
| `brand-emerald` | `#10b981` | CTA, 강조, 성장 표시 |
| `surface-secondary` | `#f8fafc` | 섹션 교대 배경 |
| `text-secondary` | `#475569` | 본문 보조 텍스트 |

---

## 회사 정보

- **상호**: WOW교육컨설팅
- **대표자**: 황서목
- **사업자등록번호**: 606-86-30266
- **주소**: 부산광역시 기장군 정관읍 정관중앙로 45, CGV 2층
- **전화**: 051-465-5567
- **이메일**: fr3dom@naver.com
