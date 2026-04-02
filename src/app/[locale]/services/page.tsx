import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { ServicesDetail } from '@/components/sections/ServicesDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Hotel Services — Casa Schuck'
      : 'Servicios del Hotel — Casa Schuck',
    description: isEn
      ? 'Gourmet dining, in-house massage, wellness, and curated tours at Casa Schuck boutique hotel in San Miguel de Allende.'
      : 'Gastronomía, masaje, bienestar y tours curados en el hotel boutique Casa Schuck en San Miguel de Allende.',
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <ServicesDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
