/**
 * QuoteTemplate
 *
 * PDF 캡처용 숨겨진 A4 가견적서 템플릿.
 * html2canvas가 이 DOM 요소를 캡처해 PDF로 변환합니다.
 * 반드시 id="quote-template"을 유지해야 합니다.
 *
 * 디자인 가이드: 공공기관 스타일 (표 중심, 딥블루 강조, 화이트 배경)
 */

import type { SimulatorInputs, SimulatorResult } from '@/lib/budget';
import { formatKRW, todayFormatted } from '@/lib/budget';

interface QuoteTemplateProps {
  inputs: SimulatorInputs;
  result: SimulatorResult;
}

const DEEP_BLUE = '#0f2044';
const DARK_GRAY = '#333333';
const MID_GRAY = '#555555';
const LIGHT_GRAY_BG = '#f5f5f5';
const BORDER_COLOR = '#cccccc';

const cell: React.CSSProperties = {
  border: `1px solid ${BORDER_COLOR}`,
  padding: '7px 12px',
  fontSize: '11px',
  color: DARK_GRAY,
  verticalAlign: 'middle',
};

const labelCell: React.CSSProperties = {
  ...cell,
  backgroundColor: LIGHT_GRAY_BG,
  fontWeight: '600',
  width: '38%',
  color: DEEP_BLUE,
};

const valueCell: React.CSSProperties = {
  ...cell,
  width: '62%',
};

const amountCell: React.CSSProperties = {
  ...cell,
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
};

const amountLabelCell: React.CSSProperties = {
  ...cell,
  backgroundColor: LIGHT_GRAY_BG,
  fontWeight: '600',
  color: DEEP_BLUE,
  width: '55%',
};

const PROGRAM_LABEL: Record<string, string> = {
  '학습전략캠프': '학습전략캠프',
  '모의창업캠프': '모의창업캠프',
  '자기주도학습캠프': '자기주도학습캠프',
  '고교학점제캠프': '고교학점제',
  '직업인체험': '직업인 체험',
  '기타': '기타',
};

export default function QuoteTemplate({ inputs, result }: QuoteTemplateProps) {
  const {
    campType,
    programName,
    duration,
    grade,
    classCount,
    studentsPerClass,
    schoolName,
    teacherName,
    includeWorkbook,
    customProgramName,
  } = inputs;

  // '기타' 선택 시 직접 입력한 이름 사용
  const displayProgramName = programName === '기타' && customProgramName
    ? customProgramName
    : (PROGRAM_LABEL[programName] ?? programName);

  const today = todayFormatted();

  const costRows: { label: string; amount: number; show: boolean }[] = [
    {
      label: '강사비',
      amount: result.instructorFee,
      show: !result.isVocational,
    },
    {
      label: '보조강사비',
      amount: result.assistantFee,
      show: !result.isVocational && result.hasAssistant,
    },
    {
      label: '워크북 비용',
      amount: result.workbookCost,
      show: true,
    },
    {
      label: '재료비',
      amount: result.materialCost,
      show: true,
    },
    {
      label: '직업인 체험 기본 비용',
      amount: result.vocationalBaseFee,
      show: result.isVocational,
    },
  ].filter((r) => r.show);

  return (
    <div
      id="quote-template"
      style={{
        position: 'fixed',
        left: '-10000px',
        top: 0,
        width: '794px',
        minHeight: '1123px',
        backgroundColor: '#ffffff',
        fontFamily: '"Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
        color: DARK_GRAY,
        padding: '44px 52px',
        boxSizing: 'border-box',
        lineHeight: 1.6,
      }}
    >
      {/* ── 1. 헤더 ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px', borderBottom: `2px solid ${DEEP_BLUE}`, paddingBottom: '16px' }}>
        {/* 로고 영역 */}
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: DEEP_BLUE, letterSpacing: '-0.3px' }}>
            WOW Growth Platform
          </div>
          <div style={{ fontSize: '11px', color: MID_GRAY, marginTop: '2px' }}>
            by WOW교육컨설팅
          </div>
        </div>
        {/* 제목 + 날짜 */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '20px', fontWeight: '700', color: DEEP_BLUE }}>
            캠프 운영 가견적서
          </div>
          <div style={{ fontSize: '11px', color: MID_GRAY, marginTop: '4px' }}>
            작성일: {today}
          </div>
        </div>
      </div>

      {/* ── 2. 수신 학교 정보 ── */}
      {(schoolName || teacherName) && (
        <div style={{ marginBottom: '20px', padding: '10px 14px', backgroundColor: LIGHT_GRAY_BG, borderLeft: `4px solid ${DEEP_BLUE}`, borderRadius: '2px' }}>
          {schoolName && (
            <div style={{ fontSize: '13px', fontWeight: '700', color: DEEP_BLUE }}>
              수신: {schoolName}
            </div>
          )}
          {teacherName && (
            <div style={{ fontSize: '11px', color: MID_GRAY, marginTop: '2px' }}>
              담당 교사: {teacherName}
            </div>
          )}
        </div>
      )}

      {/* ── 3. 기본 운영 정보 ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: DEEP_BLUE, marginBottom: '6px', letterSpacing: '0.5px' }}>
          ■ 기본 운영 정보
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <tbody>
            <tr>
              <td style={labelCell}>캠프 유형</td>
              <td style={valueCell}>{campType === 'general' ? '일반 캠프' : '직업인 체험'}</td>
              <td style={labelCell}>프로그램명</td>
              <td style={valueCell}>{displayProgramName}</td>
            </tr>
            <tr>
              <td style={labelCell}>운영 시간</td>
              <td style={valueCell}>{result.isVocational ? '2시간 (고정)' : `${duration}시간`}</td>
              <td style={labelCell}>학년</td>
              <td style={valueCell}>{grade || '미기재'}</td>
            </tr>
            <tr>
              <td style={labelCell}>학급 수</td>
              <td style={valueCell}>{classCount}학급</td>
              <td style={labelCell}>학급당 학생 수</td>
              <td style={valueCell}>{studentsPerClass}명</td>
            </tr>
            <tr>
              <td style={labelCell}>총 학생 수</td>
              <td style={valueCell}><strong>{result.totalStudents}명</strong></td>
              <td style={labelCell}>워크북</td>
              <td style={valueCell}>{includeWorkbook ? '선택' : '미선택'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── 4. 비용 상세 내역 ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: DEEP_BLUE, marginBottom: '6px', letterSpacing: '0.5px' }}>
          ■ 비용 상세 내역
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr>
              <th style={{ ...cell, backgroundColor: DEEP_BLUE, color: '#ffffff', textAlign: 'left', fontWeight: '600', width: '55%' }}>
                항목
              </th>
              <th style={{ ...cell, backgroundColor: DEEP_BLUE, color: '#ffffff', textAlign: 'right', fontWeight: '600', width: '45%' }}>
                금액
              </th>
            </tr>
          </thead>
          <tbody>
            {costRows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : LIGHT_GRAY_BG }}>
                <td style={{ ...cell, backgroundColor: 'inherit' }}>{row.label}</td>
                <td style={{ ...amountCell, backgroundColor: 'inherit' }}>{formatKRW(row.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── 5. 총 예상 금액 ── */}
      <div style={{ marginBottom: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <tbody>
            <tr style={{ backgroundColor: '#eef2f8' }}>
              <td style={{ ...amountLabelCell, fontSize: '13px', fontWeight: '700', padding: '10px 12px' }}>
                총 예상 금액
              </td>
              <td style={{ ...amountCell, backgroundColor: '#eef2f8', fontSize: '17px', fontWeight: '800', color: DEEP_BLUE, padding: '10px 12px', width: '45%' }}>
                {formatKRW(result.totalAmount)}
              </td>
            </tr>
            <tr style={{ backgroundColor: LIGHT_GRAY_BG }}>
              <td style={{ ...amountLabelCell, fontSize: '11px' }}>
                1인당 예상 금액
              </td>
              <td style={{ ...amountCell, backgroundColor: LIGHT_GRAY_BG, fontSize: '13px', fontWeight: '700', color: DEEP_BLUE, width: '45%' }}>
                {formatKRW(result.perStudentAmount)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── 6. WOW 소개 ── */}
      <div style={{ marginBottom: '16px', padding: '14px 16px', backgroundColor: LIGHT_GRAY_BG, borderRadius: '4px' }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: DEEP_BLUE, marginBottom: '6px' }}>
          WOW교육컨설팅 소개
        </div>
        <div style={{ fontSize: '10.5px', color: MID_GRAY, lineHeight: 1.7 }}>
          WOW교육컨설팅은 16년간 축적된 교육 경험을 기반으로 학생의 강점과 가능성을 발견하고,
          성장의 방향을 설계하는 캠프를 운영하고 있습니다.<br />
          캠프 이후에는 Growth Platform을 통해 실행과 데이터를 연결하는 지속 성장 관리 시스템을 제공합니다.
        </div>
      </div>

      {/* ── 7. Growth Platform 연계 안내 ── */}
      <div style={{ marginBottom: '20px', padding: '12px 16px', border: `1px solid #c3d4ea`, borderLeft: `3px solid ${DEEP_BLUE}`, borderRadius: '2px', backgroundColor: '#f7f9fc' }}>
        <div style={{ fontSize: '10.5px', color: DARK_GRAY, lineHeight: 1.7 }}>
          <strong style={{ color: DEEP_BLUE }}>Growth Platform 연계 안내</strong><br />
          본 캠프는 Growth Sprint(2주 실행 관리)와 연계하여 학생의 실행 지속성과 성장 데이터를 관리할 수 있습니다.
          자세한 운영 방식은 상담을 통해 안내드립니다.
        </div>
      </div>

      {/* ── 8. 상담 연락처 ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: DEEP_BLUE, marginBottom: '6px', letterSpacing: '0.5px' }}>
          ■ 상담 문의
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <tbody>
            <tr>
              <td style={{ ...labelCell, width: '28%' }}>기관명</td>
              <td style={{ ...valueCell, width: '72%', whiteSpace: 'nowrap' }}>WOW교육컨설팅</td>
            </tr>
            <tr>
              <td style={{ ...labelCell, width: '28%' }}>전화</td>
              <td style={{ ...valueCell, width: '72%', whiteSpace: 'nowrap' }}>051-465-5567</td>
            </tr>
            <tr>
              <td style={{ ...labelCell, width: '28%' }}>이메일</td>
              <td style={{ ...valueCell, width: '72%', whiteSpace: 'nowrap' }}>fr3dom@naver.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── 9. 하단 고정 문구 ── */}
      <div style={{
        marginTop: 'auto',
        padding: '14px 20px',
        backgroundColor: LIGHT_GRAY_BG,
        border: `1px solid ${BORDER_COLOR}`,
        borderRadius: '4px',
        fontSize: '12px',
        color: DARK_GRAY,
        textAlign: 'center',
        lineHeight: 1.8,
        fontWeight: '500',
      }}>
        이 견적은 가견적이며, 상담을 통해 조정·확정됩니다.<br />
        본 금액은 예상 금액이며, 학교 상황 및 세부 운영 조건에 따라 조정될 수 있습니다. · 비과세
      </div>
    </div>
  );
}
