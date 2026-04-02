import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface NarrativeIntroProps {
  locale: Locale;
  dict: Dictionary;
}

export function NarrativeIntro({ locale, dict }: NarrativeIntroProps) {
  const n = dict.homePage.narrative;

  return (
    <section className="py-32 px-8 md:px-24 bg-surface-container-lowest" id="intro">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/story/modern.jpg"
                alt={n.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 -z-10 hidden md:block" />
          </div>
          <div className="md:col-span-6">
            <span className="font-label text-secondary text-xs tracking-[0.2em] uppercase mb-6 block">
              {n.eyebrow}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-10">
              {n.headline}
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
              {n.body}
            </p>
            <a
              href={`/${locale}#availability`}
              className="inline-block bg-primary text-on-primary px-12 py-4 text-[13px] tracking-[0.2em] uppercase font-label hover:opacity-90 transition-all"
            >
              {n.cta}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
