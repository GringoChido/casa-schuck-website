'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface Pillar {
  title: string;
  subHeadline?: string;
  body: string;
  image: string;
  alt: string;
}

export function PillarBlock({
  pillar,
  isEven,
}: {
  pillar: Pillar;
  isEven: boolean;
}) {
  return (
    <ScrollReveal className={isEven ? 'editorial-grid' : 'editorial-grid-reverse'}>
      {/* Image */}
      <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${isEven ? '' : 'md:order-2'}`}>
        <Image
          src={pillar.image}
          alt={pillar.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center ${isEven ? '' : 'md:order-1'}`}>
        <div className="w-12 h-px bg-secondary mb-6" />
        <h3 className="font-serif text-2xl lg:text-3xl text-secondary mb-2">
          {pillar.title}
        </h3>
        {pillar.subHeadline && (
          <p className="text-on-surface/50 italic text-base mb-3">
            {pillar.subHeadline}
          </p>
        )}
        <p className="text-on-surface/70 leading-relaxed text-lg">
          {pillar.body}
        </p>
      </div>
    </ScrollReveal>
  );
}
