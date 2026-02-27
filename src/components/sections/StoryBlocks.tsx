'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { HeadingReveal } from '@/components/ui/HeadingReveal';

interface StoryBlock {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}

interface StoryBlocksProps {
  locale: Locale;
  dict: Dictionary;
}

export function StoryBlocks({ locale, dict }: StoryBlocksProps) {
  const sb = dict.storyBlocks;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — staggered reveal */}
        <div className="text-center mb-16">
          <StaggerItem index={0}>
            <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 mb-4">
              {sb.eyebrow}
            </p>
          </StaggerItem>
          <StaggerItem index={1}>
            <HeadingReveal
              text={sb.headline}
              as="h2"
              className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.12em] uppercase text-black mb-4"
              delay={0.15}
            />
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="w-10 h-px bg-black mx-auto" />
          </StaggerItem>
        </div>

        {/* Cards — staggered entrance, image zoom on hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sb.blocks?.map((block: StoryBlock, i: number) => (
            <ScrollReveal
              key={block.title}
              delay={i * 0.15}
              className="group"
            >
              <Link href={`/${locale}${block.href}`} className="block">
                {/* Image — simple hover zoom */}
                <div className="relative aspect-[4/5] mb-5 overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text */}
                <h3 className="font-sans text-[13px] font-bold tracking-[0.12em] uppercase text-black mb-2 group-hover:text-gold transition-colors duration-300">
                  {block.title}
                </h3>
                <p className="font-serif text-sm text-proper-gray leading-relaxed mb-3 font-light">
                  {block.description}
                </p>
                <span className="inline-flex items-center gap-1 font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-black group-hover:text-gold transition-colors duration-300">
                  {block.linkText}
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
