import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface SecondaryCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function SecondaryCTA({ locale, dict }: SecondaryCTAProps) {
  const c = dict.suitesPage.cta;

  return (
    <section className="relative py-48 px-6 text-center bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#C17A56_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <ScrollReveal className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-snug">
          {c.headline}
        </h2>
        <Link
          href={`/${locale}#availability`}
          className="inline-block bg-primary text-on-primary px-12 py-5 font-label text-sm tracking-widest uppercase transition-all hover:bg-secondary active:scale-95"
        >
          {c.buttonText}
        </Link>
      </ScrollReveal>
    </section>
  );
}
