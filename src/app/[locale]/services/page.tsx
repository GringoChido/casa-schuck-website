import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { ServicesDetail } from '@/components/sections/ServicesDetail';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const BASE_URL = 'https://casaschuck.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const title = isEn ? 'Hotel Services — Casa Schuck' : 'Servicios del Hotel — Casa Schuck';
  const description = isEn
    ? 'Gourmet dining, in-house massage, wellness, and curated tours at Casa Schuck boutique hotel in San Miguel de Allende. Breakfast included.'
    : 'Gastronomía, masaje, bienestar y tours curados en el hotel boutique Casa Schuck en San Miguel de Allende. Desayuno gourmet incluido.';
  return {
    title,
    description,
    keywords: [
      'hotel services san miguel de allende',
      'boutique hotel amenities',
      'massage spa san miguel',
      'gourmet breakfast san miguel',
      'concierge tours',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/services`,
      images: [{ url: `${BASE_URL}/images/areas/dining.jpg`, width: 1200, height: 630, alt: 'Casa Schuck dining and services' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/services`,
        es: `${BASE_URL}/es/services`,
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${BASE_URL}/${locale}` },
        { name: locale === 'es' ? 'Servicios' : 'Services', url: `${BASE_URL}/${locale}/services` },
      ]} />
      <ServicesDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
