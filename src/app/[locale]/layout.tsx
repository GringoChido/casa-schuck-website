import { notFound } from 'next/navigation';
import { Montserrat, Source_Serif_4 } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/ui/Chatbot';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { MobileBookingBar } from '@/components/ui/MobileBookingBar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { WeddingCTA } from '@/components/ui/WeddingCTA';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-source-serif',
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
    <html lang={locale} className={`${montserrat.variable} ${sourceSerif.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-white text-black font-serif antialiased pb-20 lg:pb-0">
        <ScrollProgress />
        <Header locale={locale as Locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <Chatbot locale={locale as Locale} dict={dict} />
        <WhatsAppButton />
        <MobileBookingBar locale={locale as Locale} />
        <WeddingCTA locale={locale as Locale} />
      </body>
    </html>
  );
}
