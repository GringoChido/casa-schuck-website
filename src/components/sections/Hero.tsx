import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const h = dict.hero;

  return (
    <section data-hero className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns CSS animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ken-burns absolute inset-[-5%] w-[110%] h-[110%]">
          <Image
            src="/images/hero/courtyard-main.jpg"
            alt="Casa Schuck courtyard in San Miguel de Allende"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Overlay — clean dark gradient */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Vignette for cinematic depth */}
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* Content — centered, editorial */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow with decorative lines */}
        <div className="flex items-center gap-4 mb-8 hero-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-8 h-px bg-white/40 origin-right line-scale-in" style={{ animationDelay: '0.4s' }} />
          <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
            {h.eyebrow}
          </p>
          <div className="w-8 h-px bg-white/40 origin-left line-scale-in" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Headline — light serif, large */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 max-w-4xl font-light normal-case tracking-normal hero-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          {h.headline}
        </h1>

        {/* Subheadline — light serif */}
        <p
          className="font-serif text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light hero-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {h.subheadline}
        </p>

        {/* CTA */}
        <div className="hero-fade-up" style={{ animationDelay: '0.65s' }}>
          <a
            href="#availability"
            className="inline-block bg-black/80 backdrop-blur-sm text-white font-sans font-bold
                       px-8 py-4 text-[11px] tracking-[0.15em] uppercase
                       border border-white/20 hover:border-gold hover:bg-gold
                       transition-all duration-300 min-h-[48px]
                       hover:-translate-y-0.5 active:translate-y-0"
          >
            {h.cta}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade-up" style={{ animationDelay: '1.5s' }}>
        <a
          href="#availability"
          className="p-3 block"
          aria-label="Scroll to availability"
        >
          <div className="scroll-bounce flex flex-col items-center gap-1">
            <div className="w-px h-6 bg-white/30" />
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="opacity-40"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
