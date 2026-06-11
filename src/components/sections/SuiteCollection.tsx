import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { buildBookingUrl } from '@/lib/cloudbeds';
import { rooms as roomData } from '@/data/rooms';

interface SuiteCollectionProps {
  locale: Locale;
  dict: Dictionary;
}

const ROOM_IMAGES: Record<string, string> = {
  'el-royal-suite': '/images/rooms/el-royal-suite/hero.jpg',
  'la-biblioteca-suite': '/images/rooms/la-biblioteca-suite/hero.jpg',
  'la-jacaranda': '/images/rooms/la-jacaranda/hero.jpg',
  'la-luna': '/images/rooms/la-luna/hero.jpg',
  'el-cielo': '/images/rooms/el-cielo/hero.jpg',
  'el-sol': '/images/rooms/el-sol/hero.jpg',
  'el-amarillo': '/images/rooms/el-amarillo/hero.jpg',
  'la-escondida': '/images/rooms/la-escondida/hero.jpg',
  'la-vista': '/images/rooms/la-vista/hero.jpg',
};

export function SuiteCollection({ locale, dict }: SuiteCollectionProps) {
  const c = dict.suitesPage.collection;
  const rooms = roomData.slice(0, 6);

  return (
    <section className="py-24 px-6 md:px-12 bg-surface max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-24">
          <StaggerItem index={0}>
            <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4 block">
              {c.eyebrow}
            </span>
          </StaggerItem>
          <StaggerItem index={1}>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">{c.headline}</h2>
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="w-12 h-[1px] bg-outline-variant mx-auto mb-8" />
          </StaggerItem>
          <StaggerItem index={3}>
            <p className="font-body text-on-surface-variant text-sm max-w-2xl mx-auto leading-loose italic">
              {c.description}
            </p>
          </StaggerItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {rooms.map((room, i) => (
            <StaggerItem key={room.id} index={i + 4}>
              <div className={`group ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-8 bg-surface-container relative">
                  <Image
                    src={ROOM_IMAGES[room.id] ?? '/images/rooms/el-royal-suite/hero.jpg'}
                    alt={room.name[locale]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline text-3xl mb-4">{room.name[locale]}</h3>
                  <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant flex items-center gap-4 mb-6 flex-wrap">
                    <span>{c.maxGuests}: {room.maxGuests}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{c.floor}: {room.floor}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{c.bedType}: {room.bedType[locale]}</span>
                  </div>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md">
                    {room.shortDescription[locale]}
                  </p>
                  <a
                    href={buildBookingUrl({
                      roomTypeId: room.roomTypeId,
                      language: locale,
                      placement: 'suite_card',
                      whatsappMessage: dict.rooms.whatsappInquiry.replace('{room}', room.name[locale]),
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-secondary font-body text-sm tracking-widest uppercase border-b border-transparent hover:border-secondary transition-all pb-1"
                  >
                    {c.bookRoom}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
