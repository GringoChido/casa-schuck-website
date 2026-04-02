'use client';

import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { StaggerItem } from '@/components/ui/ScrollReveal';

interface BookDirectCalloutProps {
  locale: Locale;
  dict: Dictionary;
}

export function BookDirectCallout({ locale, dict }: BookDirectCalloutProps) {
  const h = dict.hero;

  return (
    <section className="bg-white py-20 sm:py-28 border-y border-outline-variant">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <StaggerItem index={0}>
          <div className="w-10 h-px bg-black mx-auto mb-8" />
        </StaggerItem>
        <StaggerItem index={1}>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.04em] text-black mb-4">
            {h.bookDirect}
          </h2>
        </StaggerItem>
        <StaggerItem index={2}>
          <p className="font-serif text-lg text-on-surface-variant font-light mb-8">
            {h.breakfastBadge}
          </p>
        </StaggerItem>
        <StaggerItem index={3}>
          <a
            href={`/${locale}#availability`}
            className="inline-block bg-black text-white hover:bg-secondary font-sans font-bold text-[11px] tracking-[0.15em]
                       px-8 py-4 transition-all duration-300 min-h-[44px] uppercase
                       hover:-translate-y-0.5 active:translate-y-0"
          >
            {h.cta}
          </a>
        </StaggerItem>
      </div>
    </section>
  );
}
