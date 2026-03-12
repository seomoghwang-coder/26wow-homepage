'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="메인 내비게이션">
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const isContact = item.href === '/contact';

          if (isContact) {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="ml-4 px-5 py-2 rounded-lg bg-brand-emerald text-white text-sm font-semibold hover:bg-brand-emerald-dark transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-brand-emerald bg-brand-emerald-pale'
                    : 'text-text-secondary hover:text-brand-navy hover:bg-surface-secondary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
