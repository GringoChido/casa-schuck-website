import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface SeasonalTeaserProps {
  locale: Locale;
  dict: Dictionary;
}

export function SeasonalTeaser({ locale, dict }: SeasonalTeaserProps) {
  const t = dict.homePage.seasonalTeaser;

  return (
    <section className="py-32 px-8 md:px-24 bg-surface">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant mb-4 block">
              {t.eyebrow}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">{t.headline}</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {t.body}
            </p>
          </div>
          <div className="relative group cursor-pointer overflow-hidden aspect-[21/9]">
            <Image
              src="/images/common/garden.jpg"
              alt="Seasonal experiences at Casa Schuck"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <Link
                href={`/${locale}/packages`}
                className="bg-white text-primary px-12 py-5 text-[14px] tracking-[0.3em] uppercase font-semibold font-label shadow-2xl hover:bg-surface transition-colors"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
