import type { Locale } from '@/lib/i18n';

export const roomLevelLabels: Record<Locale, Record<number, string>> = {
  en: { 0: 'Main Level', 1: 'First Level', 2: 'Second Level', 3: 'Third Level' },
  es: { 0: 'Nivel Principal', 1: 'Primer Nivel', 2: 'Segundo Nivel', 3: 'Tercer Nivel' },
};

export function getRoomLevelLabel(floor: number, locale: Locale): string {
  return roomLevelLabels[locale][floor] ?? roomLevelLabels.en[floor] ?? String(floor);
}
