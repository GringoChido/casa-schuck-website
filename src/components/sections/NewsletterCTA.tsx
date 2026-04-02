'use client';

import { useState } from 'react';
import type { Dictionary } from '@/lib/dictionaries';

interface NewsletterCTAProps {
  dict: Dictionary;
}

export function NewsletterCTA({ dict }: NewsletterCTAProps) {
  const n = dict.packagesPage.newsletter;
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup integration placeholder
  };

  return (
    <section className="max-w-4xl mx-auto px-8 md:px-12 py-32 text-center">
      <h3 className="text-4xl font-headline mb-6">{n.headline}</h3>
      <p className="text-on-surface-variant mb-12 max-w-lg mx-auto">{n.body}</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-0 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent border-b border-outline py-4 px-2 focus:outline-none focus:border-secondary transition-colors font-body"
          placeholder={n.placeholder}
          required
        />
        <button
          type="submit"
          className="font-label uppercase tracking-widest text-secondary py-4 px-6 border-b border-outline text-sm"
        >
          {n.buttonText}
        </button>
      </form>
    </section>
  );
}
