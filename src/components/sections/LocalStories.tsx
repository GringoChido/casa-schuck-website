import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface LocalStoriesProps {
  dict: Dictionary;
}

const ARTICLE_IMAGES = [
  '/images/areas/detail-arch.jpg',
  '/images/areas/living-room.jpg',
  '/images/san-miguel/parroquia.jpg',
];

export function LocalStories({ dict }: LocalStoriesProps) {
  const j = dict.homePage.journal;

  return (
    <section className="py-32 md:py-40 px-8 md:px-20 bg-surface-container-low">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-16">
            <StaggerItem index={0}>
              <h2 className="font-headline text-4xl">{j.headline}</h2>
            </StaggerItem>
            <StaggerItem index={1}>
              <a
                href="#"
                className="font-label text-xs tracking-widest uppercase border-b border-primary pb-1"
              >
                {j.cta}
              </a>
            </StaggerItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {j.articles.map((article, i) => (
              <StaggerItem key={article.title} index={i + 2}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                    <Image
                      src={ARTICLE_IMAGES[i] ?? ARTICLE_IMAGES[0]}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                  </div>
                  <p className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-3">
                    {article.category}
                  </p>
                  <h5 className="font-headline text-xl mb-4 group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h5>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
