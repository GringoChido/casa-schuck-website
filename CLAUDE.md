# Casa Schuck — Website

## Client
Casa Schuck is a boutique hotel / luxury event venue in San Miguel de Allende, Mexico. They host weddings, retreats, group events, and curated experiences. The brand feel is warm, editorial, and intimate — not corporate hospitality.

## Stack
- Next.js 16.1.6 (App Router), React 19, TypeScript, Tailwind CSS v4
- Framer Motion for animations and carousels
- No i18n library — uses custom dictionary system with async loaders

## Status
This project is actively in-progress (~70-80% complete). Many components exist but the project has only one initial git commit with substantial uncommitted work.

## Key architecture
- **i18n**: Custom dictionary-based system. Translations in `/src/dictionaries/en.json` and `/src/dictionaries/es.json`. Use `getDictionary(locale)` from `/src/lib/dictionaries.ts`. Type-safe locale validation in `/src/lib/i18n.ts`.
- **Routing**: `app/[locale]/` dynamic segment. Pages: home, retreats, weddings, groups, experiences, services, story.
- **Booking**: Cloudbeds integration scaffolded in `/src/lib/cloudbeds.ts` with mock data in `/src/data/mockCloudbeds.json`. Not yet connected to live API.
- **UI components**: Chatbot, WhatsApp button, MobileBookingBar, RoomImageCarousel — all in `/src/components/ui/`.

## Design system
- **Fonts**: Cormorant Garamond (serif, headings) + Lato (sans, body)
- **Colors**: Terracotta `#3F7373` (teal-green primary), Gold `#BF754B` (warm bronze accent), Cream `#F5EBE0` (bg), Warm White `#FAF4ED`, Charcoal `#2C2C2C` (text)
- **Aesthetic**: Glass morphism effects, editorial grid layouts (5fr/7fr), parallax sections, scroll-triggered fade-ins

## Environment variables
```
NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID  — Hotel booking API
NEXT_PUBLIC_INSTAGRAM_HANDLE       — casaschuck
NEXT_PUBLIC_FACEBOOK_HANDLE        — casaschuck
NEXT_PUBLIC_WHATSAPP_NUMBER        — 5214151806060
```

## Commands
```bash
npm run dev       # Dev server
npm run build     # Production build
npm run lint      # ESLint
```

## Gotchas
- Cloudbeds integration uses mock data right now — don't assume live API works
- The i18n system here is different from clbailey-site (custom dictionaries vs next-intl) — don't mix patterns
- There's a `useIsMobile` hook for responsive breakpoints at 768px — use it instead of media queries in JS
