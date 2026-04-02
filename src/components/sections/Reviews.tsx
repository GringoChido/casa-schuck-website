'use client';

import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface ReviewsProps {
  locale: Locale;
  dict: Dictionary;
}

const mockReviews = [
  {
    source: 'TripAdvisor',
    rating: 5,
    text: {
      en: 'An absolute gem. The breakfast alone is worth the stay. Every morning felt like a celebration in the courtyard.',
      es: 'Una joya absoluta. Solo el desayuno vale la estadia. Cada manana se sentia como una celebracion en el patio.',
    },
    author: 'Sarah M.',
    date: '2025-11',
  },
  {
    source: 'Google',
    rating: 5,
    text: {
      en: 'We booked the whole house for our wedding weekend. Every detail was perfect. The rooftop at sunset is magical.',
      es: 'Reservamos toda la casa para nuestro fin de semana de boda. Cada detalle fue perfecto. La azotea al atardecer es magica.',
    },
    author: 'James & Lia R.',
    date: '2025-10',
  },
  {
    source: 'TripAdvisor',
    rating: 5,
    text: {
      en: 'El Royal Suite is extraordinary. The balcony sun deck, the standalone bathtub, the views. We never wanted to leave.',
      es: 'El Royal Suite es extraordinaria. El balcon solarium, la banera independiente, las vistas. Nunca quisimos irnos.',
    },
    author: 'Patricia D.',
    date: '2025-09',
  },
  {
    source: 'Google',
    rating: 5,
    text: {
      en: 'La Biblioteca Suite transported us. Reading by the pool, French doors open to the garden — this is what a vacation should feel like.',
      es: 'La Biblioteca Suite nos transporto. Leer junto a la piscina, puertas francesas abiertas al jardin — asi deberia sentirse unas vacaciones.',
    },
    author: 'Michael & Ana T.',
    date: '2025-08',
  },
];

export function Reviews({ locale, dict }: ReviewsProps) {
  const rv = dict.reviews;

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <StaggerItem index={0}>
            <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 mb-4">
              {rv.eyebrow}
            </p>
          </StaggerItem>
          <StaggerItem index={1}>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.04em] text-black mb-4">
              {rv.headline}
            </h2>
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="w-10 h-px bg-black mx-auto mb-6" />
          </StaggerItem>

          {/* Rating Badges */}
          <StaggerItem index={3}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-black star-fill" style={{ animationDelay: `${i * 0.1}s` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-black/60">{rv.tripAdvisor}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-black star-fill" style={{ animationDelay: `${i * 0.1 + 0.3}s` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-black/60">{rv.google}</span>
              </div>
            </div>
          </StaggerItem>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockReviews.map((review, i) => (
            <StaggerItem
              key={i}
              index={i}
              staggerDelay={0.12}
              className="bg-white p-8 border border-outline-variant hover:shadow-[0_8px_30px_rgba(191,117,75,0.06)] transition-shadow duration-500"
            >
              {/* Stars with sequential fill animation */}
              <div className="flex mb-4 gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-black star-fill" style={{ animationDelay: `${j * 0.1}s` }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-serif text-lg text-black/80 leading-relaxed italic mb-6 font-light">
                &ldquo;{review.text[locale as 'en' | 'es']}&rdquo;
              </p>

              <footer className="flex items-center justify-between">
                <span className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-black">{review.author}</span>
                <span className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-black/40">{review.source}</span>
              </footer>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
