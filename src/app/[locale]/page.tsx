import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { HeroSplit } from '@/components/sections/HeroSplit';
import { AvailabilityBar } from '@/components/sections/AvailabilityBar';
import { NarrativeIntro } from '@/components/sections/NarrativeIntro';
import { PhilosophyPillars } from '@/components/sections/PhilosophyPillars';
import { SignatureSuite } from '@/components/sections/SignatureSuite';
import { EditorialMoments } from '@/components/sections/EditorialMoments';
import { LocalStories } from '@/components/sections/LocalStories';
import { SeasonalTeaser } from '@/components/sections/SeasonalTeaser';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSplit locale={locale as Locale} dict={dict} />
      <AvailabilityBar locale={locale as Locale} dict={dict} variant="dark" />
      <NarrativeIntro locale={locale as Locale} dict={dict} />
      <PhilosophyPillars dict={dict} />
      <SignatureSuite locale={locale as Locale} dict={dict} />
      <EditorialMoments locale={locale as Locale} dict={dict} />
      <LocalStories dict={dict} />
      <SeasonalTeaser locale={locale as Locale} dict={dict} />
    </>
  );
}
