import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { NumberedPillar } from '@/components/ui/NumberedPillar';

interface PhilosophyPillarsProps {
  dict: Dictionary;
}

export function PhilosophyPillars({ dict }: PhilosophyPillarsProps) {
  const p = dict.homePage.philosophy;

  return (
    <section className="py-32 bg-surface overflow-hidden">
      <ScrollReveal className="px-8 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-outline-variant pb-12">
          <div className="max-w-2xl">
            <StaggerItem index={0}>
              <span className="font-label text-on-surface-variant text-xs tracking-[0.3em] uppercase mb-4 block">
                {p.eyebrow}
              </span>
            </StaggerItem>
            <StaggerItem index={1}>
              <h2 className="font-headline text-4xl md:text-6xl italic">{p.headline}</h2>
            </StaggerItem>
          </div>
          <div className="mt-8 md:mt-0">
            <StaggerItem index={2}>
              <p className="font-body text-sm text-on-surface-variant tracking-widest uppercase">
                {p.subtitle}
              </p>
            </StaggerItem>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {p.pillars.map((pillar, i) => (
            <StaggerItem key={pillar.number} index={i + 3}>
              <NumberedPillar
                number={pillar.number}
                title={pillar.title}
                body={pillar.body}
              />
            </StaggerItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
