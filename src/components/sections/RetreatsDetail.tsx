'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { PillarBlock, type Pillar } from '@/components/ui/PillarBlock';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

/* ═══ SVG Icons — Retreat Logistics ═══ */

function RooftopIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  );
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0113 0" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89-.82" />
      <path d="M17 8c3-1 6-1 6 4s-5 8-11 8c-2 0-4-.5-5.5-1.5" />
      <path d="M17 8C17 8 13 12 10 15" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h2m10 0h2M3 9h18M5 13h14" />
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

/* ═══ Types ═══ */

interface LogisticsItem {
  title: string;
  description: string;
}

/* ═══ RetreatsDetail — Main Component ═══ */

interface RetreatsDetailProps {
  locale: Locale;
  dict: Dictionary;
}

export function RetreatsDetail({ dict }: RetreatsDetailProps) {
  const r = dict.retreatsPage;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`;

  const logisticsIcons = [RooftopIcon, PersonIcon, LeafIcon, CarIcon, CompassIcon, HomeIcon];

  return (
    <section className="bg-surface">

      {/* ═══ Section 1: Full-Bleed Hero ═══ */}
      <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/retreats/header.webp"
          alt="Retreat sanctuary at Casa Schuck in San Miguel de Allende"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-sm tracking-[0.3em] uppercase text-white/80 font-medium mb-4 hero-fade-up" style={{ animationDelay: '0.1s' }}>
            {r.eyebrow}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white text-shadow-editorial mb-6 hero-fade-up" style={{ animationDelay: '0.2s' }}>
            {r.headline}
          </h1>
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

      {/* ═══ Section 2: Sensory Intro ═══ */}
      <div className="py-20 sm:py-24">
        <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-px bg-secondary mx-auto mb-8" />
          <p className="font-serif text-xl md:text-2xl text-on-surface/80 italic leading-relaxed">
            {r.introBody}
          </p>
        </ScrollReveal>
      </div>

      {/* ═══ Section 3: Three Pillars — Zig-Zag Editorial ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-20">
          {r.pillars?.map((pillar: Pillar, i: number) => (
            <PillarBlock
              key={pillar.title}
              pillar={pillar}
              isEven={i % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* ═══ Section 4: Retreat Types with Pricing ═══ */}
      {r.retreatTypes && (
        <div className="bg-surface-container-low py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="text-center mb-16">
              <p className="editorial-label text-secondary mb-4">Programs</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary">
                Choose Your Journey
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {(r.retreatTypes as Array<{ name: string; pricing: Array<{ duration: string; price: string }>; description: string; includes: string[]; capacity: { min: number; max: number } }>).map((rt, i) => (
                <StaggerItem
                  key={rt.name}
                  index={i}
                  staggerDelay={0.15}
                  className="bg-surface p-8 border border-outline-variant/20 flex flex-col"
                >
                  <h3 className="font-serif text-2xl text-primary mb-2">{rt.name}</h3>
                  <div className="mb-4">
                    {rt.pricing.map((p) => (
                      <p key={p.duration} className="text-sm text-on-surface/70">
                        <span className="font-serif text-lg text-secondary">{p.price}</span>{' '}
                        <span className="text-on-surface/50">/ {p.duration}</span>
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-on-surface/50 mb-4">{rt.capacity.min}–{rt.capacity.max} guests</p>
                  <p className="text-on-surface/70 text-sm leading-relaxed mb-6">{rt.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {rt.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-on-surface/70">
                        <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-on-primary px-6 py-3 font-label text-xs tracking-widest uppercase transition-all hover:bg-secondary"
                  >
                    {r.specialistCta}
                  </a>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ Section 5: Sample Itinerary ═══ */}
      {r.sampleItineraries && (
        <div className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl text-primary">
                Sample Itinerary
              </h2>
              <p className="text-on-surface/60 mt-4 max-w-2xl mx-auto">
                Every retreat is customized. Here is a glimpse of what your journey could look like.
              </p>
            </ScrollReveal>

            {(r.sampleItineraries as Array<{ name: string; days: Array<{ day: string; title: string; activities: string[] }> }>).map((itinerary, idx) => (
              <ScrollReveal key={itinerary.name} delay={idx * 0.1} className="mb-12 last:mb-0">
                <h3 className="font-serif text-2xl text-secondary mb-6">{itinerary.name}</h3>
                <div className="space-y-4">
                  {itinerary.days.map((d, i) => (
                    <StaggerItem key={d.day} index={i} staggerDelay={0.08} className="border-l-2 border-secondary/20 pl-6 py-3">
                      <div className="flex gap-4 items-baseline mb-1">
                        <span className="font-label text-xs tracking-widest uppercase text-secondary whitespace-nowrap min-w-[60px]">{d.day}</span>
                        <span className="font-serif text-primary">{d.title}</span>
                      </div>
                      <ul className="pl-[76px] space-y-1">
                        {d.activities.map((a) => (
                          <li key={a} className="text-sm text-on-surface/60">{a}</li>
                        ))}
                      </ul>
                    </StaggerItem>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* ═══ Section 6: Logistics Grid ═══ */}
      <div className="bg-surface-container-low py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary">
              {r.logisticsHeadline}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {r.logistics?.map((item: LogisticsItem, i: number) => {
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

      {/* ═══ Section 5: Specialist CTA ═══ */}
      <div id="specialist" className="bg-sunset text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.35em] uppercase text-outline-variant/60 font-medium mb-4">
              {r.specialistEyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              {r.specialistHeadline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-outline-variant/70 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
              {r.specialistBody}
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
              {r.specialistCta}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
