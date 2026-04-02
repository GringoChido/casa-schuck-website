'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';

interface StoryHeroProps {
  dict: Dictionary;
}

export function StoryHero({ dict }: StoryHeroProps) {
  const s = dict.story;

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/story/hero.jpg"
        alt="Casa Schuck — Our Story"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-white/80 font-medium mb-4"
        >
          {s.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white text-shadow-editorial mb-6"
        >
          {s.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {s.intro}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="scroll-bounce flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-white/30" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-40">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
