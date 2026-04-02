import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface LocalStoriesProps {
  dict: Dictionary;
}

export function LocalStories({ dict }: LocalStoriesProps) {
  const j = dict.homePage.journal;

  return (
    <section className="py-32 px-8 md:px-24 bg-surface-container-low">
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
                <article className="bg-surface p-8 border border-outline-variant/30 hover:shadow-xl transition-shadow group cursor-pointer">
                  <p className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-4">
                    {article.category}
                  </p>
                  <h5 className="font-headline text-xl mb-6 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h5>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <span className="material-symbols-outlined text-xl opacity-20 group-hover:opacity-100 transition-opacity">
                    arrow_right_alt
                  </span>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
