'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { buildDeepLink, getDefaultDates } from '@/lib/cloudbeds';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface AvailabilityBarProps {
  locale: Locale;
  dict: Dictionary;
  variant?: 'light' | 'dark';
}

export function AvailabilityBar({ locale, dict, variant = 'light' }: AvailabilityBarProps) {
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

  const isDark = variant === 'dark';

  const containerClass = isDark
    ? 'bg-primary p-8 md:p-12 shadow-2xl'
    : 'bg-white border border-outline-variant/20 p-6 sm:p-8 shadow-xl';

  const labelClass = isDark
    ? 'block font-label text-[10px] tracking-[0.2em] uppercase text-on-primary/60 mb-2'
    : 'block font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2';

  const inputClass = isDark
    ? 'booking-input !border-on-primary/20 !text-on-primary'
    : 'w-full bg-surface-container-low border-none py-3 px-4 font-body text-sm text-on-surface focus:ring-1 focus:ring-primary';

  const buttonClass = isDark
    ? 'w-full lg:w-auto bg-on-primary text-primary px-12 py-5 text-[12px] font-semibold tracking-[0.2em] uppercase font-label hover:bg-surface transition-all whitespace-nowrap'
    : 'w-full bg-primary text-on-primary h-[44px] px-6 font-label text-[11px] uppercase tracking-[0.2em] hover:bg-secondary transition-colors';

  return (
    <section id="availability" className="relative -mt-14 z-20 px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={isDark ? 'max-w-6xl mx-auto' : 'max-w-6xl mx-auto'}
      >
        <div className={containerClass}>
          <div className={isDark
            ? 'flex flex-col lg:flex-row items-end gap-8'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end'
          }>
            {isDark ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{a.checkIn}</label>
                    <input
                      type="text"
                      value={checkin}
                      onChange={(e) => setCheckin(e.target.value)}
                      placeholder="20/03/2026"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{a.checkOut}</label>
                    <input
                      type="text"
                      value={checkout}
                      onChange={(e) => setCheckout(e.target.value)}
                      placeholder="21/03/2026"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{a.adults}</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className={`${inputClass} appearance-none bg-transparent`}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n} className="text-black">
                          {n} {n === 1 ? a.adult : a.adults}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{a.children}</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className={`${inputClass} appearance-none bg-transparent`}
                    >
                      {[0, 1, 2, 3].map((n) => (
                        <option key={n} value={n} className="text-black">
                          {n} {n === 1 ? a.child : a.children}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button onClick={handleSearch} className={buttonClass}>
                  {a.search}
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className={labelClass}>{a.checkIn}</label>
                  <input
                    type="date"
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{a.checkOut}</label>
                  <input
                    type="date"
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{a.adults}</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className={`${inputClass} appearance-none`}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? a.adult : a.adults}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{a.children}</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className={`${inputClass} appearance-none`}
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? a.child : a.children}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={handleSearch} className={buttonClass}>
                  {a.search}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
