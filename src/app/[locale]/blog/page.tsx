import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { FullBleedHero } from '@/components/sections/FullBleedHero';
import { ScrollReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { getBlogPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Blog | Casa Schuck — Viajes y Cultura de San Miguel de Allende'
    : 'Blog | Casa Schuck — San Miguel de Allende Travel & Culture';

  const description = isEs
    ? 'Guías de viaje, consejos culturales y todo lo que necesitas saber sobre San Miguel de Allende. Desde bodas destino hasta retiros de bienestar.'
    : 'Travel guides, cultural insights, and everything you need to know about San Miguel de Allende. From destination weddings to wellness retreats.';

  return {
    title,
    description,
    keywords: isEs
      ? ['san miguel de allende blog', 'guía de viaje san miguel', 'bodas san miguel', 'hoteles boutique san miguel']
      : ['san miguel de allende blog', 'travel guide san miguel', 'weddings san miguel', 'boutique hotels san miguel'],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://casaschuck.com/${locale}/blog`,
      images: [{ url: '/images/hero/courtyard-main.jpg', width: 1200, height: 630 }],
    },
    alternates: {
      languages: {
        en: '/en/blog',
        es: '/es/blog',
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);
  const isEs = locale === 'es';

  return (
    <>
      <FullBleedHero
        imageSrc="/images/san-miguel/panoramic.png"
        imageAlt={isEs ? 'Vista panorámica de San Miguel de Allende' : 'Panoramic view of San Miguel de Allende'}
        headline={isEs ? 'Crónicas de San Miguel' : 'Chronicles of San Miguel'}
        subheadline={
          isEs
            ? 'Historias, secretos locales y las guías que desearías haber tenido antes de llegar'
            : 'Stories, local secrets, and the guides you wish you had before you arrived'
        }
        height="h-[60vh] md:h-[65vh]"
      />

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <ScrollReveal>
          <p className="font-label text-xs tracking-widest uppercase text-primary mb-4 text-center">
            {isEs ? 'Explora nuestras guías' : 'Explore our guides'}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface text-center mb-16 tracking-[0.04em]">
            {isEs ? 'Artículos Recientes' : 'Recent Articles'}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <StaggerItem key={post.slug} index={index} className="group">
              <Link href={`/${locale}/blog/${post.slug}`} className="block">
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-label text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-label text-[10px] tracking-wider text-on-surface/50 uppercase">
                        {new Date(post.publishedAt).toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-on-surface/30">|</span>
                      <span className="font-label text-[10px] tracking-wider text-on-surface/50 uppercase">
                        {post.readTime} {isEs ? 'lectura' : 'read'}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-on-surface mb-3 tracking-[0.02em] leading-snug group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="font-body text-sm text-on-surface/70 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-primary">
                      <span className="font-label text-xs tracking-widest uppercase">
                        {isEs ? 'Leer más' : 'Read more'}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </section>
    </>
  );
}
