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
    ? 'Celebra tu boda de ensueño en Casa Schuck, San Miguel de Allende. Ceremonias en patio colonial, recepciones en terraza con vista a la Parroquia. Hasta 70 invitados.'
    : 'Host your dream wedding at Casa Schuck, San Miguel de Allende. Colonial courtyard ceremonies, rooftop receptions with Parroquia views. Up to 70 guests.';
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
            ? 'Casa Schuck es un recinto para bodas — ofrecemos el escenario para bodas boutique de hasta 70 invitados, mientras que su planificador se encarga de la coordinación, el banquete y el diseño. Como cada boda es única, no vendemos paquetes; cada una se cotiza de forma individual. Contáctenos por WhatsApp, correo o teléfono para comenzar.'
            : 'Casa Schuck is a venue-only wedding destination — we provide the setting for boutique weddings of up to 70 guests, while your wedding planner handles coordination, catering, and design. Because every wedding is unique, we don\'t sell packages; each is quoted individually. Contact us by WhatsApp, email, or phone to begin.',
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
            ? 'Acomodamos bodas íntimas de hasta 70 invitados, con 10 habitaciones en el hotel para su grupo de bodas.'
            : 'We accommodate intimate weddings of up to 70 guests, with 10 on-site rooms for your wedding party.',
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
