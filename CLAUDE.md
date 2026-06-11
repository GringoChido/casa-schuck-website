# Casa Schuck — Website

## Client
Casa Schuck is a boutique hotel / luxury event venue in San Miguel de Allende, Mexico. They host weddings, retreats, group events, and curated experiences. The brand feel is warm, editorial, and intimate — not corporate hospitality.

## Stack
- Next.js 16.1.6 (App Router), React 19, TypeScript, Tailwind CSS v4
- Framer Motion for animations and carousels
- No i18n library — uses custom dictionary system with async loaders

## Key architecture
- **i18n**: Custom dictionary-based system. Translations in `/src/dictionaries/en.json` and `/src/dictionaries/es.json`. Use `getDictionary(locale)` from `/src/lib/dictionaries.ts`. Type-safe locale validation in `/src/lib/i18n.ts`.
- **Routing**: `app/[locale]/` dynamic segment. Pages: home, retreats, weddings, groups, experiences, services, story, packages, privacy, terms.
- **Booking**: Cloudbeds integration scaffolded in `/src/lib/cloudbeds.ts` with mock data in `/src/data/mockCloudbeds.json`. Not yet connected to live API.
- **UI components**: Chatbot, WhatsApp button, MobileBookingBar, RoomImageCarousel — all in `/src/components/ui/`.

## Design system
- **Fonts**: Cormorant Garamond (serif, headings — `font-serif`/`font-headline`), Lato (sans, body — `font-sans`/`font-body`), Montserrat (UI labels only — `font-label`)
- **Colors**:
  - Sage `#5B7B6A` — primary accent, CTAs, active states
  - Terracotta `#C17A56` — warm accent, hover states, secondary CTAs
  - Linen `#F7F2EC` — page backgrounds (`bg-surface`)
  - Espresso `#1C1917` — primary text (`text-on-surface`, `bg-primary`)
  - Dusty Rose `#C4A289` — soft accents, borders
  - Gold `#BF754B` — CTA buttons
- **Aesthetic**: "Quiet luxury" — editorial grids, scroll-triggered fade-ins (800ms), glass morphism, parallax sections. No Ken Burns, no word-by-word reveals, no custom cursors.

## Environment variables
See `.env.example` for the full annotated list.
```
NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID    — Cloudbeds booking engine property ID. While unset or
                                       PROPERTY_ID_PLACEHOLDER, all booking CTAs fall back to a
                                       WhatsApp inquiry (see buildBookingUrl in src/lib/cloudbeds.ts)
NEXT_PUBLIC_CLOUDBEDS_ROOM_TYPE_IDS  — JSON map of room slug → Cloudbeds room type ID
                                       (consumed by src/data/roomTypeIds.ts; empty = no room preselect)
NEXT_PUBLIC_INSTAGRAM_HANDLE         — casaschuck
NEXT_PUBLIC_FACEBOOK_HANDLE          — casaschuck
NEXT_PUBLIC_WHATSAPP_NUMBER          — 5214151806060
NEXT_PUBLIC_CHATBOT_ID               — chatbot renders on desktop only when set
RESEND_API_KEY / RESEND_AUDIENCE_ID  — newsletter API (/api/newsletter); no-ops gracefully when unset
```

## Booking flow
- All booking CTAs go through `buildBookingUrl()` in `src/lib/cloudbeds.ts`: Cloudbeds deep link
  when the engine is live, WhatsApp inquiry with a prefilled bilingual message otherwise.
- Every engine link carries `utm_source=website`, `utm_medium=<placement>` (hero | availability_bar |
  mobile_bar | suite_card | package_card), `utm_campaign=direct_booking`.
- Room data comes from `src/data/rooms.ts` (merges mockCloudbeds.json with the env-driven room type
  ID map). The `cloudbedsRoomTypeId` values inside mockCloudbeds.json are fake placeholders — never
  send them to the engine.

## Commands
```bash
npm run dev       # Dev server
npm run build     # Production build
npm run lint      # ESLint
```

## Gotchas
- Cloudbeds integration uses mock data right now — don't assume live API works
- The i18n system uses custom dictionaries, NOT next-intl — don't introduce that library
- There's a `useIsMobile` hook for responsive breakpoints at 768px — use it instead of media queries in JS
- Material Symbols Outlined font is still loaded for a few icons — migrate to Lucide React when touching those components
