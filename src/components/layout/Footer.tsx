'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const f = dict.footer;
  const nav = dict.nav;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-primary text-white overflow-hidden">
      {/* Background atmospheric image */}
      <div className="absolute inset-0">
        <Image
          src="/images/common/garden.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/80" />
      </div>

      <ScrollReveal className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Brand top */}
          <div className="text-center mb-14">
            <StaggerItem index={0}>
              <div className="w-12 h-px bg-secondary mx-auto mb-8" />
            </StaggerItem>
            <StaggerItem index={1}>
              <h3 className="font-serif text-2xl font-medium tracking-[0.04em] text-white mb-3">
                Casa Schuck
              </h3>
            </StaggerItem>
            <StaggerItem index={2}>
              <p className="font-serif text-white/50 font-light max-w-md mx-auto text-lg leading-relaxed">
                {f.tagline}
              </p>
            </StaggerItem>
          </div>

          <div className="w-full h-px bg-white/10 mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Contact Info */}
            <StaggerItem index={3} staggerDelay={0.08}>
              <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-4">
                {nav.contact}
              </h4>
              <div className="space-y-2 font-serif text-sm text-white/60 font-light">
                <a href={`tel:${f.phone}`} className="block hover:text-white transition-colors duration-300">
                  {f.phone}
                </a>
                <a href={`tel:${f.phone2}`} className="block hover:text-white transition-colors duration-300">
                  {f.phone2}
                </a>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-300"
                >
                  {f.whatsapp}
                </a>
                <a href={`mailto:${f.email}`} className="block hover:text-white transition-colors duration-300">
                  {f.email}
                </a>
              </div>
              <div className="mt-4 space-y-1 font-serif text-xs text-white/30 font-light">
                <p>{f.checkIn}</p>
                <p>{f.checkOut}</p>
                <p>{f.breakfast}</p>
              </div>
            </StaggerItem>

            {/* Explore */}
            <StaggerItem index={4} staggerDelay={0.08}>
              <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-4">
                {f.exploreHeading}
              </h4>
              <nav className="space-y-2">
                {[
                  { href: '/suites', label: nav.rooms },
                  { href: '/story', label: nav.story },
                  { href: '/experiences#breakfast', label: nav.dining },
                  { href: '/services', label: nav.services },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={`/${locale}${link.href}`}
                    className="block font-serif text-sm text-white/60 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </StaggerItem>

            {/* Plan Your Stay */}
            <StaggerItem index={5} staggerDelay={0.08}>
              <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-4">
                {f.planHeading}
              </h4>
              <nav className="space-y-2">
                {[
                  { href: '/weddings', label: nav.weddings },
                  { href: '/retreats', label: nav.retreats },
                  { href: '/groups', label: nav.corporateGroups },
                  { href: '#availability', label: nav.bookNow },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={`/${locale}${link.href}`}
                    className="block font-serif text-sm text-white/60 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </StaggerItem>

            {/* Connect */}
            <StaggerItem index={6} staggerDelay={0.08}>
              <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-4">{f.followUs}</h4>
              <SocialLinks />
              <div className="mt-6">
                <p className="font-serif text-xs text-white/30 font-light mb-2">{f.address}</p>
                <a
                  href="https://maps.google.com/?q=Casa+Schuck,+Garita+3,+Centro,+37700+San+Miguel+de+Allende,+Gto.,+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-secondary hover:text-secondary-fixed-dim transition-colors duration-300"
                >
                  {f.openMaps} &rarr;
                </a>
              </div>
              <div className="mt-4 space-y-1">
                <Link href={`/${locale}/privacy`} className="block font-serif text-xs text-white/30 hover:text-white/60 transition-colors duration-300 font-light">
                  {f.privacy}
                </Link>
                <Link href={`/${locale}/terms`} className="block font-serif text-xs text-white/30 hover:text-white/60 transition-colors duration-300 font-light">
                  {f.terms}
                </Link>
              </div>
            </StaggerItem>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 text-center font-serif text-xs text-white/25 font-light">
          &copy; {year} Casa Schuck. {f.rightsReserved}.
        </div>
      </ScrollReveal>
    </footer>
  );
}
