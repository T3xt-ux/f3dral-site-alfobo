
import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

// Create i18n instance
const i18n = new I18n({
  en,
  fr,
});

// Set the locale once at the beginning of your app
const deviceLanguage = getLocales()[0]?.languageCode || 'en';
i18n.locale = deviceLanguage;

// Enable fallback to English if translation is missing
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

// Export translation function for convenience
export const t = (key: string, options?: any) => i18n.t(key, options);

export default i18n;
