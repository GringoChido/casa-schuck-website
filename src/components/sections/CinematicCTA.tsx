import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CinematicCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function CinematicCTA({ locale, dict }: CinematicCTAProps) {
  const c = dict.homePage.cinematicCTA;

  return (
    <section className="relative w-full h-[70vh] min-h-[450px] flex items-center justify-center">
      <Image
        src="/images/areas/rooftop-sunset.jpg"
        alt="Casa Schuck rooftop at sunset"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <ScrollReveal className="relative z-10 text-center px-6">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-white mb-8 tracking-[0.02em]">
          {c.headline}
        </h2>
        <Link
          href={`/${locale}/packages`}
          className="inline-block bg-white/10 backdrop-blur-sm text-white font-label px-10 py-4 text-[12px] tracking-[0.2em] uppercase border border-white/30 hover:bg-white hover:text-espresso transition-all duration-500"
        >
          {c.cta}
        </Link>
      </ScrollReveal>
    </section>
  );
}
