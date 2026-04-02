import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { PackageEditorial } from '@/components/sections/PackageEditorial';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

const PACKAGE_IMAGES = [
  '/images/common/garden.jpg',
  '/images/common/pool.jpg',
  '/images/hero/courtyard-main.jpg',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.packagesPage.meta.title,
    description: dict.packagesPage.meta.description,
  };
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const h = dict.packagesPage.header;
  const packages = dict.packagesPage.packages;

  return (
    <>
      {/* Header Section */}
      <header className="pt-32 pb-16 max-w-7xl mx-auto px-8 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-3xl">
              <StaggerItem index={0}>
                <span className="block font-label text-secondary uppercase tracking-[0.2em] mb-4">
                  {h.eyebrow}
                </span>
              </StaggerItem>
              <StaggerItem index={1}>
                <h1 className="text-6xl md:text-8xl font-headline -ml-1 leading-tight tracking-tighter">
                  {h.headline}
                </h1>
              </StaggerItem>
            </div>
            <div className="max-w-sm pb-4">
              <StaggerItem index={2}>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {h.description}
                </p>
              </StaggerItem>
            </div>
          </div>
        </ScrollReveal>
      </header>

      {/* Booking Widget */}
      <div className="mb-32">
        <AvailabilityBar locale={locale as Locale} dict={dict} variant="light" />
        <div className="mt-12 h-[1px] bg-outline-variant/30 max-w-7xl mx-auto" />
      </div>

      {/* Package 1: Default layout */}
      <PackageEditorial
        locale={locale as Locale}
        pkg={packages[0]}
        image={PACKAGE_IMAGES[0]}
        index={0}
      />

      {/* Package 2: Reversed layout */}
      <PackageEditorial
        locale={locale as Locale}
        pkg={packages[1]}
        image={PACKAGE_IMAGES[1]}
        reversed
        index={1}
      />

      {/* Package 3: Numbered inclusions layout */}
      <PackageEditorial
        locale={locale as Locale}
        pkg={packages[2]}
        image={PACKAGE_IMAGES[2]}
        index={2}
      />

      {/* Newsletter */}
      <NewsletterCTA dict={dict} />
    </>
  );
}
