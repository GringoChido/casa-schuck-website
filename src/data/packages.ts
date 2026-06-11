/**
 * Seasonal package availability.
 *
 * All three default to unavailable until the client confirms real
 * itineraries, dates, and pricing (PROJECT-REVIEW-JUNE-2026.md §4).
 * Unavailable packages render a "returning for the season" state wired to
 * the newsletter instead of fake pricing. Order matches
 * dict.packagesPage.packages in both dictionaries.
 */

export interface SeasonalPackageMeta {
  id: string;
  available: boolean;
}

export const seasonalPackages: SeasonalPackageMeta[] = [
  { id: 'dia-de-muertos', available: false },
  { id: 'holiday-escape', available: false },
  { id: 'spring-renewal', available: false },
];

export function isPackageAvailable(id: string): boolean {
  return seasonalPackages.find((pkg) => pkg.id === id)?.available ?? false;
}
