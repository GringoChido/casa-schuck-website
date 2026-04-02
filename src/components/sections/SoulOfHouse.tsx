import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface SoulOfHouseProps {
  locale: Locale;
  dict: Dictionary;
}

export function SoulOfHouse({ locale, dict }: SoulOfHouseProps) {
  const s = dict.homePage.soulOfHouse;
  const ctaText = locale === 'en' ? 'Explore Our Rooms' : 'Descubre Nuestras Habitaciones';

  return (
    <section className="py-0 bg-surface-container-lowest" id="intro">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Full-bleed image — 60% on desktop */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[700px]">
            <Image
              src="/images/rooms/el-royal-suite/hero.jpg"
              alt={s.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Text — 40% on desktop */}
          <div className="lg:col-span-5 flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-32">
            <div className="max-w-lg">
              <span className="font-label text-secondary text-[10px] tracking-[0.3em] uppercase mb-8 block">
                {s.eyebrow}
              </span>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-10 tracking-[0.02em]">
                {s.headline}
              </h2>
              <div className="space-y-6">
                {s.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="font-body text-on-surface-variant text-base leading-[1.8]">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href={`/${locale}/suites`}
                className="inline-block mt-10 font-label text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-terracotta transition-colors duration-300"
              >
                {ctaText} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
