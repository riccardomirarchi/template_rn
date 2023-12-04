import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/common.json';
import it from './it/common.json';

export const languages = ['it', 'en'];
export const namespaces = ['common'];

const resources = {
  en: {
    common: en,
  },
  it: {
    common: it,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  load: 'languageOnly',
  languages,
  resources,
  ns: namespaces,
  fallbackLng: 'it',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
