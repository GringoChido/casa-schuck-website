import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { FullBleedHero } from '@/components/sections/FullBleedHero';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { PackageEditorial } from '@/components/sections/PackageEditorial';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const BASE_URL = 'https://casaschuck.com';

const PACKAGE_IMAGES = [
  '/images/common/garden.jpg',
  '/images/common/pool.jpg',
  '/images/hero/courtyard-main.jpg',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const description = locale === 'es'
    ? 'Paquetes de temporada en Casa Schuck, San Miguel de Allende. Ofertas de Día de Muertos, paquetes de fiestas y escapadas románticas. Reserve directo.'
    : 'Seasonal packages at Casa Schuck, San Miguel de Allende. Dia de Muertos specials, holiday packages, and romantic getaways. Book direct for best rate.';
  return {
    title: dict.packagesPage.meta.title,
    description,
    keywords: [
      'san miguel de allende packages',
      'hotel deals mexico',
      'dia de muertos package',
      'holiday package san miguel',
      'seasonal hotel packages',
    ],
    openGraph: {
      title: dict.packagesPage.meta.title,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/packages`,
      images: [{ url: `${BASE_URL}/images/packages/dia-de-muertos.jpg`, width: 1200, height: 630, alt: 'Casa Schuck seasonal packages' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/packages`,
        es: `${BASE_URL}/es/packages`,
      },
    },
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
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${BASE_URL}/${locale}` },
        { name: locale === 'es' ? 'Paquetes' : 'Packages', url: `${BASE_URL}/${locale}/packages` },
      ]} />

      {/* Full-Bleed Hero */}
      <FullBleedHero
        imageSrc="/images/packages/dia-de-muertos.jpg"
        imageAlt="Seasonal packages at Casa Schuck"
        headline={h.headline}
        subheadline={h.description}
      />

      {/* Booking Widget */}
      <div className="mb-20">
        <AvailabilityBar locale={locale as Locale} dict={dict} variant="light" />
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
