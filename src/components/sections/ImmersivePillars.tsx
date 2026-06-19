import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface ImmersivePillarsProps {
  dict: Dictionary;
}

const PILLAR_IMAGES = [
  '/images/areas/detail-ironwork.jpg', // Authenticity — hand-forged colonial ironwork
  '/images/areas/breakfast-table.jpg', // Intimacy — a table set with care, a guest in our home
  '/images/areas/garden-courtyard.jpg', // Sanctuary — lush shaded courtyard at golden hour
];

export function ImmersivePillars({ dict }: ImmersivePillarsProps) {
  const p = dict.homePage.immersivePillars;

  return (
    <section className="py-32 md:py-40 px-8 md:px-20 bg-surface">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.items.map((pillar: { title: string; body: string }, i: number) => (
              <StaggerItem key={pillar.title} index={i}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-8">
                    <Image
                      src={PILLAR_IMAGES[i] ?? PILLAR_IMAGES[0]}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500" />
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl mb-4 tracking-[0.02em]">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-base leading-[1.8]">
                    {pillar.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
