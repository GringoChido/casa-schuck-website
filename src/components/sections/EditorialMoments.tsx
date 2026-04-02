import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface EditorialMomentsProps {
  locale: Locale;
  dict: Dictionary;
}

const MOMENT_IMAGES = [
  '/images/wedding/ceremony-courtyard.jpg',
  '/images/common/pool.jpg',
];

const MOMENT_LINKS = ['/weddings', '/experiences'];

export function EditorialMoments({ locale, dict }: EditorialMomentsProps) {
  const m = dict.homePage.moments;

  return (
    <section className="py-32 px-8 md:px-24 bg-surface">
      <ScrollReveal>
        <div className="text-center mb-24">
          <StaggerItem index={0}>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">{m.headline}</h2>
          </StaggerItem>
          <StaggerItem index={1}>
            <p className="font-label text-xs tracking-[0.4em] uppercase text-on-surface-variant">
              {m.subtitle}
            </p>
          </StaggerItem>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {m.items.map((item, i) => (
            <StaggerItem key={item.title} index={i + 2}>
              <div className={`group cursor-pointer relative ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden bg-surface-container mb-8 relative">
                  <Image
                    src={MOMENT_IMAGES[i] ?? '/images/common/pool.jpg'}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-3xl mb-4">{item.title}</h4>
                    <p className="font-body text-on-surface-variant text-sm max-w-sm leading-relaxed mb-8">
                      {item.body}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}${MOMENT_LINKS[i] ?? '/experiences'}`}
                    className="bg-primary text-on-primary px-6 py-3 text-[11px] tracking-widest uppercase font-label shrink-0"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
