import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Casa Schuck | Boutique Hotel in San Miguel de Allende',
    template: '%s | Casa Schuck',
  },
  description: 'A colonial sanctuary reimagined. 9 unique rooms in the heart of San Miguel de Allende. Boutique luxury for weddings, retreats, and unforgettable stays. Book direct for the best rate.',
  keywords: [
    'boutique hotel San Miguel de Allende',
    'luxury hotel Mexico',
    'Casa Schuck',
    'wedding venue San Miguel de Allende',
    'retreat center Mexico',
    'colonial hotel',
    'bed and breakfast San Miguel',
    'romantic hotel Mexico',
    'best hotels San Miguel de Allende',
    'destination wedding Mexico',
    'wellness retreat Mexico',
    'hotel with rooftop terrace',
    'Guanajuato hotels',
    'boutique accommodation Mexico',
  ],
  authors: [{ name: 'Casa Schuck' }],
  creator: 'Casa Schuck',
  metadataBase: new URL('https://casaschuck.com'),
  alternates: {
    languages: {
      en: '/en',
      es: '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    siteName: 'Casa Schuck',
    title: 'Casa Schuck | Boutique Hotel in San Miguel de Allende',
    description: 'A colonial sanctuary reimagined. 9 unique rooms, rooftop terrace, and curated experiences in the heart of San Miguel de Allende.',
    images: [{ url: '/images/hero/courtyard-main.jpg', width: 1200, height: 630, alt: 'Casa Schuck courtyard in San Miguel de Allende' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Schuck | Boutique Hotel in San Miguel de Allende',
    description: 'A colonial sanctuary reimagined. Boutique luxury in the heart of San Miguel de Allende.',
    images: ['/images/hero/courtyard-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
