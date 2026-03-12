'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-surface-secondary transition-colors"
      >
        <span
          className={`block w-6 h-0.5 bg-brand-navy transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-navy transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-navy transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={[
          'fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden',
          'transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-bold text-brand-navy text-lg">WOW Growth</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const isContact = item.href === '/contact';

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      'flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      isContact
                        ? 'bg-brand-emerald text-white hover:bg-brand-emerald-dark mt-4'
                        : isActive
                        ? 'bg-brand-emerald-pale text-brand-emerald-dark'
                        : 'text-text-secondary hover:bg-surface-secondary hover:text-brand-navy',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {item.label}
                    {item.description && !isContact && (
                      <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
