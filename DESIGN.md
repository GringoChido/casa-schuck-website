---
name: Casa Schuck
description: Quiet-luxury editorial site for a 10-room boutique hotel in San Miguel de Allende
colors:
  sage: "#5B7B6A"
  terracotta: "#C17A56"
  linen: "#F7F2EC"
  espresso: "#1C1917"
  dusty-rose: "#C4A289"
  gold: "#BF754B"
  surface-bright: "#FAF7F3"
  surface-dim: "#E8E0D8"
  outline: "#8A7D72"
  outline-variant: "#C4B9AE"
  whatsapp: "#25D366"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Lato, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.2em"
rounded:
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  section-mobile: "48px"
  section-desktop: "80px"
  grid-gap: "32px"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta}"
  button-sage:
    backgroundColor: "{colors.sage}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "20px 48px"
  button-sage-hover:
    backgroundColor: "{colors.terracotta}"
---

# Design System: Casa Schuck

## 1. Overview

**Creative North Star: "The Golden-Hour Courtyard"**

Every screen should feel like stepping off a cobblestone street into a quiet colonial courtyard at golden hour. The system is editorial and photographic: full-bleed imagery carries the emotion, type set in a calm serif carries the story, and the interface itself stays nearly invisible. Density is low, whitespace is generous, motion is slow (fades and reveals between 600ms and 1800ms, ease-out, nothing elastic).

This system explicitly rejects SaaS landing-page conventions, OTA booking-site density and urgency, Inter-everything tech minimalism, purple gradients, and cards-in-cards. It is a magazine feature about a house, with a reservation desk at the end.

**Key Characteristics:**
- Photography-first, full-bleed heroes on every page
- Warm tinted neutrals (linen, espresso) with sage and terracotta as committed accents
- Serif display type at light weight, tracked-out uppercase labels
- Hairline rules (1px) as the primary structural device
- Glass panels reserved for overlays on photography, never on flat surfaces

## 2. Colors

A warm, earthen palette pulled from the house itself: plaster, clay, garden, and evening light.

### Primary
- **Espresso** (#1C1917): Primary text, headings, dark CTA buttons, and the dark "sunset" sections. A warm near-black, never #000.
- **Linen** (#F7F2EC): Page background. Warm plaster, never pure white. Surface variants step down to #E0D7CE.

### Secondary
- **Terracotta** (#C17A56): Hover states, secondary CTAs, warm accents. The clay of the rooftops.
- **Gold** (#BF754B): CTA buttons in dark contexts.

### Tertiary
- **Sage** (#5B7B6A): Primary booking accents, active states, the garden's voice.
- **Dusty Rose** (#C4A289): Soft accents, borders, dividers on dark surfaces.

### Neutral
- **Outline** (#8A7D72): Borders on light surfaces, secondary icons.
- **Outline Variant** (#C4B9AE): Hairline dividers, input underlines, scrollbar thumb.

### Named Rules
**The Plaster Rule.** No pure white, no pure black, anywhere. Backgrounds are linen-family, text is espresso. #FFF appears only inside glass overlays and on-color button text.

**The Jewel Box Rule.** The jewel tones (emerald #2D6A4F, bougainvillea #C2185B, jacaranda #5C6BC0) exist for rare editorial moments tied to their subject. Never structural, never on more than one element per viewport.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia fallback)
**Body Font:** Lato (with Helvetica Neue fallback)
**Label Font:** Montserrat (UI labels only)

**Character:** A literary serif at regular weight does the talking; a neutral humanist sans recedes into body copy; tracked-out Montserrat caps act as quiet wayfinding. The pairing reads "boutique publisher," not "hotel chain."

### Hierarchy
- **Display** (400, clamp 2.5–4.5rem, 1.1): Hero headlines over photography, one per page.
- **Headline** (400, clamp 1.75–2.75rem, 1.15): Section titles. Weight stays at 400; scale carries hierarchy.
- **Title** (600, 1.25–1.5rem, 1.3): Card and room names, subsection leads.
- **Body** (400, 1rem, 1.7): Paragraphs capped at 65–75ch.
- **Label** (500, 10–12px, 0.2em tracking, UPPERCASE): Eyebrows, buttons, nav, metadata. Montserrat only.

### Named Rules
**The One Serif Voice Rule.** Cormorant Garamond never appears below 1.25rem and never in UI controls. If it's clickable and small, it's Montserrat; if it's reading copy, it's Lato.

**The Diacritics Rule.** Every loaded weight includes latin-ext. Spanish is a first language here; "Día de Muertos" must render perfectly in every weight used.

## 4. Elevation

Flat by default. Depth comes from photography, scrims, and tonal layering of the linen surface scale, not from shadows. Shadows exist in exactly two roles: floating UI that sits above photography (booking bar, chatbot panel: `0 25px 50px -12px rgba(0,0,0,0.25)`), and the glass treatment (`backdrop-filter: blur(20–24px)` with translucent white or black fill) for panels overlaying images.

### Named Rules
**The Glass-on-Photo Rule.** Glassmorphism is permitted only on top of photography (hero overlays, availability bar over a courtyard shot). Glass on a flat linen background is prohibited.

## 5. Components

### Buttons
- **Shape:** Square-cornered or gently rounded (0 or 8px), pill shapes only for floating action buttons.
- **Primary (dark contexts):** Espresso fill, white Montserrat caps 11px/0.2em, 44px height, hover shifts to terracotta.
- **Sage (booking flows):** Sage fill, white label caps, generous padding (20px 48px), hover to terracotta.
- **Text CTA:** Espresso or white label caps with `.cta-underline` (hairline grows from center on hover). The quiet-luxury signature.
- **Hover / Focus:** Color shifts at 300–400ms ease; `:focus-visible` gets a 2px espresso outline offset 2px.

### Cards / Containers
- **Corner Style:** 12px (rounded-xl) for image cards, 8px for inputs and small surfaces.
- **Background:** Surface-container family (#F5F0EA to #E0D7CE) or photography; never nested cards.
- **Shadow Strategy:** None at rest (see Elevation). Hover may lift imagery via subtle scale (1.02–1.05 over 700ms), not shadow.
- **Border:** 1px outline-variant where separation is needed.
- **Internal Padding:** 32–48px desktop, 24px mobile.

### Inputs / Fields
- **Style:** The `.booking-input` pattern: transparent background, no box border, 1px bottom border in outline-variant, Lato 14px.
- **Focus:** Bottom border darkens to espresso. No glow, no ring.

### Navigation
- **Style:** Montserrat caps 11px/0.2em over transparent-to-glass header; `.nav-link-underline` center-grow hairline on hover; active page carries the underline persistently.
- **Mobile:** Full-screen overlay menu on espresso, serif display links.

### Signature Component: FullBleedHero
Every page opens with a full-viewport photograph, vignette scrim for text contrast, serif display headline with `.hero-fade-up` (1s ease-out), tracked-out eyebrow label, and a slow 1.8s image reveal from dark. This is the brand handshake; never replace it with a split hero on top-level pages.

## 6. Do's and Don'ts

### Do:
- **Do** lead every page with photography and let UI recede.
- **Do** use hairline 1px rules and whitespace as the primary structure.
- **Do** keep motion slow and exponential: fades, 600–1800ms, ease-out; respect `prefers-reduced-motion`.
- **Do** maintain EN/ES dictionary key parity (797 keys each) on every copy change.
- **Do** keep touch targets at 44px minimum; the mobile guest is on a mid-range Android.

### Don't:
- **Don't** build SaaS landing-page patterns: feature grids, hero metrics, gradient CTAs, identical icon-card grids.
- **Don't** import OTA booking-site urgency: countdown timers, "Only 2 rooms left," dense comparison tables.
- **Don't** use purple gradients, neon accents, gradient text, or Inter-everything minimalism.
- **Don't** nest cards in cards, or use border-left/right stripes thicker than 1px as accents.
- **Don't** use pure #000 or #FFF on surfaces (The Plaster Rule).
- **Don't** use Ken Burns zooms, word-by-word text reveals, bounce/elastic easing, or custom cursors.
- **Don't** write corporate hospitality copy ("world-class amenities," "nestled in the heart of").
