import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { FullBleedHero } from '@/components/sections/FullBleedHero';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { SoulOfHouse } from '@/components/sections/SoulOfHouse';
import { ImmersivePillars } from '@/components/sections/ImmersivePillars';
import { PackageCards } from '@/components/sections/PackageCards';
import { EditorialMoments } from '@/components/sections/EditorialMoments';
import { SanMiguelSection } from '@/components/sections/SanMiguelSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { SHOW_TESTIMONIALS } from '@/data/siteFlags';
import { CinematicCTA } from '@/components/sections/CinematicCTA';

const BASE_URL = 'https://casaschuck.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const description = locale === 'es'
    ? 'Hotel boutique en San Miguel de Allende. 10 suites coloniales, desayuno gourmet incluido, terraza con vista a la Parroquia. Reserve directo al mejor precio.'
    : 'Boutique hotel in San Miguel de Allende. 10 colonial suites, gourmet breakfast included, rooftop with Parroquia views. Book direct for the best rate.';
  return {
    title: dict.meta.title,
    description,
    keywords: [
      'boutique hotel san miguel de allende',
      'luxury hotel mexico',
      'casa schuck',
      'book direct best rate',
      'colonial hotel',
      'bed and breakfast san miguel',
    ],
    openGraph: {
      title: dict.meta.title,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}`,
      images: [{ url: `${BASE_URL}/images/hero/courtyard-main.jpg`, width: 1200, height: 630, alt: 'Casa Schuck courtyard' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const h = dict.homePage.fullBleedHero;

  const homePageFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Dónde se encuentra Casa Schuck?' : 'Where is Casa Schuck located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Casa Schuck se encuentra en Garita 3, Centro, a solo dos cuadras del Jardín Principal en el corazón de San Miguel de Allende, Guanajuato, México.'
            : 'Casa Schuck is located at Garita 3, Centro, just two blocks from the Jardín Principal in the heart of San Miguel de Allende, Guanajuato, Mexico.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Qué hace a Casa Schuck diferente de otros hoteles?' : 'What makes Casa Schuck different from other hotels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Casa Schuck es una hacienda colonial restaurada de 1965 con solo 10 habitaciones, ofreciendo la intimidad de una casa privada con el lujo de un hotel boutique. El desayuno está incluido y ofrecemos vistas de la Parroquia desde la terraza.'
            : 'Casa Schuck is a restored 1965 colonial estate with only 10 rooms, offering the intimacy of a private home with boutique hotel luxury. Breakfast is included, and we offer rooftop views of the Parroquia.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Cómo obtengo la mejor tarifa en Casa Schuck?' : 'How do I get the best rate at Casa Schuck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Reserve directamente a través de nuestro sitio web para obtener la tarifa garantizada más baja, con desayuno gourmet incluido.'
            : 'Book directly through our website for the guaranteed best rate, with complimentary breakfast included.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageFaqSchema) }}
      />

      {/* 1. THE ARRIVAL */}
      <FullBleedHero
        imageSrc="/images/hero/courtyard-main.jpg"
        imageAlt={h.imageAlt}
        headline={h.headline}
        subheadline={h.subheadline}
        videoSrc="/videos/hero-loop.mp4"
      />

      {/* 2. THE INVITATION */}
      <AvailabilityBar locale={locale as Locale} dict={dict} variant="dark" />

      {/* 3. THE SOUL OF THE HOUSE */}
      <SoulOfHouse locale={locale as Locale} dict={dict} />

      {/* 4. THE PHILOSOPHY */}
      <ImmersivePillars dict={dict} />

      {/* 5. THE PACKAGES */}
      <PackageCards locale={locale as Locale} dict={dict} />

      {/* 6. THE EXPERIENCE */}
      <EditorialMoments locale={locale as Locale} dict={dict} />

      {/* 7. THE PLACE */}
      <SanMiguelSection dict={dict} />

      {/* 8. THE PROOF — gated until real, permissioned guest quotes arrive (src/data/siteFlags.ts) */}
      {SHOW_TESTIMONIALS && <TestimonialSection dict={dict} />}

      {/* 9. THE RETURN */}
      <CinematicCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
