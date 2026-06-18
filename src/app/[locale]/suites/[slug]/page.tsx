import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/dictionaries';
import { rooms, getRoomBySlug } from '@/data/rooms';
import mockData from '@/data/mockCloudbeds.json';
import { FullBleedHero } from '@/components/sections/FullBleedHero';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { RoomImageCarousel } from '@/components/ui/RoomImageCarousel';
import { RoomDetail } from '@/components/ui/RoomDetail';

const BASE_URL = 'https://casaschuck.com';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const room of rooms) {
      params.push({ locale, slug: room.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const room = getRoomBySlug(slug);

  if (!room) {
    return { title: 'Not Found' };
  }

  const title = `${room.name[locale]} | Casa Schuck`;
  const description = room.shortDescription[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${BASE_URL}/${locale}/suites/${slug}`,
      images: [{ url: `${BASE_URL}${room.images[0]}`, width: 1200, height: 630, alt: room.name[locale] }],
    },
    alternates: {
      languages: {
        en: `/en/suites/${slug}`,
        es: `/es/suites/${slug}`,
      },
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const amenityLabels = mockData.amenityLabels[locale] ?? mockData.amenityLabels.en;

  return (
    <>
      <FullBleedHero
        imageSrc={room.images[0]}
        imageAlt={room.name[locale]}
        headline={room.name[locale]}
        subheadline={room.tagline[locale]}
      />

      <AvailabilityBar locale={locale} dict={dict} variant="light" />

      <section className="bg-surface py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <RoomImageCarousel images={room.images} roomName={room.name[locale]} />
          <RoomDetail room={room} locale={locale} dict={dict.rooms} amenityLabels={amenityLabels} />

          <div className="mt-16 pt-10 border-t border-outline-variant/40">
            <Link
              href={`/${locale}/suites`}
              className="cta-underline font-label text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-terracotta transition-colors duration-300"
            >
              {locale === 'en' ? '← All Rooms' : '← Todas las Habitaciones'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
