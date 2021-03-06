import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN.json";
import translationFR from "./locales/fr/translationFR.json";

i18n

  .use(initReactI18next)

  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    debug: true,
    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
