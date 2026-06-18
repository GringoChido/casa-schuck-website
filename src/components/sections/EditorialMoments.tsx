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
  '/images/retreats/yoga.jpg',
  '/images/retreats/sacred-space.avif',
  '/images/breakfast/courtyard.jpg',
];

const MOMENT_LINKS = ['/weddings', '/retreats', '/retreats', '/retreats'];

export function EditorialMoments({ locale, dict }: EditorialMomentsProps) {
  const m = dict.homePage.moments;

  return (
    <section className="py-32 md:py-40 px-8 md:px-20 bg-surface">
      <ScrollReveal>
        <div className="text-center mb-20">
          <StaggerItem index={0}>
            <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant block mb-4">
              {m.subtitle}
            </span>
          </StaggerItem>
          <StaggerItem index={1}>
            <h2 className="font-headline text-4xl md:text-5xl">{m.headline}</h2>
          </StaggerItem>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {m.items.map((item, i) => (
            <StaggerItem key={item.title} index={i + 2}>
              <Link
                href={`/${locale}${MOMENT_LINKS[i] ?? '/experiences'}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={MOMENT_IMAGES[i] ?? MOMENT_IMAGES[0]}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary block mb-2">
                  {m.subtitle}
                </span>
                <h4 className="font-headline text-2xl mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {item.body}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link
            href={`/${locale}/retreats`}
            className="inline-block bg-tertiary text-on-tertiary font-label text-xs tracking-[0.2em] uppercase px-12 py-5 min-h-[44px] transition-colors duration-300 hover:bg-secondary"
          >
            {m.retreatsCta} &rarr;
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
