'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { PillarBlock, type Pillar } from '@/components/ui/PillarBlock';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

/* ═══ SVG Icons — Groups Logistics ═══ */

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function ChefIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" />
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

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="7" r="3" />
      <path d="M21 21v-2a3 3 0 00-2-2.83" />
    </svg>
  );
}

/* ═══ Types ═══ */

interface LogisticsItem {
  title: string;
  description: string;
}

/* ═══ GroupsDetail — Main Component ═══ */

interface GroupsDetailProps {
  locale: Locale;
  dict: Dictionary;
}

export function GroupsDetail({ dict }: GroupsDetailProps) {
  const g = dict.groupsPage;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`;

  const logisticsIcons = [ClipboardIcon, ChefIcon, WifiIcon, ShuttleIcon, LayoutIcon, UsersIcon];

  return (
    <section className="bg-warm-white">

      {/* ═══ Section 1: Hero Banner ═══ */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/images/events/corporate.jpg"
          alt="Corporate event space at Casa Schuck"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p className="text-sm tracking-[0.3em] uppercase text-white/80 font-medium mb-3 hero-fade-up" style={{ animationDelay: '0.1s' }}>
            {g.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-shadow-editorial mb-3 hero-fade-up" style={{ animationDelay: '0.2s' }}>
            {g.headline}
          </h1>
          <p className="text-lg md:text-xl text-stone-light/80 mb-6 max-w-xl hero-fade-up" style={{ animationDelay: '0.3s' }}>
            {g.subHeadline}
          </p>
          <a
            href="#specialist"
            className="inline-block border-2 border-white/80 text-white font-medium
                       px-8 py-3 text-sm tracking-wider uppercase transition-all duration-300
                       hover:bg-white/10 min-h-[44px] hero-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {g.specialistCta}
          </a>
        </div>
      </div>

      {/* ═══ Section 2: Three Pillars ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {g.pillars?.map((pillar: Pillar, i: number) => (
            <PillarBlock
              key={pillar.title}
              pillar={pillar}
              isEven={i % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* ═══ Section 3: Capabilities Grid ═══ */}
      <div className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-gold">
              {g.logisticsHeadline}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {g.logistics?.map((item: LogisticsItem, i: number) => {
              const Icon = logisticsIcons[i];
              return (
                <StaggerItem
                  key={item.title}
                  index={i}
                  staggerDelay={0.1}
                  className="border-l-2 border-gold/30 pl-6 py-2"
                >
                  {Icon && <Icon className="w-8 h-8 text-gold mb-4" />}
                  <h3 className="font-serif text-lg text-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ Section 4: Specialist CTA ═══ */}
      <div id="specialist" className="bg-sunset text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone-light/60 font-medium mb-4">
              {g.specialistEyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              {g.specialistHeadline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-stone-light/70 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
              {g.specialistBody}
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
              {g.specialistCta}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
