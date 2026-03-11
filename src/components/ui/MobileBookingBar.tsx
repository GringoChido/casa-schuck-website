'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '@/lib/i18n';

interface MobileBookingBarProps {
  locale: Locale;
}

export function MobileBookingBar({ locale }: MobileBookingBarProps) {
  const [visible, setVisible] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      // Show after scrolling past full hero viewport
      setVisible(y > window.innerHeight);
      // Reveal secondary row on scroll-up
      setShowSecondary(y < lastY && y > window.innerHeight);
      lastY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const callLabel = locale === 'es' ? 'Llamar' : 'Call';
  const mapLabel = locale === 'es' ? 'Mapa' : 'Map';
  const ctaLabel = locale === 'es' ? 'Ver Disponibilidad' : 'Check Availability';

  const mapsUrl = 'https://maps.google.com/?q=Casa+Schuck,+Garita+3,+Centro,+37700+San+Miguel+de+Allende,+Gto.,+Mexico';
  const phoneUrl = 'tel:+524151520657';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden safe-bottom"
        >
          {/* Secondary row: Call + Map */}
          <AnimatePresence>
            {showSecondary && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex gap-2 px-4 pb-2">
                  <a
                    href={phoneUrl}
                    className="flex-1 flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm
                               text-black font-sans font-bold text-[11px] tracking-[0.1em] uppercase
                               py-3 text-sm border border-proper-lightgray min-h-[44px]"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {callLabel}
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm
                               text-black font-sans font-bold text-[11px] tracking-[0.1em] uppercase
                               py-3 text-sm border border-proper-lightgray min-h-[44px]"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {mapLabel}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Primary CTA */}
          <div className="px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white to-white/95">
            <a
              href="#availability"
              className="block w-full bg-black hover:bg-gold text-white font-sans font-bold
                         py-4 text-center text-[12px] tracking-[0.15em] uppercase
                         transition-colors duration-300 min-h-[48px]"
            >
              {ctaLabel}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
