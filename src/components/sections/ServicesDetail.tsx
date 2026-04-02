'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';

interface ServicesDetailProps {
  locale: Locale;
  dict: Dictionary;
}

const gastronomyItems = {
  en: [
    { name: 'Gourmet Breakfast', desc: 'Daily included breakfast with Mexican and international options', price: 'Included' },
    { name: 'Rooftop Dining', desc: 'Private dinner on the rooftop terrace with panoramic city views', price: 'From $85 USD/person' },
    { name: 'Courtyard Dining', desc: 'Intimate dinner in the colonial courtyard with candlelight', price: 'From $75 USD/person' },
    { name: 'Private Chef Experience', desc: 'Multi-course tasting menu prepared in-house by a local chef', price: 'From $120 USD/person' },
    { name: 'The Honor Bar', desc: 'Self-service curated selection of mezcal, wine, beer, and spirits', price: 'Per consumption' },
  ],
  es: [
    { name: 'Desayuno Gourmet', desc: 'Desayuno diario incluido con opciones mexicanas e internacionales', price: 'Incluido' },
    { name: 'Cena en la Azotea', desc: 'Cena privada en la terraza con vistas panorámicas de la ciudad', price: 'Desde $85 USD/persona' },
    { name: 'Cena en el Patio', desc: 'Cena íntima en el patio colonial con velas', price: 'Desde $75 USD/persona' },
    { name: 'Chef Privado', desc: 'Menú degustación de varios tiempos preparado por un chef local', price: 'Desde $120 USD/persona' },
    { name: 'El Honor Bar', desc: 'Selección curada de mezcal, vino, cerveza y destilados de autoservicio', price: 'Por consumo' },
  ],
};

const wellnessItems = {
  en: [
    { name: 'Swedish Massage', desc: 'Classic relaxation massage with essential oils', prices: ['60 min — $80 USD', '90 min — $110 USD'] },
    { name: 'Deep Tissue Massage', desc: 'Targeted pressure for tension relief and recovery', prices: ['60 min — $90 USD', '90 min — $120 USD'] },
    { name: 'Hot Stone Massage', desc: 'Heated volcanic stones for deep muscle relaxation', prices: ['75 min — $100 USD', '90 min — $130 USD'] },
    { name: 'Couples Massage', desc: 'Side-by-side massage in the garden or your suite', prices: ['60 min — $150 USD', '90 min — $200 USD'] },
    { name: 'Private Yoga Session', desc: 'One-on-one session on the rooftop or in the garden', prices: ['60 min — $70 USD'] },
    { name: 'Guided Meditation', desc: 'Mindfulness session in the courtyard or private space', prices: ['45 min — $50 USD'] },
  ],
  es: [
    { name: 'Masaje Sueco', desc: 'Masaje clásico de relajación con aceites esenciales', prices: ['60 min — $80 USD', '90 min — $110 USD'] },
    { name: 'Masaje de Tejido Profundo', desc: 'Presión enfocada para alivio de tensión y recuperación', prices: ['60 min — $90 USD', '90 min — $120 USD'] },
    { name: 'Masaje con Piedras Calientes', desc: 'Piedras volcánicas calientes para relajación muscular profunda', prices: ['75 min — $100 USD', '90 min — $130 USD'] },
    { name: 'Masaje en Pareja', desc: 'Masaje lado a lado en el jardín o en su suite', prices: ['60 min — $150 USD', '90 min — $200 USD'] },
    { name: 'Sesión de Yoga Privada', desc: 'Sesión individual en la azotea o en el jardín', prices: ['60 min — $70 USD'] },
    { name: 'Meditación Guiada', desc: 'Sesión de mindfulness en el patio o espacio privado', prices: ['45 min — $50 USD'] },
  ],
};

const tourItems = {
  en: [
    { name: 'Historical City Tour', desc: 'Walking tour of San Miguel\'s UNESCO World Heritage centro with expert guide', price: '$45 USD/person', duration: '3 hours' },
    { name: 'Art & Gallery Tour', desc: 'Visit top galleries, artist studios, and the Fábrica La Aurora art district', price: '$55 USD/person', duration: '3 hours' },
    { name: 'Culinary Tour', desc: 'Street food, market visits, mezcal tasting, and a traditional cooking class', price: '$75 USD/person', duration: '4 hours' },
    { name: 'Hot Springs Excursion', desc: 'Day trip to natural thermal springs at Escondido Place or La Gruta', price: '$60 USD/person', duration: 'Half day' },
    { name: 'Cañada de la Virgen Ruins', desc: 'Pre-Hispanic archaeological site with guided interpretation', price: '$70 USD/person', duration: 'Half day' },
    { name: 'Wine Country Tour', desc: 'Visit Guanajuato\'s emerging wine region with tastings and lunch', price: '$95 USD/person', duration: 'Full day' },
  ],
  es: [
    { name: 'Tour Histórico de la Ciudad', desc: 'Recorrido a pie por el centro Patrimonio de la Humanidad con guía experto', price: '$45 USD/persona', duration: '3 horas' },
    { name: 'Tour de Arte y Galerías', desc: 'Visita a galerías, estudios de artistas y el distrito de arte Fábrica La Aurora', price: '$55 USD/persona', duration: '3 horas' },
    { name: 'Tour Culinario', desc: 'Comida callejera, visita al mercado, degustación de mezcal y clase de cocina tradicional', price: '$75 USD/persona', duration: '4 horas' },
    { name: 'Excursión a Aguas Termales', desc: 'Excursión a las termas naturales de Escondido Place o La Gruta', price: '$60 USD/persona', duration: 'Medio día' },
    { name: 'Ruinas Cañada de la Virgen', desc: 'Sitio arqueológico prehispánico con interpretación guiada', price: '$70 USD/persona', duration: 'Medio día' },
    { name: 'Tour de Vinos', desc: 'Visita a la región vinícola emergente de Guanajuato con degustaciones y almuerzo', price: '$95 USD/persona', duration: 'Día completo' },
  ],
};

export const ServicesDetail = ({ locale, dict }: ServicesDetailProps) => {
  const isEn = locale === 'en';
  const gastronomy = gastronomyItems[locale];
  const wellness = wellnessItems[locale];
  const tours = tourItems[locale];
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5214151806060'}`;

  return (
    <section className="bg-surface">

      {/* Hero Banner */}
      <div className="relative w-full h-[55vh] min-h-[450px]">
        <Image
          src="/images/common/rooftop-sunset.jpg"
          alt={isEn ? 'Rooftop dining at Casa Schuck' : 'Cena en la azotea de Casa Schuck'}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-sm tracking-[0.3em] uppercase text-secondary-fixed-dim font-medium mb-4 hero-fade-up" style={{ animationDelay: '0.1s' }}>
            {isEn ? 'Hotel Services' : 'Servicios del Hotel'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-shadow-editorial mb-6 hero-fade-up" style={{ animationDelay: '0.2s' }}>
            {isEn ? 'Everything You Need, Nothing You Don\'t' : 'Todo lo que Necesitas, Nada que No'}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed hero-fade-up" style={{ animationDelay: '0.3s' }}>
            {isEn
              ? 'From gourmet breakfast to in-house massage, every detail at Casa Schuck is designed for your comfort.'
              : 'Desde desayuno gourmet hasta masaje en casa, cada detalle en Casa Schuck está diseñado para tu comodidad.'}
          </p>
        </div>
      </div>

      {/* Gastronomy Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <div className="w-16 h-px bg-secondary mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary mb-4">
              {isEn ? 'Gastronomy' : 'Gastronomía'}
            </h2>
            <p className="text-on-surface/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'Casa Schuck is as much a culinary destination as it is a place to stay. Every meal is an experience.'
                : 'Casa Schuck es tanto un destino culinario como un lugar donde hospedarse. Cada comida es una experiencia.'}
            </p>
          </ScrollReveal>

          <ScrollReveal className="editorial-grid mb-20">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/breakfast/courtyard.jpg"
                alt={isEn ? 'Courtyard dining at Casa Schuck' : 'Comedor del patio en Casa Schuck'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {gastronomy.map((item, i) => (
                  <StaggerItem key={item.name} index={i} className="bg-surface-container-low/50 rounded-lg p-5 border border-outline-variant/20">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-secondary mb-1">{item.name}</h3>
                        <p className="text-sm text-on-surface/60 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-sm font-medium text-secondary whitespace-nowrap">{item.price}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Wellness Section */}
      <div className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <div className="w-16 h-px bg-secondary mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary mb-4">
              {isEn ? 'Wellness' : 'Bienestar'}
            </h2>
            <p className="text-on-surface/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'In-house massage and wellness services, delivered to your suite or in the garden.'
                : 'Servicios de masaje y bienestar en casa, en tu suite o en el jardín.'}
            </p>
          </ScrollReveal>

          <ScrollReveal className="editorial-grid-reverse mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-2">
              <Image
                src="/images/experiences/massage.jpg"
                alt={isEn ? 'In-house massage at Casa Schuck' : 'Masaje en Casa Schuck'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wellness.map((item, i) => (
                  <StaggerItem key={item.name} index={i} className="bg-white/60 rounded-lg p-5 border border-outline-variant/20">
                    <h3 className="font-serif text-lg text-secondary mb-1">{item.name}</h3>
                    <p className="text-xs text-on-surface/60 leading-relaxed mb-3">{item.desc}</p>
                    <div className="space-y-1">
                      {item.prices.map((price) => (
                        <p key={price} className="text-sm font-medium text-on-surface/80">{price}</p>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </div>
              <p className="text-xs text-on-surface/50 italic mt-6">
                {isEn
                  ? '* All wellness services require 24-hour advance booking. Couples massage subject to therapist availability.'
                  : '* Todos los servicios de bienestar requieren reserva con 24 horas de anticipación. Masaje en pareja sujeto a disponibilidad.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Tours & Excursions Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <div className="w-16 h-px bg-secondary mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary mb-4">
              {isEn ? 'Tours & Excursions' : 'Tours y Excursiones'}
            </h2>
            <p className="text-on-surface/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'Discover San Miguel de Allende and the surrounding region with our curated experiences.'
                : 'Descubre San Miguel de Allende y la región con nuestras experiencias curadas.'}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tours.map((tour, i) => (
              <StaggerItem key={tour.name} index={i} className="bg-surface-container-low/50 rounded-lg p-6 border border-outline-variant/20">
                <h3 className="font-serif text-xl text-secondary mb-2">{tour.name}</h3>
                <p className="text-sm text-on-surface/60 leading-relaxed mb-4">{tour.desc}</p>
                <div className="flex justify-between items-center pt-3 border-t border-outline-variant/20">
                  <span className="text-xs text-on-surface/50 uppercase tracking-wide">{tour.duration}</span>
                  <span className="text-sm font-medium text-secondary">{tour.price}</span>
                </div>
              </StaggerItem>
            ))}
          </div>

          <ScrollReveal className="editorial-grid">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/common/parroquia.jpg"
                alt={isEn ? 'Parroquia in San Miguel de Allende' : 'Parroquia en San Miguel de Allende'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/experiences/hot-springs.webp"
                alt={isEn ? 'Hot springs near San Miguel de Allende' : 'Aguas termales cerca de San Miguel de Allende'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* WhatsApp / Inquiry CTA */}
      <div className="bg-sunset text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="w-12 h-px bg-white/40 mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              {isEn ? 'Ready to Plan Your Stay?' : '¿Listo para Planear tu Estancia?'}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
              {isEn
                ? 'Message us on WhatsApp to book services, arrange tours, or ask anything about your visit.'
                : 'Escríbenos por WhatsApp para reservar servicios, organizar tours o preguntar sobre tu visita.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-sunset font-medium
                           px-10 py-4 text-lg tracking-wide transition-all duration-300
                           hover:bg-white/90 min-h-[48px]
                           hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.226A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.316 0-4.48-.764-6.211-2.054l-.435-.333-3.3.865.882-3.222-.365-.58A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:CasaSchuck@gmail.com"
                className="inline-block border-2 border-white text-white font-medium
                           px-10 py-4 text-lg tracking-wide transition-all duration-300
                           hover:bg-white hover:text-sunset min-h-[48px]
                           hover:-translate-y-0.5 active:translate-y-0"
              >
                {isEn ? 'Send an Email' : 'Enviar un Correo'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
