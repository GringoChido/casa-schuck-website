'use client';

import { useState } from 'react';
import { RoomImageCarousel } from '@/components/ui/RoomImageCarousel';
import { RoomDetail, type RoomType } from '@/components/ui/RoomDetail';
import mockData from '@/data/mockCloudbeds.json';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { StaggerItem, ScrollReveal } from '@/components/ui/ScrollReveal';

interface RoomShowcaseProps {
  locale: Locale;
  dict: Dictionary;
}

export function RoomShowcase({ locale, dict }: RoomShowcaseProps) {
  const rooms = mockData.roomTypes;
  const amenityLabels = mockData.amenityLabels[locale] || mockData.amenityLabels.en;
  const r = dict.rooms;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRoom = rooms[activeIndex];

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <StaggerItem index={0}>
            <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-black/50 mb-4">
              {r.eyebrow}
            </p>
          </StaggerItem>
          <StaggerItem index={1}>
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-[0.04em] text-black mb-4">
              {r.headline}
            </h2>
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="w-10 h-px bg-black mx-auto mb-6" />
          </StaggerItem>
          <StaggerItem index={3}>
            <p className="font-serif text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
              {r.description}
            </p>
          </StaggerItem>
        </div>

        {/* Desktop: Vertical tabs left + detail right */}
        <ScrollReveal className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left: Room Name List */}
          <div className="col-span-3 space-y-0">
            {rooms.map((room, i) => (
              <button
                key={room.id}
                onClick={() => setActiveIndex(i)}
                data-active={i === activeIndex}
                className={`room-tab-border w-full text-left px-4 py-3 border-l-2 transition-all duration-300 ${
                  i === activeIndex
                    ? 'border-secondary text-black'
                    : 'border-transparent text-on-surface-variant hover:text-black hover:border-outline-variant'
                }`}
              >
                <span className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase">{room.name[locale]}</span>
                <span className="block font-serif text-sm text-on-surface-variant mt-0.5 font-light">
                  ${room.baseRate} / {locale === 'es' ? 'noche' : 'night'}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Carousel + Detail */}
          <div className="col-span-9">
            <RoomImageCarousel
              images={activeRoom.images}
              roomName={activeRoom.name[locale]}
            />
            <RoomDetail
              room={activeRoom as unknown as RoomType}
              locale={locale}
              dict={r}
              amenityLabels={amenityLabels}
            />
          </div>
        </ScrollReveal>

        {/* Mobile: Horizontal scrollable pills + detail */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            {rooms.map((room, i) => (
              <button
                key={room.id}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 snap-start px-4 py-2.5 text-[11px] font-sans font-bold tracking-[0.1em] uppercase transition-all duration-300 min-h-[44px] ${
                  i === activeIndex
                    ? 'bg-black text-white'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {room.name[locale]}
              </button>
            ))}
          </div>

          <RoomImageCarousel
            images={activeRoom.images}
            roomName={activeRoom.name[locale]}
          />
          <RoomDetail
            room={activeRoom as unknown as RoomType}
            locale={locale}
            dict={r}
            amenityLabels={amenityLabels}
          />
        </div>
      </div>
    </section>
  );
}
