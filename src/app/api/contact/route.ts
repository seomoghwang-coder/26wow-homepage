import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form API stub.
 *
 * TODO — Phase 2 backend implementation:
 *   1. Input validation with Zod
 *   2. Rate limiting (e.g., Upstash Redis)
 *   3. Database write — Supabase / Neon / PlanetScale via Prisma
 *   4. Email notification — Resend / SendGrid / Nodemailer
 *   5. Admin dashboard data feed
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Stub: log incoming data (remove in production)
    console.log('[Contact Form Stub]', JSON.stringify(body, null, 2));

    // Simulate a short processing delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(
      {
        success: true,
        message: '문의가 접수되었습니다. 영업일 기준 1~2일 내에 연락드리겠습니다.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: '처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
