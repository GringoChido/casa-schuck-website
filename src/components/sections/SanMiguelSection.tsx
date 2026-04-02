import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface SanMiguelSectionProps {
  dict: Dictionary;
}

export function SanMiguelSection({ dict }: SanMiguelSectionProps) {
  const s = dict.homePage.sanMiguel;

  return (
    <section className="bg-surface">
      <ScrollReveal>
        {/* Full-bleed panoramic */}
        <div className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src="/images/san-miguel/panoramic.png"
            alt={s.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-20 pb-12">
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
              {s.coordinates}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-[0.02em]">
              {s.headline}
            </h2>
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-4xl mx-auto px-8 md:px-20 py-20">
          <div className="space-y-6">
            {s.paragraphs.map((p: string, i: number) => (
              <p key={i} className="font-body text-on-surface-variant text-base md:text-lg leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
