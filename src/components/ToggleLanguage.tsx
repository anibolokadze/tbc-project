import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };
  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "ქართული" : "Eng"}
    </button>
  );
};

export default ToggleLanguage;
