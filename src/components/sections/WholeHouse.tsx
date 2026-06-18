import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface WholeHouseProps {
  locale: Locale;
  dict: Dictionary;
}

export function WholeHouse({ dict }: WholeHouseProps) {
  const w = dict.wholeHouse;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/areas/rooftop-sunset.jpg"
        alt="Casa Schuck at golden hour — the rooftop beneath the Parroquia, the whole house exclusively yours"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Vignette + scrim for text legibility (glass-on-photo) */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />

      <ScrollReveal className="relative z-10 mx-6 w-full max-w-2xl">
        <div className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-xl p-8 sm:p-12 text-center">
          <p className="font-label text-[11px] tracking-[0.3em] uppercase text-white/80 mb-5">
            {w.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-white mb-6">
            {w.headline}
          </h2>
          <p className="font-body text-white/85 leading-relaxed mb-9">
            {w.body}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-tertiary text-on-tertiary font-label text-xs tracking-[0.2em] uppercase px-12 py-5 min-h-[44px] transition-colors duration-300 hover:bg-secondary"
          >
            {w.cta}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
