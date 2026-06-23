import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { StoryHero } from '@/components/sections/StoryHero';
import { OurStory } from '@/components/sections/OurStory';
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
    ? 'Descubre la historia de Casa Schuck, una hacienda colonial restaurada de 1978 convertida en hotel boutique en el corazón de San Miguel de Allende.'
    : 'Discover the story of Casa Schuck, a restored 1978 colonial estate turned boutique hotel in the heart of San Miguel de Allende, Mexico.';
  return {
    title: `${dict.nav.story} — Casa Schuck`,
    description,
    keywords: [
      'casa schuck history',
      'boutique hotel story',
      'san miguel de allende historic hotel',
      'colonial estate mexico',
      'heritage hotel',
    ],
    openGraph: {
      title: `${dict.nav.story} — Casa Schuck`,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/story`,
      images: [{ url: `${BASE_URL}/images/hero/courtyard-main.jpg`, width: 1200, height: 630, alt: 'Casa Schuck colonial courtyard' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/story`,
        es: `${BASE_URL}/es/story`,
      },
    },
  };
}

export default async function StoryPage({
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
        { name: locale === 'es' ? 'Nuestra Historia' : 'Our Story', url: `${BASE_URL}/${locale}/story` },
      ]} />
      <StoryHero dict={dict} />
      <OurStory locale={locale as Locale} dict={dict} />
    </main>
  );
}
