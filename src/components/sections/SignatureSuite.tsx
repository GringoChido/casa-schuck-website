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
    <section className="relative bg-surface-container-high py-40">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center">
            {/* Main Image */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="relative h-[400px] md:h-[800px]">
                <Image
                  src="/images/rooms/el-royal-suite/hero.jpg"
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

            {/* Floating Editorial Card */}
            <div className="lg:col-span-5 lg:-ml-32 lg:mt-0 mt-[-50px] bg-white p-12 md:p-20 shadow-2xl relative z-10">
              <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary mb-6 block">
                {s.eyebrow}
              </span>
              <h3 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
                {s.name}
              </h3>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
                {s.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={`/${locale}/suites`}
                  className="bg-primary text-on-primary text-center px-8 py-4 text-[12px] tracking-widest uppercase font-label hover:opacity-90 transition-all"
                >
                  {s.cta}
                </Link>
                <Link
                  href={`/${locale}/suites`}
                  className="border border-outline px-8 py-4 text-center text-[12px] tracking-widest uppercase font-label hover:bg-surface-container transition-all"
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
