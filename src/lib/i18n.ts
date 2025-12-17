import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import it from "./locales/it.json";
import fr from "./locales/fr.json";

const resources = {
  en: { translation: en },
  it: { translation: it },
  fr: { translation: fr },
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: "fr",
      fallbackLng: "fr",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      returnObjects: true,
      react: {
        useSuspense: false,
      },
      // Ensure translations are loaded
      load: "languageOnly",
      // Don't return key if translation is missing (for debugging)
      returnEmptyString: false,
      returnNull: false,
    });
}

export default i18n;

