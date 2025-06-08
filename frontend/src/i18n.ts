import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Common translations
      'language': 'Language',
      'english': 'English',
      'russian': 'Russian',
      'azerbaijani': 'Azerbaijani',
      // Add more translations as needed
    }
  },
  ru: {
    translation: {
      // Common translations
      'language': 'Язык',
      'english': 'Английский',
      'russian': 'Русский',
      'azerbaijani': 'Азербайджанский',
      // Add more translations as needed
    }
  },
  az: {
    translation: {
      // Common translations
      'language': 'Dil',
      'english': 'İngiliscə',
      'russian': 'Rusca',
      'azerbaijani': 'Azərbaycan',
      // Add more translations as needed
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 