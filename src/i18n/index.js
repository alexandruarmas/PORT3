import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'en', // force English
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {}
      }
    }
  });

export default i18n; 