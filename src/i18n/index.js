import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import enTranslation from './locales/en';
import roTranslation from './locales/ro';

// Initialize i18n
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Set up i18next
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    resources: {
      en: {
        translation: enTranslation
      },
      ro: {
        translation: roTranslation
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 