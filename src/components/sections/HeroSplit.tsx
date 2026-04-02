import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface HeroSplitProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSplit({ locale, dict }: HeroSplitProps) {
  const h = dict.homePage.heroSplit;

  return (
    <header className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left: Text panel */}
      <div className="w-full md:w-5/12 h-1/2 md:h-full bg-surface-container relative overflow-hidden flex items-center justify-center px-8 md:px-12 order-2 md:order-1">
        <div className="max-w-md">
          <span className="font-label text-secondary text-xs tracking-[0.4em] uppercase mb-6 block">
            {h.eyebrow}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-8">
            {h.headline}
          </h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-10">
            {h.body}
          </p>
          <div className="flex items-center gap-6 group cursor-pointer">
            <a
              href="#intro"
              className="font-label text-xs tracking-widest uppercase border-b border-primary/30 group-hover:border-primary transition-all pb-1"
            >
              {h.cta}
            </a>
            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </div>

      {/* Right: Cinematic image */}
      <div className="w-full md:w-7/12 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
        <Image
          src="/images/hero/courtyard-main.jpg"
          alt={h.heroAlt}
          fill
          priority
          className="object-cover hero-image-reveal"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute bottom-12 right-12 text-white hidden md:block">
          <h1 className="font-headline text-7xl lg:text-9xl opacity-10 tracking-tighter select-none">
            REIMAGINED
          </h1>
        </div>
      </div>
    </header>
  );
}
