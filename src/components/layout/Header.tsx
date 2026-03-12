'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/90 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="WOW Growth Platform 홈"
          >
            {/* Logo mark */}
            <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm leading-none">W</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-brand-navy font-bold text-base leading-tight">WOW Growth</div>
              <div className="text-brand-emerald text-xs font-medium leading-tight">Platform</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
