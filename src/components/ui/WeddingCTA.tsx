'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface WeddingCTAProps {
  locale: Locale;
}

/**
 * "Planning a Wedding?" sticky popup — fixed bottom-left.
 * Appears after scrolling past the hero. Dismissable per session.
 * Inspired by Casa Delphine's "Traveling in a group?" element.
 */
export const WeddingCTA = ({ locale }: WeddingCTAProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check session dismissal
    if (sessionStorage.getItem('wedding-cta-dismissed') === 'true') {
      setDismissed(true);
      return;
    }

    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    // Show after hero exits viewport
    const heroEl = document.querySelector('[data-hero]');
    if (!heroEl) {
      // Fallback: show after scrolling 600px
      const onScroll = () => {
        if (window.scrollY > 600) {
          setVisible(true);
          window.removeEventListener('scroll', onScroll);
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('wedding-cta-dismissed', 'true');
  };

  if (dismissed) return null;

  const label = locale === 'es' ? 'Planeas tu boda?' : 'Planning a Wedding?';
  const sublabel = locale === 'es'
    ? 'Di "s\u00ed" en San Miguel'
    : 'Say "I Do" in San Miguel';

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 transition-all duration-300 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        hidden lg:block`}
    >
      <Link
        href={`/${locale}/weddings`}
        className="group relative block bg-[#5B3A29] text-white px-6 py-4 pr-10
                   shadow-lg hover:shadow-xl transition-shadow duration-300
                   max-w-[220px]"
      >
        <p className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase mb-1 group-hover:text-gold-light transition-colors duration-300">
          {label}
        </p>
        <p className="font-serif text-sm text-white/70 font-light italic leading-snug">
          {sublabel}
        </p>

        {/* Close button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDismiss();
          }}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center
                     text-white/40 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l8 8M9 1l-8 8" />
          </svg>
        </button>
      </Link>
    </div>
  );
};
