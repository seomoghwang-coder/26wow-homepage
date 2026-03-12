import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | 16년 교육의 신뢰`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['교육컨설팅', 'Growth Platform', '학교 프로그램', 'GW-Coach', '진로교육', '캠프'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 16년 교육의 신뢰`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
