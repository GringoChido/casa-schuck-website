import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { SuiteCollection } from '@/components/sections/SuiteCollection';
import { InRoomComforts } from '@/components/sections/InRoomComforts';
import { SecondaryCTA } from '@/components/sections/SecondaryCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.suitesPage.meta.title,
    description: dict.suitesPage.meta.description,
  };
}

export default async function SuitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const h = dict.suitesPage.hero;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[614px] overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rooms/el-royal-suite/hero.jpg"
            alt={h.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-white mb-4 block">
            {h.eyebrow}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl text-white font-normal leading-tight tracking-tight">
            {h.headline}
          </h1>
        </div>
      </section>

      {/* Booking Widget */}
      <AvailabilityBar locale={locale as Locale} dict={dict} variant="light" />

      {/* Suite Collection */}
      <SuiteCollection locale={locale as Locale} dict={dict} />

      {/* In-Room Comforts */}
      <InRoomComforts dict={dict} />

      {/* CTA */}
      <SecondaryCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
