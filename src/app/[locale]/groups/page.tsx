import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { GroupsDetail } from '@/components/sections/GroupsDetail';
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
    ? 'Eventos corporativos y grupales en Casa Schuck, San Miguel de Allende. Hacienda colonial privada para team building, eventos privados y retiros de empresa.'
    : 'Corporate and group events at Casa Schuck, San Miguel de Allende. Private colonial estate for team building, private events, and company retreats.';
  return {
    title: `${dict.groupsPage.headline} — Casa Schuck`,
    description,
    keywords: [
      'corporate retreat san miguel de allende',
      'group venue mexico',
      'team building mexico',
      'private event venue',
      'company retreat',
    ],
    openGraph: {
      title: `${dict.groupsPage.headline} — Casa Schuck`,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/groups`,
      images: [{ url: `${BASE_URL}/images/areas/living-room.jpg`, width: 1200, height: 630, alt: 'Casa Schuck living room group venue' }],
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en/groups`,
        es: `${BASE_URL}/es/groups`,
      },
    },
  };
}

export default async function GroupsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${BASE_URL}/${locale}` },
        { name: locale === 'es' ? 'Grupos' : 'Groups', url: `${BASE_URL}/${locale}/groups` },
      ]} />
      <GroupsDetail locale={locale as Locale} dict={dict} />
    </main>
  );
}
