import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { ExperiencesDetail } from '@/components/sections/ExperiencesDetail';
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
    ? 'Experiencias curadas en Casa Schuck: spa, tours, desayuno gourmet incluido y servicios de concierge en San Miguel de Allende, México.'
    : 'Curated experiences at Casa Schuck: spa services, guided tours, gourmet breakfast included, and concierge services in San Miguel de Allende, Mexico.';
  return {
    title: `${dict.services.eyebrow} — Casa Schuck`,
    description,
    keywords: [
      'san miguel de allende experiences',
      'spa services san miguel',
      'concierge services boutique hotel',
      'breakfast included hotel',
      'curated experiences mexico',
    ],
    openGraph: {
      title: `${dict.services.eyebrow} — Casa Schuck`,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/experiences`,
      images: [{ url: `${BASE_URL}/images/areas/dining.jpg`, width: 1200, height: 630, alt: 'Casa Schuck dining experience' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/experiences`,
        es: `${BASE_URL}/es/experiences`,
      },
    },
  };
}

export default async function ExperiencesPage({
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
        { name: locale === 'es' ? 'Experiencias' : 'Experiences', url: `${BASE_URL}/${locale}/experiences` },
      ]} />
      <ExperiencesDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
