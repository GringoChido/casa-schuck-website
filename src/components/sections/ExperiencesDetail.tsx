'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ExperiencesDetailProps {
  locale: Locale;
  dict: Dictionary;
}

export function ExperiencesDetail({ locale, dict }: ExperiencesDetailProps) {
  const s = dict.services;
  const b = dict.breakfastCallout;

  const pricingItems = s.massagePricing
    ? s.massagePricing.split('|').map((item: string) => {
        const [duration, price] = item.trim().split(':').map((s: string) => s.trim());
        return { duration, price };
      })
    : [];

  return (
    <section className="bg-warm-white">

      {/* Hero Banner */}
      <div className="relative w-full h-[55vh] min-h-[450px]">
        <Image
          src="/images/breakfast/courtyard.jpg"
          alt="Courtyard dining at Casa Schuck"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-sm tracking-[0.3em] uppercase text-gold-light font-medium mb-4 hero-fade-up" style={{ animationDelay: '0.1s' }}>
            {s.eyebrow}
          </h1>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-shadow-editorial mb-6 hero-fade-up" style={{ animationDelay: '0.2s' }}>
            {s.headline}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed hero-fade-up" style={{ animationDelay: '0.3s' }}>
            {s.description}
          </p>
        </div>
      </div>

      {/* Breakfast Block */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal id="breakfast" className="editorial-grid">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/breakfast/spread.jpg"
                alt="Breakfast spread at Casa Schuck"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="w-12 h-px bg-terracotta mb-6" />
              <p className="text-xs tracking-[0.25em] uppercase text-terracotta font-medium mb-2">
                {b.eyebrow}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-gold mb-4">
                {b.headline}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                {b.description}
              </p>

              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-4 py-2 rounded-full mb-3 self-start">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {b.time}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-cream/50 rounded-lg p-4">
                  <h4 className="font-serif text-sm text-gold mb-1">{b.mexicanTitle}</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{b.mexicanItems}</p>
                </div>
                <div className="bg-cream/50 rounded-lg p-4">
                  <h4 className="font-serif text-sm text-gold mb-1">{b.classicTitle}</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{b.classicItems}</p>
                </div>
              </div>

              <p className="text-xs text-charcoal/50 italic mt-4">{b.note}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* In-House Massage */}
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="editorial-grid-reverse">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-2">
              <Image
                src="/images/experiences/massage.jpg"
                alt="In-house massage at Casa Schuck"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center md:order-1">
              <div className="w-12 h-px bg-terracotta mb-6" />
              <h3 className="font-serif text-2xl lg:text-3xl text-gold mb-4">
                {s.massageTitle}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {s.massageDescription}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {pricingItems.map((item: { duration: string; price: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-cream rounded-lg p-4 text-center min-h-[44px] flex flex-col items-center justify-center"
                  >
                    <span className="text-xs text-charcoal/50 uppercase tracking-wide block mb-1">
                      {item.duration}
                    </span>
                    <span className="text-lg font-serif text-gold font-medium">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-charcoal/50 italic">{s.massageNote}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* The Honor Bar */}
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="editorial-grid">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/experiences/mezcal.webp"
                alt="The Honor Bar at Casa Schuck"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="w-12 h-px bg-terracotta mb-6" />
              <h3 className="font-serif text-2xl lg:text-3xl text-gold mb-4">
                {s.honorBarTitle}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {s.honorBarDescription}
              </p>

              <div className="bg-cream/50 rounded-lg p-5 border border-stone/20">
                <div className="w-10 h-px bg-gold mb-3" />
                <h4 className="font-serif text-lg text-gold mb-2">{s.wineRackTitle}</h4>
                <p className="text-sm text-charcoal/60 leading-relaxed">{s.wineRackDescription}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Tours & Excursions */}
      <div className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h3 className="font-serif text-3xl sm:text-4xl text-gold">
              {s.toursExcursionsHeadline}
            </h3>
          </ScrollReveal>

          <ScrollReveal className="editorial-grid-reverse mb-20">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-2">
              <Image
                src="/images/common/parroquia.jpg"
                alt="Parroquia and city views in San Miguel de Allende"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center md:order-1">
              <div className="w-12 h-px bg-terracotta mb-6" />
              <h4 className="font-serif text-2xl lg:text-3xl text-gold mb-4">
                {s.toursTitle}
              </h4>
              <p className="text-charcoal/70 leading-relaxed">
                {s.toursDescription}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="editorial-grid">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/experiences/hot-springs.webp"
                alt="Hot springs near San Miguel de Allende"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="w-12 h-px bg-terracotta mb-6" />
              <h4 className="font-serif text-2xl lg:text-3xl text-gold mb-4">
                {s.dayTripsTitle}
              </h4>
              <p className="text-charcoal/70 leading-relaxed">
                {s.dayTripsDescription}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* VIP Dining Card */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="bg-white rounded-lg p-8 border border-stone/20 shadow-sm text-center mb-16">
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <h3 className="font-serif text-xl text-gold mb-3">{s.diningTitle}</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed max-w-lg mx-auto">
              {s.diningDescription}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Booking CTA Band */}
      <div className="bg-sunset text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="w-12 h-px bg-white/40 mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              {dict.hero.bookDirect}
            </h2>
            <p className="text-stone-light/70 text-lg mb-8">
              {dict.hero.breakfastBadge}
            </p>
            <a
              href={`/${locale}#availability`}
              className="inline-block border-2 border-white text-white font-medium
                         px-10 py-4 text-lg tracking-wide transition-all duration-300
                         hover:bg-white hover:text-sunset min-h-[48px]
                         hover:-translate-y-0.5 active:translate-y-0"
            >
              {dict.hero.cta}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
