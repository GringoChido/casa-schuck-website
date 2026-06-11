/**
 * Cloudbeds Deep Link Generator
 *
 * Constructs reservation URLs for the Cloudbeds booking engine.
 * Until the client provides NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID, every booking
 * CTA degrades to a WhatsApp inquiry via buildBookingUrl().
 */

const CLOUDBEDS_BASE = 'https://hotels.cloudbeds.com/reservation';
const PROPERTY_ID_PLACEHOLDER = 'PROPERTY_ID_PLACEHOLDER';
const DEFAULT_WHATSAPP_NUMBER = '5214151806060';

export type BookingPlacement =
  | 'hero'
  | 'availability_bar'
  | 'mobile_bar'
  | 'suite_card'
  | 'package_card';

interface DeepLinkParams {
  checkin?: string;   // YYYY-MM-DD
  checkout?: string;  // YYYY-MM-DD
  roomTypeId?: string;
  adults?: number;
  children?: number;
  currency?: string;
  language?: string;
  placement?: BookingPlacement;
}

export function getPropertyId(): string {
  return process.env.NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID || PROPERTY_ID_PLACEHOLDER;
}

/** True once the client's real Cloudbeds property ID is configured. */
export function isBookingEngineLive(): boolean {
  const id = process.env.NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID;
  return Boolean(id && id.trim() && id !== PROPERTY_ID_PLACEHOLDER);
}

export function buildDeepLink(params: DeepLinkParams = {}): string {
  const propertyId = getPropertyId();
  const url = new URL(`${CLOUDBEDS_BASE}/${propertyId}`);

  if (params.checkin) url.searchParams.set('checkin', params.checkin);
  if (params.checkout) url.searchParams.set('checkout', params.checkout);
  if (params.adults) url.searchParams.set('adults', String(params.adults));
  if (params.children) url.searchParams.set('children', String(params.children));
  if (params.currency) url.searchParams.set('currency', params.currency);
  if (params.language) url.searchParams.set('language', params.language);

  if (params.placement) {
    url.searchParams.set('utm_source', 'website');
    url.searchParams.set('utm_medium', params.placement);
    url.searchParams.set('utm_campaign', 'direct_booking');
  }

  let href = url.toString();

  if (params.roomTypeId) {
    href += `#room_type=${params.roomTypeId}`;
  }

  return href;
}

/** WhatsApp deeplink, optionally with a prefilled message. */
export function buildWhatsAppLink(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * The one entry point booking CTAs should use: returns the Cloudbeds deep
 * link when the engine is configured, otherwise a WhatsApp inquiry so the
 * site is fully bookable before the property ID arrives.
 */
export function buildBookingUrl(
  params: DeepLinkParams & { whatsappMessage?: string } = {}
): string {
  if (isBookingEngineLive()) {
    return buildDeepLink(params);
  }
  return buildWhatsAppLink(params.whatsappMessage);
}

/**
 * Format a date as YYYY-MM-DD for Cloudbeds
 */
export function formatDateForCloudbeds(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Get default check-in (today) and check-out (tomorrow) dates
 */
export function getDefaultDates(): { checkin: string; checkout: string } {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return {
    checkin: formatDateForCloudbeds(today),
    checkout: formatDateForCloudbeds(tomorrow),
  };
}
