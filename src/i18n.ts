import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./locales/en.json";
import si from "./locales/si.json";

i18n
  .use(LanguageDetector) // detects browser language, query string, cookies
  .use(initReactI18next) // connects i18next to React
  .init({
    resources: {
      en: { translation: en },
      si: { translation: si },
    },
    fallbackLng: "si", // default language
    supportedLngs: ["en", "si"],

    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie", "localStorage"], // saves user language in cookies + localStorage
      cookieMinutes: 525600, // 1 year
      cookieDomain: window.location.hostname, // sets cookie for your domain
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },
    debug: import.meta.env.MODE === "development" // used for debuging
  });

export default i18n;
