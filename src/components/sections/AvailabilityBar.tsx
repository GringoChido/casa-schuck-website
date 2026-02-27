'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { buildDeepLink, getDefaultDates } from '@/lib/cloudbeds';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface AvailabilityBarProps {
  locale: Locale;
  dict: Dictionary;
}

export function AvailabilityBar({ locale, dict }: AvailabilityBarProps) {
  const a = dict.availability;
  const defaults = getDefaultDates();

  const [checkin, setCheckin] = useState(defaults.checkin);
  const [checkout, setCheckout] = useState(defaults.checkout);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    const url = buildDeepLink({
      checkin,
      checkout,
      adults,
      children,
      language: locale,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="availability" className="relative -mt-14 z-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white border border-proper-lightgray p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check-in */}
            <div>
              <label className="block font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-black/50 mb-2">
                {a.checkIn}
              </label>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="w-full bg-proper-offwhite border border-proper-lightgray text-black px-4 py-3 text-sm font-serif focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-black/50 mb-2">
                {a.checkOut}
              </label>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="w-full bg-proper-offwhite border border-proper-lightgray text-black px-4 py-3 text-sm font-serif focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Adults */}
            <div>
              <label className="block font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-black/50 mb-2">
                {a.adults}
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full bg-proper-offwhite border border-proper-lightgray text-black px-4 py-3 text-sm font-serif focus:outline-none focus:border-black transition-colors appearance-none"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? a.adult : a.adults}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div>
              <label className="block font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-black/50 mb-2">
                {a.children}
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full bg-proper-offwhite border border-proper-lightgray text-black px-4 py-3 text-sm font-serif focus:outline-none focus:border-black transition-colors appearance-none"
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? a.child : a.children}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button — Proper style */}
            <button
              onClick={handleSearch}
              className="w-full bg-black hover:bg-proper-red text-white font-sans font-bold py-3 px-6 text-[11px] tracking-[0.15em] uppercase transition-colors min-h-[48px]"
            >
              {a.search}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
