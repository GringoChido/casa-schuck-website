import type { Locale } from './i18n';
import type en from '../dictionaries/en.json';

export type Dictionary = typeof en;

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((m) => m.default),
  es: () => import('../dictionaries/es.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
