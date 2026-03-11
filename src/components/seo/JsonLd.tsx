import type { Locale } from '@/lib/i18n';

interface JsonLdProps {
  locale: Locale;
}

export function HotelJsonLd({ locale }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Casa Schuck',
    description: locale === 'es'
      ? 'Hotel boutique en el corazón de San Miguel de Allende. 9 habitaciones únicas con desayuno incluido.'
      : 'Boutique hotel in the heart of San Miguel de Allende. 9 unique rooms with breakfast included.',
    url: 'https://casaschuck.com',
    telephone: '+524151520657',
    email: 'info@casaschuck.com',
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
    image: 'https://casaschuck.com/images/hero/courtyard-main.jpg',
    priceRange: '$235 - $345 USD',
    numberOfRooms: 9,
    checkinTime: '15:00',
    checkoutTime: '12:00',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Breakfast Included', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop Terrace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa Services', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Concierge', value: true },
    ],
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.8',
    },
    availableLanguage: ['English', 'Spanish'],
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
    '@type': 'LocalBusiness',
    '@id': 'https://casaschuck.com',
    name: 'Casa Schuck Boutique Hotel',
    image: 'https://casaschuck.com/images/hero/courtyard-main.jpg',
    telephone: '+524151520657',
    url: 'https://casaschuck.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Garita 3, Centro',
      addressLocality: 'San Miguel de Allende',
      addressRegion: 'Guanajuato',
      postalCode: '37700',
      addressCountry: 'MX',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.instagram.com/casaschuck',
      'https://www.facebook.com/casaschuck',
    ],
    hasMap: 'https://maps.google.com/?q=Casa+Schuck,+Garita+3,+Centro,+37700+San+Miguel+de+Allende',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
      bestRating: '5',
    },
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
