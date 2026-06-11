'use client';

import { useState } from 'react';
import type { Dictionary } from '@/lib/dictionaries';

interface NewsletterCTAProps {
  dict: Dictionary;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterCTA({ dict }: NewsletterCTAProps) {
  const n = dict.packagesPage.newsletter;
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'submitting') return;
    setState('submitting');

    const honeypot = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value;

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: honeypot }),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="newsletter" className="max-w-4xl mx-auto px-8 md:px-12 py-32 text-center">
      <h3 className="text-4xl font-headline mb-6">{n.headline}</h3>
      <p className="text-on-surface-variant mb-12 max-w-lg mx-auto">{n.body}</p>
      {state === 'success' ? (
        <p className="font-serif text-xl italic text-secondary" role="status">
          {n.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-0 max-w-md mx-auto">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
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
            disabled={state === 'submitting'}
            className="font-label uppercase tracking-widest text-secondary py-4 px-6 border-b border-outline text-sm disabled:opacity-50"
          >
            {n.buttonText}
          </button>
        </form>
      )}
      {state === 'error' && (
        <p className="mt-6 font-body text-sm text-error" role="alert">
          {n.error}
        </p>
      )}
    </section>
  );
}
