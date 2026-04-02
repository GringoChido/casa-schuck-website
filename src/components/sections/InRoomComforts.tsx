import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface InRoomComfortsProps {
  dict: Dictionary;
}

export function InRoomComforts({ dict }: InRoomComfortsProps) {
  const a = dict.suitesPage.amenities;

  return (
    <section className="bg-surface-container-low py-32 px-6 md:px-12">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          <div className="col-span-1">
            <StaggerItem index={0}>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-6 block">
                {a.eyebrow}
              </span>
            </StaggerItem>
            <StaggerItem index={1}>
              <h2 className="font-headline text-4xl leading-tight">
                {a.headline.split(' ').slice(0, -1).join(' ')} <br />{a.headline.split(' ').slice(-1)}
              </h2>
            </StaggerItem>
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {a.items.map((item, i) => (
              <StaggerItem key={item.icon} index={i + 2}>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-body font-medium text-lg mb-2">{item.title}</h4>
                    <p className="font-body text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
