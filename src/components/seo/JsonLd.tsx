import type { Locale } from '@/lib/i18n';
import { rooms, type Room } from '@/data/rooms';

interface JsonLdProps {
  locale: Locale;
}

const BASE_URL = 'https://casaschuck.com';

// aggregateRating / starRating are deliberately absent from all schemas:
// fabricated review counts in structured data risk a Google penalty.
// Re-add alongside SHOW_TESTIMONIALS (src/data/siteFlags.ts) once real,
// permissioned reviews arrive.

export function HotelJsonLd({ locale }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `${BASE_URL}/#hotel`,
    name: 'Casa Schuck',
    alternateName: 'Casa Schuck Boutique Hotel',
    description: locale === 'es'
      ? 'Hotel boutique en el corazón de San Miguel de Allende. 10 habitaciones únicas en una finca colonial restaurada con desayuno gourmet incluido, terraza en la azotea y vistas a la Parroquia.'
      : 'Boutique hotel in the heart of San Miguel de Allende. 10 unique rooms in a restored colonial estate with gourmet breakfast included, rooftop terrace and Parroquia views.',
    url: BASE_URL,
    telephone: '+524151520657',
    email: 'CasaSchuck@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Garita 3, Centro',
      addressLocality: 'San Miguel de Allende',
      addressRegion: 'Guanajuato',
      postalCode: '37700',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.9144,
      longitude: -100.7452,
    },
    image: [
      `${BASE_URL}/images/hero/courtyard-main.jpg`,
      `${BASE_URL}/images/rooms/el-royal-suite/hero.jpg`,
      `${BASE_URL}/images/areas/rooftop.jpg`,
      `${BASE_URL}/images/common/garden.jpg`,
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, MXN',
    paymentAccepted: 'Cash, Credit Card',
    numberOfRooms: 10,
    checkinTime: '15:00',
    checkoutTime: '12:00',
    petsAllowed: false,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Gourmet Breakfast Included', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop Terrace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'In-Room Spa Services', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Concierge Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Courtyard Garden', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wedding Venue', value: true },
    ],
    containsPlace: rooms.map((room) => ({
      '@type': 'HotelRoom',
      '@id': `${BASE_URL}/${locale}/suites/${room.id}#room`,
      name: room.name[locale],
      description: room.shortDescription[locale],
      image: `${BASE_URL}${room.images[0]}`,
      bed: {
        '@type': 'BedDetails',
        typeOfBed: room.bedType.en,
        numberOfBeds: 1,
      },
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: room.maxGuests,
        unitText: 'guests',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/${locale}/suites/${room.id}`,
      },
    })),
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
    ],
    sameAs: [
      'https://www.instagram.com/casaschuck/',
      'https://www.facebook.com/CasaSchuckboutiquehotel/',
    ],
    hasMap: 'https://maps.google.com/?q=Casa+Schuck,+Garita+3,+Centro,+37700+San+Miguel+de+Allende',
    containedInPlace: {
      '@type': 'City',
      name: 'San Miguel de Allende',
      containedInPlace: {
        '@type': 'State',
        name: 'Guanajuato',
        containedInPlace: {
          '@type': 'Country',
          name: 'Mexico',
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function RoomJsonLd({ room, locale }: { room: Room; locale: Locale }) {
  const url = `${BASE_URL}/${locale}/suites/${room.id}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    '@id': `${url}#room`,
    name: room.name[locale],
    description: room.description[locale],
    url,
    image: room.images.map((i) => `${BASE_URL}${i}`),
    bed: { '@type': 'BedDetails', typeOfBed: room.bedType.en },
    occupancy: { '@type': 'QuantitativeValue', maxValue: room.maxGuests, unitText: 'guests' },
    isPartOf: { '@type': 'Hotel', '@id': `${BASE_URL}/#hotel`, name: 'Casa Schuck' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Casa Schuck',
    url: BASE_URL,
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Casa Schuck Boutique Hotel',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/hero/courtyard-main.jpg`,
      },
    },
    inLanguage: ['en', 'es'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd({ locale }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Casa Schuck Boutique Hotel',
    description: locale === 'es'
      ? 'Hotel boutique y venue para bodas en San Miguel de Allende. Finca colonial restaurada con 10 suites, desayuno incluido y terraza panorámica.'
      : 'Boutique hotel and wedding venue in San Miguel de Allende. Restored colonial estate with 10 suites, breakfast included and panoramic rooftop terrace.',
    image: `${BASE_URL}/images/hero/courtyard-main.jpg`,
    telephone: '+524151520657',
    url: BASE_URL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Garita 3, Centro',
      addressLocality: 'San Miguel de Allende',
      addressRegion: 'Guanajuato',
      postalCode: '37700',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.9144,
      longitude: -100.7453,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.instagram.com/casaschuck/',
      'https://www.facebook.com/CasaSchuckboutiquehotel/',
    ],
    hasMap: 'https://maps.google.com/?q=Casa+Schuck,+Garita+3,+Centro,+37700+San+Miguel+de+Allende',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  image,
  publishedAt,
  url,
}: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${BASE_URL}${image}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    url: `${BASE_URL}${url}`,
    author: {
      '@type': 'Organization',
      name: 'Casa Schuck',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Casa Schuck',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/hero/courtyard-main.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
