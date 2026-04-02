import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { RetreatsDetail } from '@/components/sections/RetreatsDetail';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const BASE_URL = 'https://casaschuck.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const description = locale === 'es'
    ? 'Retiros de bienestar, yoga y corporativos en Casa Schuck, San Miguel de Allende. Hacienda colonial privada con 9 habitaciones, terraza y jardín.'
    : 'Wellness, yoga, and corporate retreats at Casa Schuck, San Miguel de Allende. Private colonial estate with 9 rooms, rooftop terrace, and garden.';
  return {
    title: `${dict.retreatsPage.headline} — Casa Schuck`,
    description,
    keywords: [
      'wellness retreat san miguel de allende',
      'yoga retreat mexico',
      'corporate retreat venue',
      'group retreat san miguel',
      'meditation retreat',
    ],
    openGraph: {
      title: `${dict.retreatsPage.headline} — Casa Schuck`,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/retreats`,
      images: [{ url: `${BASE_URL}/images/common/garden.jpg`, width: 1200, height: 630, alt: 'Casa Schuck garden retreat space' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/retreats`,
        es: `${BASE_URL}/es/retreats`,
      },
    },
  };
}

export default async function RetreatsPage({
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
        { name: locale === 'es' ? 'Retiros' : 'Retreats', url: `${BASE_URL}/${locale}/retreats` },
      ]} />
      <RetreatsDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
