import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { FullBleedHero } from '@/components/sections/FullBleedHero';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { SuiteCollection } from '@/components/sections/SuiteCollection';
import { InRoomComforts } from '@/components/sections/InRoomComforts';
import { SecondaryCTA } from '@/components/sections/SecondaryCTA';
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
    ? '9 suites únicas en Casa Schuck, San Miguel de Allende. Habitaciones coloniales desde $235 USD/noche con desayuno gourmet incluido. Reserve directo.'
    : '9 unique suites at Casa Schuck, San Miguel de Allende. Colonial rooms from $235 USD/night with gourmet breakfast included. Book direct for best rate.';
  return {
    title: dict.suitesPage.meta.title,
    description,
    keywords: [
      'luxury suites san miguel de allende',
      'boutique hotel rooms',
      'colonial rooms mexico',
      'hotel rooms san miguel',
      'unique hotel suites',
    ],
    openGraph: {
      title: dict.suitesPage.meta.title,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/suites`,
      images: [{ url: `${BASE_URL}/images/rooms/el-royal-suite/hero.jpg`, width: 1200, height: 630, alt: 'El Royal Suite at Casa Schuck' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/suites`,
        es: `${BASE_URL}/es/suites`,
      },
    },
  };
}

export default async function SuitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const h = dict.suitesPage.hero;

  const suitesFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Cuántas habitaciones tiene Casa Schuck?' : 'How many rooms does Casa Schuck have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Casa Schuck tiene 9 suites únicas, cada una con nombre y diseño propio, desde $235 hasta $345 USD por noche.'
            : 'Casa Schuck has 9 uniquely appointed suites, each named and designed with its own character, from $235 to $345 USD per night.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿El desayuno está incluido en Casa Schuck?' : 'Is breakfast included at Casa Schuck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Sí, un desayuno gourmet preparado con ingredientes locales está incluido con cada estancia.'
            : 'Yes, a gourmet breakfast prepared with local ingredients is included with every stay.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿A qué hora es el check-in y check-out?' : 'What time is check-in and check-out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'El check-in es a las 3:00 PM y el check-out es a las 12:00 PM (mediodía).'
            : 'Check-in is at 3:00 PM and check-out is at 12:00 PM (noon).',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(suitesFaqSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${BASE_URL}/${locale}` },
        { name: locale === 'es' ? 'Suites' : 'Suites', url: `${BASE_URL}/${locale}/suites` },
      ]} />

      {/* Full-Bleed Hero */}
      <FullBleedHero
        imageSrc="/images/rooms/el-royal-suite/hero.jpg"
        imageAlt={h.imageAlt}
        headline={h.headline}
        subheadline={h.eyebrow}
      />

      {/* Booking Widget */}
      <AvailabilityBar locale={locale as Locale} dict={dict} variant="light" />

      {/* Suite Collection */}
      <SuiteCollection locale={locale as Locale} dict={dict} />

      {/* In-Room Comforts */}
      <InRoomComforts dict={dict} />

      {/* CTA */}
      <SecondaryCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
