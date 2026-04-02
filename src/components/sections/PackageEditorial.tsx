import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface PackageData {
  eyebrow: string;
  name: string;
  tagline: string;
  price: string;
  priceLabel: string;
  inclusions?: string[];
  inclusionsTitle?: string;
  numberedInclusions?: { number: string; label: string; detail: string }[];
  itinerary?: { day: string; activities?: string; description?: string }[];
  whatsIncluded?: string[];
  addOns?: string[];
  cta: string;
  imageAlt: string;
}

interface PackageEditorialProps {
  locale: Locale;
  pkg: PackageData;
  image: string;
  reversed?: boolean;
  index: number;
}

export function PackageEditorial({ locale, pkg, image, reversed = false, index }: PackageEditorialProps) {
  const hasNumbered = pkg.numberedInclusions && pkg.numberedInclusions.length > 0;

  if (hasNumbered) {
    // Spring Renewal style — side by side with numbered inclusions
    return (
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-12 relative">
                <Image
                  src={image}
                  alt={pkg.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-end pb-12">
              <div className="max-w-md">
                {pkg.eyebrow && (
                  <span className="font-label text-secondary text-xs uppercase tracking-widest block mb-4">
                    {pkg.eyebrow}
                  </span>
                )}
                <h2 className="text-5xl font-headline mb-8 leading-tight">{pkg.name}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                  {pkg.tagline}
                </p>
                <div className="space-y-8 mb-16">
                  {pkg.numberedInclusions?.map((inc) => (
                    <div key={inc.number} className="flex items-center gap-8 py-4 border-b border-outline-variant/20 first:border-t">
                      <span className="font-headline text-3xl text-secondary">{inc.number}</span>
                      <div>
                        <h5 className="font-label uppercase text-[10px] tracking-widest mb-1">{inc.label}</h5>
                        <p className="text-on-surface">{inc.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-headline">
                    {pkg.price} <small className="text-sm font-body italic text-on-surface-variant">{pkg.priceLabel}</small>
                  </span>
                  <a
                    href={`/${locale}#availability`}
                    className="px-10 py-4 border border-primary text-primary font-label uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all text-sm"
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  if (reversed) {
    // Holiday Escape style — reversed layout
    return (
      <div className="bg-surface-container-low py-48 mb-48">
        <section className="max-w-7xl mx-auto px-8 md:px-12">
          <ScrollReveal>
            <div className="editorial-grid items-center">
              <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                {pkg.eyebrow && (
                  <span className="font-label text-secondary text-xs uppercase tracking-widest block mb-4">
                    {pkg.eyebrow}
                  </span>
                )}
                <h2 className="text-5xl font-headline mb-8 leading-tight">{pkg.name}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  {pkg.tagline}
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
                      {pkg.inclusionsTitle ?? 'Inclusions'}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {pkg.inclusions?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
                      Investment
                    </h4>
                    <span className="text-2xl font-headline">
                      {pkg.price} <small className="text-xs uppercase">{pkg.priceLabel}</small>
                    </span>
                  </div>
                </div>
                <a
                  href={`/${locale}#availability`}
                  className="group flex items-center gap-4 text-primary font-label uppercase tracking-widest border-b border-primary/20 pb-2 hover:border-secondary transition-all text-sm"
                >
                  {pkg.cta}
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
                <div className="relative aspect-video md:aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={pkg.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-secondary opacity-40" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    );
  }

  // Día de Muertos style — default layout
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-12 mb-48">
      <ScrollReveal>
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-7 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden relative">
              <Image
                src={image}
                alt={pkg.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 md:right-12 bg-surface p-12 hidden md:block max-w-xs shadow-sm">
              <span className="font-label text-secondary text-xs uppercase tracking-widest block mb-4">
                {pkg.priceLabel}
              </span>
              <span className="text-4xl font-headline">{pkg.price}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center pt-12 md:pt-0 md:pl-12">
            <h2 className="text-5xl font-headline mb-8 leading-tight">{pkg.name}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12 italic">
              &ldquo;{pkg.tagline}&rdquo;
            </p>
            <div className="space-y-6 mb-12">
              <h4 className="font-label text-xs uppercase tracking-widest border-b border-outline-variant/30 pb-2">
                What&apos;s Included
              </h4>
              <ul className="space-y-4">
                {pkg.inclusions?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {pkg.itinerary && (
              <div className="space-y-6 mb-12">
                <h4 className="font-label text-xs uppercase tracking-widest border-b border-outline-variant/30 pb-2">
                  Day by Day
                </h4>
                <div className="space-y-3">
                  {pkg.itinerary.map((d) => (
                    <div key={d.day} className="flex gap-3 items-start">
                      <span className="font-label text-xs tracking-wider uppercase text-secondary whitespace-nowrap min-w-[50px]">{d.day}</span>
                      <p className="text-sm text-on-surface/70">{d.activities || d.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <a
              href={`/${locale}#availability`}
              className="w-full md:w-fit px-12 py-5 bg-primary text-on-primary font-label uppercase tracking-widest hover:bg-on-primary-container transition-colors text-center text-sm"
            >
              {pkg.cta}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
