import Image from 'next/image';

interface FullBleedHeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subheadline?: string;
  overlayOpacity?: number;
  height?: string;
  showScrollIndicator?: boolean;
  priority?: boolean;
  videoSrc?: string;
}

export function FullBleedHero({
  imageSrc,
  imageAlt,
  headline,
  subheadline,
  overlayOpacity = 0.45,
  height = 'h-[85vh] md:h-[85vh]',
  showScrollIndicator = true,
  priority = true,
  videoSrc,
}: FullBleedHeroProps) {
  return (
    <section className={`relative w-full ${height} min-h-[500px] overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover hero-image-reveal"
        sizes="100vw"
      />

      {/* Optional golden-hour video loop — sits over the poster Image, below the scrim.
          Desktop-only and disabled for reduced-motion via .hero-video (see globals.css);
          the Image above remains the instant poster + mobile/reduced-motion fallback. */}
      {videoSrc && (
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay — flat wash + bottom gradient for text legibility */}
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.1] mb-6 max-w-4xl font-normal tracking-[0.02em] text-shadow-editorial hero-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            className="font-sans text-white/95 text-lg md:text-xl max-w-2xl leading-relaxed text-shadow-editorial hero-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            {subheadline}
          </p>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade-up"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="font-label text-[11px] tracking-[0.3em] uppercase text-white/90"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
            >
              Scroll
            </span>
            <div className="scroll-bounce">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                className="opacity-80 [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.4))]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
