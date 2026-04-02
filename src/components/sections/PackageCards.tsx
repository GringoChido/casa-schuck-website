import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface PackageCardsProps {
  locale: Locale;
  dict: Dictionary;
}

const PACKAGE_IMAGES = [
  '/images/packages/dia-de-muertos.jpg',
  '/images/packages/holiday-escape.jpg',
  '/images/packages/spring-renewal.jpg',
];

export function PackageCards({ locale, dict }: PackageCardsProps) {
  const packages = dict.packagesPage.packages;
  const label = locale === 'es' ? 'Paquetes Curados' : 'Curated Packages';
  const headline = locale === 'es' ? 'Escapes de Temporada' : 'Seasonal Escapes';
  const cta = locale === 'es' ? 'Ver Detalles' : 'View Details';

  return (
    <section className="py-32 md:py-40 px-8 md:px-20 bg-surface-container-high">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <StaggerItem index={0}>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant block mb-4">
                {label}
              </span>
            </StaggerItem>
            <StaggerItem index={1}>
              <h2 className="font-headline text-4xl md:text-5xl">{headline}</h2>
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <StaggerItem key={pkg.name} index={i + 2}>
                <Link
                  href={`/${locale}/packages`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={PACKAGE_IMAGES[i] ?? PACKAGE_IMAGES[0]}
                      alt={pkg.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline text-2xl mb-3 group-hover:text-secondary transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">
                      {pkg.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-xl">
                        {pkg.price}
                      </span>
                      <span className="font-label text-[11px] tracking-[0.15em] uppercase text-secondary group-hover:translate-x-1 transition-transform duration-300">
                        {cta} &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
