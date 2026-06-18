# Product

## Register

brand

## Users

Three audiences, two cultures:

1. **Affluent US/Canadian travelers** (45 to 70, design-literate, well-traveled) researching boutique stays in San Miguel de Allende. They book direct when the site feels as considered as the property. They arrive from Google ("best boutique hotels san miguel de allende"), Instagram, and word of mouth.
2. **Mexican nationals** weekending from CDMX and Querétaro. A different buyer: shorter lead time, mobile-first, WhatsApp-native. The Spanish site is cultural adaptation for them, not a translation for tourists.
3. **Wedding planners and retreat facilitators** evaluating the property as a venue. They need capacity, spaces, and credibility fast, then a human contact.

Context of use: evening couch browsing on phone or laptop, dreaming and comparing. The job to be done is "convince me this place is worth the trip, then make booking effortless."

## Product Purpose

Marketing site for Casa Schuck, a 10-room boutique luxury hotel in a colonial house in San Miguel de Allende. It exists to win direct bookings (vs. OTA commission), to sell the house as a wedding/retreat venue, and to rank for San Miguel travel intent. Success: a visitor feels the house before they see the price, and every path ends in a Cloudbeds booking or a WhatsApp conversation.

## Brand Personality

Warm, editorial, intimate. "Quiet luxury": the confidence to underline rather than shout. The voice of a well-read host, never a hospitality chain. Emotions to evoke: arrival, slowness, golden-hour calm, the feeling of being the only guests.

Three words: warm, editorial, unhurried.

## Anti-references

- SaaS landing pages (feature grids, hero metrics, gradient CTAs)
- OTA booking sites (Booking.com density, urgency banners, "Only 2 rooms left!")
- Inter-everything tech minimalism
- Purple gradients, neon accents
- Cards-in-cards, identical icon-card grids
- Corporate hospitality copy ("world-class amenities", "nestled in the heart of")

## Design Principles

1. **The house is the hero.** Photography leads; UI recedes. No component should compete with a courtyard shot.
2. **Editorial, not transactional.** Pages read like a magazine feature with a reservation desk at the end, not a funnel.
3. **Quiet luxury underlines, it never shouts.** Hairline rules, generous whitespace, restrained motion (fades and slow reveals, nothing bouncy).
4. **Both languages are first languages.** ES is written for the national guest, EN for the international one. Neither is a derivative.
5. **Every path ends warm.** Booking CTA or WhatsApp; degradation is graceful (no dead links, no fake content).

## Accessibility & Inclusion

- WCAG 2.1 AA target: contrast on text-over-image enforced via scrims/vignettes, visible focus styles, 44px minimum touch targets.
- `prefers-reduced-motion` respected globally (already implemented in globals.css).
- Spanish diacritics must render in all loaded weights (latin-ext subsets).
- Mobile mental model: mid-range Android on hotel-search Wi-Fi; images must not punish slow connections.
