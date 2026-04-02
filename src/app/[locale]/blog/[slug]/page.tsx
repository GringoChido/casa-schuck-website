import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getBlogPosts, getBlogPost } from '@/data/blog-posts';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getBlogPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) {
    return { title: 'Not Found' };
  }

  const otherLocale = locale === 'es' ? 'en' : 'es';

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://casaschuck.com/${locale}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    alternates: {
      languages: {
        en: `/en/blog/${post.slug}`,
        es: `/es/blog/${post.slug}`,
      },
    },
    other: {
      'article:published_time': post.publishedAt,
      'article:author': post.author,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const isEs = locale === 'es';
  const allPosts = getBlogPosts(locale);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://casaschuck.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Casa Schuck',
      url: 'https://casaschuck.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Casa Schuck',
      logo: {
        '@type': 'ImageObject',
        url: 'https://casaschuck.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://casaschuck.com/${locale}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    inLanguage: locale === 'es' ? 'es-MX' : 'en-US',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-20">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-[1.1] mb-5 max-w-4xl font-normal tracking-[0.02em]">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-white/60">
            <span className="font-label text-[10px] tracking-wider uppercase">
              {new Date(post.publishedAt).toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>|</span>
            <span className="font-label text-[10px] tracking-wider uppercase">
              {post.readTime} {isEs ? 'lectura' : 'read'}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="space-y-6">
            {post.body.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-base md:text-lg leading-[1.8] text-on-surface/85"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal>
          <div className="mt-20 pt-12 border-t border-dusty-rose/30">
            <h2 className="font-serif text-2xl md:text-3xl text-on-surface mb-10 tracking-[0.04em]">
              {isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-8">
              {post.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-serif text-lg md:text-xl text-on-surface mb-3 tracking-[0.02em]">
                    {faq.question}
                  </h3>
                  <p className="font-body text-base leading-[1.8] text-on-surface/75">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Back to blog */}
        <ScrollReveal>
          <div className="mt-16 pt-10 border-t border-dusty-rose/30">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-primary hover:text-terracotta transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="font-label text-xs tracking-widest uppercase">
                {isEs ? 'Volver al blog' : 'Back to blog'}
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-3xl text-on-surface text-center mb-12 tracking-[0.04em]">
                {isEs ? 'También te puede interesar' : 'You might also enjoy'}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <ScrollReveal key={relatedPost.slug}>
                  <Link href={`/${locale}/blog/${relatedPost.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <span className="font-label text-[10px] tracking-widest uppercase text-primary">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-serif text-lg text-on-surface mt-2 tracking-[0.02em] leading-snug group-hover:text-primary transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
