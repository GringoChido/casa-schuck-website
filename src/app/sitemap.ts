import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://casaschuck.com';
  const locales = ['en', 'es'];

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/weddings', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/retreats', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/groups', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/experiences', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/suites', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/packages', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/story', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' as const },
  ];

  const blogPosts = getBlogPosts('en');
  for (const post of blogPosts) {
    pages.push({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    });
  }

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.path}`,
            es: `${baseUrl}/es${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
