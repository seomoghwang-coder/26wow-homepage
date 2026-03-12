'use client';

/**
 * generateQuotePDF
 *
 * html2canvas로 DOM 요소를 캡처한 뒤 jsPDF로 A4 PDF를 생성합니다.
 * Korean 폰트는 브라우저 렌더링(Noto Sans KR이 이미 로드됨)을 그대로 이미지로 캡처합니다.
 *
 * @param elementId - document.getElementById로 캡처할 요소의 id
 * @param filename  - 저장될 PDF 파일명 (확장자 포함)
 */
export async function generateQuotePDF(
  elementId: string,
  filename: string
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) throw new Error(`Element #${elementId} not found`);

  // Dynamic imports to avoid SSR issues
  const [html2canvasModule, jsPDFModule] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);
  const html2canvas = html2canvasModule.default;
  const jsPDF = jsPDFModule.default;

  const prevStyle = element.getAttribute('style') ?? '';

  // 캡처 전: 화면에 보이도록 이동 (z-index 최상위, 스크롤 방지)
  const prevBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  element.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    width: 794px;
    z-index: 99999;
    background: #ffffff;
    visibility: visible;
    opacity: 1;
  `;

  try {
    const canvas = await html2canvas(element, {
      scale: 3,               // 고해상도 — 텍스트 선명도 향상
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      windowWidth: 794,
    });

    const imgData = canvas.toDataURL('image/png', 1.0);

    // A4 기준, 좌우 여백 5mm 확보하여 가장자리 잘림 방지
    const PDF_WIDTH_MM = 210;
    const MARGIN_MM = 5;
    const imgWidthMM = PDF_WIDTH_MM - MARGIN_MM * 2;
    const canvasAspect = canvas.height / canvas.width;
    const imgHeightMM = imgWidthMM * canvasAspect;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [PDF_WIDTH_MM, Math.max(imgHeightMM + MARGIN_MM * 2, 297)],
    });

    pdf.addImage(imgData, 'PNG', MARGIN_MM, MARGIN_MM, imgWidthMM, imgHeightMM);
    pdf.save(filename);
  } finally {
    element.setAttribute('style', prevStyle);
    document.body.style.overflow = prevBodyOverflow;
  }
}
