import { notFound } from 'next/navigation';
import { Cormorant_Garamond, Lato, Montserrat } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/ui/Chatbot';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { MobileBookingBar } from '@/components/ui/MobileBookingBar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { WeddingCTA } from '@/components/ui/WeddingCTA';
import { HotelJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-montserrat',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${cormorantGaramond.variable} ${lato.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="x-default" href="/en" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased pb-20 lg:pb-0">
        <ScrollProgress />
        <WebSiteJsonLd />
        <HotelJsonLd locale={locale as Locale} />
        <LocalBusinessJsonLd locale={locale as Locale} />
        <Header locale={locale as Locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        {/* Desktop-only, and only once a real chatbot service is configured.
            On mobile the WhatsApp button IS the chat. */}
        {process.env.NEXT_PUBLIC_CHATBOT_ID && <Chatbot locale={locale as Locale} dict={dict} />}
        <WhatsAppButton />
        <MobileBookingBar locale={locale as Locale} dict={dict} />
        <WeddingCTA locale={locale as Locale} />
      </body>
    </html>
  );
}
