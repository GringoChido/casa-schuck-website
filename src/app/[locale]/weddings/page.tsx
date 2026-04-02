import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { WeddingsDetail } from '@/components/sections/WeddingsDetail';
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
    ? 'Celebra tu boda de ensueño en Casa Schuck, San Miguel de Allende. Ceremonias en patio colonial, recepciones en terraza con vista a la Parroquia. Hasta 60 invitados.'
    : 'Host your dream wedding at Casa Schuck, San Miguel de Allende. Colonial courtyard ceremonies, rooftop receptions with Parroquia views. Up to 60 guests.';
  return {
    title: `${dict.weddings.headline} — Casa Schuck`,
    description,
    keywords: [
      'destination wedding san miguel de allende',
      'wedding venue mexico',
      'intimate wedding venue',
      'colonial wedding',
      'courtyard ceremony',
      'rooftop reception',
    ],
    openGraph: {
      title: `${dict.weddings.headline} — Casa Schuck`,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/weddings`,
      images: [{ url: `${BASE_URL}/images/areas/rooftop.jpg`, width: 1200, height: 630, alt: 'Casa Schuck rooftop wedding venue' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/weddings`,
        es: `${BASE_URL}/es/weddings`,
      },
    },
  };
}

export default async function WeddingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const weddingsFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Cuánto cuesta una boda en Casa Schuck?' : 'How much does a wedding at Casa Schuck cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Los paquetes de boda comienzan en $8,500 USD para ceremonias íntimas de hasta 30 invitados, con paquetes de hacienda completa desde $18,500 USD.'
            : 'Wedding packages start at $8,500 USD for intimate ceremonies up to 30 guests, with full estate packages available from $18,500 USD.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Pueden hacer una boda al aire libre en Casa Schuck?' : 'Can you host an outdoor wedding at Casa Schuck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Sí, ofrecemos tanto nuestro patio colonial para ceremonias como nuestra terraza para recepciones, ambos con vistas impresionantes de San Miguel de Allende.'
            : 'Yes, we offer both our colonial courtyard for ceremonies and our rooftop terrace for receptions, both with stunning views of San Miguel de Allende.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'es' ? '¿Cuántos invitados puede acomodar Casa Schuck?' : 'How many guests can Casa Schuck accommodate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'es'
            ? 'Acomodamos bodas íntimas de hasta 60 invitados, con 9 habitaciones en el hotel para su grupo de bodas.'
            : 'We accommodate intimate weddings of up to 60 guests, with 9 on-site rooms for your wedding party.',
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingsFaqSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${BASE_URL}/${locale}` },
        { name: locale === 'es' ? 'Bodas' : 'Weddings', url: `${BASE_URL}/${locale}/weddings` },
      ]} />
      <WeddingsDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
