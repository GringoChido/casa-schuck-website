'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Era {
  year: string;
  title: string;
  body: string;
}

interface StoryDict {
  eyebrow: string;
  headline: string;
  intro: string;
  eras: Era[];
  pullQuote: string;
  cta: string;
}

interface OurStoryProps {
  locale: Locale;
  dict: Dictionary;
}

const storyImages = [
  '/images/story/1871.jpg',
  '/images/story/schuck-era.jpg',
  '/images/common/garden.jpg',
  '/images/common/parroquia.jpg',
  '/images/story/modern.webp',
];

export function OurStory({ locale, dict }: OurStoryProps) {
  const s: StoryDict = dict.story;

  return (
    <section id="story" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Eras */}
        <div className="space-y-24">
          {s.eras.map((era, i) => {
            const isEven = i % 2 === 0;
            const image = storyImages[i] || storyImages[0];

            if (i === 2) {
              return (
                <div key={era.year}>
                  {/* Full-width pull quote */}
                  <ScrollReveal className="text-center py-16 mb-24">
                    <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary/80 italic max-w-4xl mx-auto leading-relaxed">
                      &ldquo;{s.pullQuote}&rdquo;
                    </blockquote>
                  </ScrollReveal>

                  <EraBlock era={era} image={image} isEven={isEven} />
                </div>
              );
            }

            return (
              <EraBlock key={era.year} era={era} image={image} isEven={isEven} />
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-20">
          <a
            href={`/${locale}/suites`}
            className="inline-block bg-black text-white hover:bg-secondary font-sans font-bold
                       px-10 py-4 text-[11px] tracking-[0.15em] uppercase transition-all duration-300
                       hover:-translate-y-0.5 active:translate-y-0"
          >
            {s.cta}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EraBlock({
  era,
  image,
  isEven,
}: {
  era: Era;
  image: string;
  isEven: boolean;
}) {
  return (
    <ScrollReveal className={`${isEven ? 'editorial-grid' : 'editorial-grid-reverse'}`}>
      {/* Image */}
      <div className={`relative aspect-[4/3] rounded-xl overflow-hidden ${isEven ? '' : 'md:order-2'}`}>
        <Image
          src={image}
          alt={era.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center ${isEven ? '' : 'md:order-1'}`}>
        <span className="font-serif text-7xl lg:text-8xl text-secondary/10 leading-none mb-2">
          {era.year}
        </span>
        <h3 className="font-serif text-2xl lg:text-3xl text-secondary mb-4">
          {era.title}
        </h3>
        <p className="text-on-surface/70 leading-relaxed text-lg">
          {era.body}
        </p>
      </div>
    </ScrollReveal>
  );
}
