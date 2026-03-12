import Link from 'next/link';
import Image from 'next/image';
import {
  NAV_ITEMS,
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  COMPANY_NAME,
  COMPANY_REPRESENTATIVE,
  COMPANY_ADDRESS,
  BUSINESS_NUMBER,
} from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-text-on-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/와우로고1.png"
                alt="WOW교육컨설팅 로고"
                width={120}
                height={48}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-text-on-dark-muted text-sm leading-relaxed">
              캠프로 방향을 세우고,<br />
              데이터 기반 코칭으로 성장을 이어갑니다.
            </p>
            <div className="space-y-1">
              <p className="text-text-on-dark-muted text-sm">
                <span className="text-brand-emerald-light font-medium">TEL</span>{' '}
                <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="text-text-on-dark-muted text-sm">
                <span className="text-brand-emerald-light font-medium">EMAIL</span>{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              서비스
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-on-dark-muted hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              시작하기
            </h3>
            <p className="text-text-on-dark-muted text-sm mb-5 leading-relaxed">
              우리 학교에 맞는<br />제안을 받아보세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-brand-emerald text-white text-sm font-semibold rounded-lg hover:bg-brand-emerald-dark transition-colors duration-200"
            >
              제안서 요청하기
            </Link>
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-12 pt-8 border-t border-brand-navy-muted space-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-on-dark-muted">
            <span className="font-semibold text-white">{COMPANY_NAME}</span>
            <span>대표자: {COMPANY_REPRESENTATIVE}</span>
            <span>사업자등록번호: {BUSINESS_NUMBER}</span>
          </div>
          <p className="text-xs text-text-on-dark-muted">{COMPANY_ADDRESS}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1">
            <p className="text-text-on-dark-muted text-xs">
              © {year} {COMPANY_NAME}. All rights reserved.
            </p>
            <p className="text-text-on-dark-muted text-xs">
              WOW Growth Platform — 성장 인프라 기관
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
