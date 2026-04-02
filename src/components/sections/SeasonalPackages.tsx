'use client';

import Image from 'next/image';
import { buildDeepLink } from '@/lib/cloudbeds';
import mockData from '@/data/mockCloudbeds.json';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface SeasonalPackagesProps {
  locale: Locale;
  dict: Dictionary;
}

type LocaleString = { en: string; es: string };

export function SeasonalPackages({ locale, dict }: SeasonalPackagesProps) {
  const p = dict.packages;
  const packages = mockData.seasonalPackages;

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — staggered reveal */}
        <div className="text-center mb-16">
          <StaggerItem index={0}>
            <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 mb-4">
              {p.eyebrow}
            </p>
          </StaggerItem>
          <StaggerItem index={1}>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.04em] text-black mb-4">
              {p.headline}
            </h2>
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="w-10 h-px bg-black mx-auto mb-6" />
          </StaggerItem>
          <StaggerItem index={3}>
            <p className="font-serif text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
              {p.description}
            </p>
          </StaggerItem>
        </div>

        {/* Package Cards — stagger entrance, hover lift + shadow + image zoom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => {
            const name = (pkg.name as unknown as LocaleString)[locale];
            const desc = (pkg.description as unknown as LocaleString)[locale];

            const bookUrl = buildDeepLink({
              checkin: pkg.dates.start,
              checkout: pkg.dates.end,
              language: locale,
            });

            return (
              <ScrollReveal
                key={pkg.id}
                delay={i * 0.15}
                className="group bg-white overflow-hidden border border-outline-variant
                           hover:shadow-[0_8px_30px_rgba(191,117,75,0.08)]
                           hover:-translate-y-1 transition-all duration-500"
              >
                {/* Package Image — hover zoom */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-sans text-[13px] font-bold tracking-[0.12em] uppercase text-black mb-2">
                    {name}
                  </h3>
                  <p className="font-serif text-sm text-on-surface-variant leading-relaxed mb-4 font-light">
                    {desc}
                  </p>

                  {/* Includes list */}
                  <div className="mb-4">
                    <p className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-black/40 mb-2">
                      {p.includedLabel}
                    </p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="font-serif text-xs text-on-surface-variant flex items-start gap-2 font-light"
                        >
                          <span className="text-black/30 mt-0.5">&mdash;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                    <div>
                      <span className="font-serif text-xs text-on-surface-variant font-light">
                        {locale === 'en' ? 'From' : 'Desde'}
                      </span>{' '}
                      <span className="font-sans text-xl font-bold text-black">
                        ${pkg.startingPrice}
                      </span>
                    </div>
                    <a
                      href={bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-underline bg-black text-white font-sans text-[10px] font-bold
                                 tracking-[0.12em] uppercase px-4 py-2.5
                                 transition-colors duration-300 hover:bg-secondary"
                    >
                      {p.bookPackage}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
