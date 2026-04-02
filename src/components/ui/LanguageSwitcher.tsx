'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ locale, variant = 'light' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locale === 'en' ? 'es' : 'en';
  const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  const activeClass = variant === 'light'
    ? 'text-white font-semibold'
    : 'text-on-surface font-semibold';

  const inactiveClass = variant === 'light'
    ? 'text-white/50 hover:text-white/80'
    : 'text-on-surface-variant hover:text-on-surface';

  return (
    <div className="flex items-center gap-1.5 font-label text-[11px] tracking-[0.1em] uppercase">
      {locale === 'en' ? (
        <>
          <span className={activeClass}>English</span>
          <span className={variant === 'light' ? 'text-white/30' : 'text-on-surface-variant/50'}>|</span>
          <Link href={newPath} className={`${inactiveClass} transition-colors`}>Español</Link>
        </>
      ) : (
        <>
          <Link href={newPath} className={`${inactiveClass} transition-colors`}>English</Link>
          <span className={variant === 'light' ? 'text-white/30' : 'text-on-surface-variant/50'}>|</span>
          <span className={activeClass}>Español</span>
        </>
      )}
    </div>
  );
}
