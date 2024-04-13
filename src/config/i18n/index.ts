import i18nInstance, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from './en.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
};

void use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources,
});

export { i18nInstance as i18n };
