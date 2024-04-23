import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import geTranslation from "./locales/ge.json";

const resources = {
  en: { translation: enTranslation },
  ge: { translation: geTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ge",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
