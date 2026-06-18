'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { PillarBlock, type Pillar } from '@/components/ui/PillarBlock';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { WholeHouse } from '@/components/sections/WholeHouse';

/* ═══════════════════════════════════════════
   Minimalist SVG Icons — Logistics Dashboard
   ═══════════════════════════════════════════ */

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function ShuttleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h2m10 0h2M3 9h18M5 13h14" />
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </svg>
  );
}

function ParadeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function ForkKnifeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M5.45 5.11L2 12h4l-1.45 6.89" />
      <path d="M18.55 5.11L22 12h-4l1.45 6.89" />
      <circle cx="12" cy="8" r="4" />
      <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z" />
      <path d="M8.21 5.21a4 4 0 015.58 0M8.21 10.79a4 4 0 010-5.58" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface LogisticsItem {
  title: string;
  description: string;
}

/* ═══════════════════════════════════════
   WeddingsDetail — Main Component
   ═══════════════════════════════════════ */

interface WeddingsDetailProps {
  locale: Locale;
  dict: Dictionary;
}

export function WeddingsDetail({ locale, dict }: WeddingsDetailProps) {
  const w = dict.weddings;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`;

  const logisticsIcons = [CameraIcon, ShuttleIcon, ParadeIcon, ForkKnifeIcon, FlowerIcon, MapPinIcon];

  return (
    <section className="bg-surface">

      {/* ═══ Section 1: Full-Bleed Hero ═══ */}
      <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/wedding/callejoneada-hero.webp"
          alt="Wedding callejoneada with mojigangas and mariachi in San Miguel de Allende"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-sm tracking-[0.3em] uppercase text-white/80 font-medium mb-4 hero-fade-up" style={{ animationDelay: '0.1s' }}>
            {w.eyebrow}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white text-shadow-editorial mb-6 hero-fade-up" style={{ animationDelay: '0.2s' }}>
            {w.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed hero-fade-up" style={{ animationDelay: '0.3s' }}>
            {w.subHeadline}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade-up" style={{ animationDelay: '1.5s' }}>
          <div className="scroll-bounce flex flex-col items-center gap-1">
            <div className="w-px h-6 bg-white/30" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Emotional Intro */}
      <ScrollReveal className="py-20 max-w-3xl mx-auto px-6 text-center">
        <p className="font-serif text-xl md:text-2xl text-on-surface/80 italic leading-relaxed">
          {w.description}
        </p>
      </ScrollReveal>

      {/* ═══ Section 2: The Strategy — Three Pillars ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {w.pillars?.map((pillar: Pillar, i: number) => (
            <PillarBlock
              key={pillar.title}
              pillar={pillar}
              isEven={i % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* ═══ Section 3: The Approach — Venue-Only ═══ */}
      {w.approach && (
        <div className="bg-surface-container-low py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <p className="editorial-label text-secondary mb-6">{w.approach.eyebrow}</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6">
                {w.approach.headline}
              </h2>
              <div className="w-16 h-px bg-secondary mx-auto mb-8" />
              <p className="text-on-surface/70 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
                {w.approach.body}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tertiary text-on-tertiary font-label text-xs tracking-[0.2em] uppercase px-12 py-5 min-h-[44px] transition-colors duration-300 hover:bg-secondary"
              >
                {w.cta}
              </a>
            </ScrollReveal>
          </div>
        </div>
      )}

      {/* ═══ Section 4: Testimonials ═══ */}
      {w.testimonials && (
        <div className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl text-primary">
                Love Stories
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {w.testimonials.map((t, i) => (
                <StaggerItem key={t.names} index={i} staggerDelay={0.15} className="text-center">
                  <div className="w-8 h-px bg-secondary mx-auto mb-6" />
                  <p className="text-on-surface/70 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-serif text-primary">{t.names}</p>
                  <p className="text-xs text-on-surface/50">{t.location}</p>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ Section 5: Venue Capacity ═══ */}
      {w.capacity && (
        <div className="bg-primary text-on-primary py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-serif text-3xl text-on-primary">
                {w.capacity.headline}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                w.capacity.courtyard,
                w.capacity.rooftop,
                w.capacity.garden,
                w.capacity.fullProperty,
              ].map((v, i) => (
                <StaggerItem key={v.name} index={i} staggerDelay={0.1}>
                  <h3 className="font-serif text-lg text-on-primary/90 mb-2">{v.name}</h3>
                  <p className="text-sm text-on-primary/60">{v.seated} {w.capacity.seatedLabel}</p>
                  <p className="text-sm text-on-primary/60">
                    {'cocktail' in v ? `${v.cocktail} ${w.capacity.cocktailLabel}` : ('cocktailNote' in v ? v.cocktailNote : '')}
                  </p>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ Section 6: Logistics Dashboard ═══ */}
      <div className="bg-surface-container-low py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary">
              {w.logisticsHeadline}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {w.logistics?.map((item: LogisticsItem, i: number) => {
              const Icon = logisticsIcons[i];
              return (
                <StaggerItem
                  key={item.title}
                  index={i}
                  staggerDelay={0.1}
                  className="border-l-2 border-secondary/30 pl-6 py-2"
                >
                  {Icon && <Icon className="w-8 h-8 text-secondary mb-4" />}
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface/60 leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ Take the Whole House — Buyout Module ═══ */}
      <WholeHouse locale={locale} dict={dict} />

      {/* ═══ Section 4: The Closer — Specialist Block ═══ */}
      <div id="specialist" className="bg-sunset text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.35em] uppercase text-outline-variant/60 font-medium mb-4">
              {w.specialistEyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              {w.specialistHeadline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-outline-variant/70 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
              {w.specialistBody}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-medium
                         px-10 py-4 text-lg tracking-wide transition-all duration-300
                         hover:bg-white hover:text-sunset min-h-[48px]
                         hover:-translate-y-0.5 active:translate-y-0"
            >
              {w.specialistCta}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
