import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface TestimonialSectionProps {
  dict: Dictionary;
}

export function TestimonialSection({ dict }: TestimonialSectionProps) {
  const t = dict.homePage.testimonials;

  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-lowest">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <StaggerItem index={0}>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant block mb-4">
                {t.eyebrow}
              </span>
            </StaggerItem>
            <StaggerItem index={1}>
              <h2 className="font-headline text-4xl md:text-5xl">{t.headline}</h2>
            </StaggerItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {t.quotes.map((quote: { text: string; author: string; origin: string }, i: number) => (
              <StaggerItem key={i} index={i + 2}>
                <blockquote className="text-center">
                  <div className="w-8 h-px bg-secondary mx-auto mb-8" />
                  <p className="font-serif text-xl md:text-2xl italic text-on-surface leading-relaxed mb-8">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant block">
                        {quote.author}
                      </span>
                      <span className="font-body text-sm text-on-surface-variant/60 mt-1 block">
                        {quote.origin}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
