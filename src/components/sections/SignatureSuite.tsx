import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface SignatureSuiteProps {
  locale: Locale;
  dict: Dictionary;
}

export function SignatureSuite({ locale, dict }: SignatureSuiteProps) {
  const s = dict.homePage.signatureSuite;

  return (
    <section className="relative bg-espresso">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] lg:min-h-[700px]">
          {/* Full-bleed image */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[700px]">
            <Image
              src="/images/rooms/el-royal-suite/hero.jpg"
              alt={s.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Editorial card */}
          <div className="lg:col-span-5 flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-32 bg-white">
            <div className="max-w-md">
              <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary mb-6 block">
                {s.eyebrow}
              </span>
              <h3 className="font-headline text-4xl md:text-5xl mb-4 leading-tight tracking-[0.02em]">
                {s.name}
              </h3>
              <p className="font-label text-xs tracking-[0.15em] text-on-surface-variant mb-8">
                From $345/night
              </p>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
                {s.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/suites`}
                  className="bg-primary text-on-primary text-center px-8 py-4 text-[12px] tracking-widest uppercase font-label hover:opacity-90 transition-all"
                >
                  {s.cta}
                </Link>
                <Link
                  href={`/${locale}/suites`}
                  className="border border-outline text-center px-8 py-4 text-[12px] tracking-widest uppercase font-label hover:bg-surface-container transition-all"
                >
                  {s.galleryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
