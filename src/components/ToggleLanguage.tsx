import React from "react";
import { useTranslation } from "react-i18next";
import englishIcon from "../../public/icons8-english-48.png";
import georgianIcon from "../../public/icons8-georgia-circular-48.png";
import "../i18n";
import Image from "next/image";

const ToggleLanguage = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <>
      <p>{t("language")}</p>
      <button onClick={toggleLanguage}>
        {i18n.language === "en" ? (
          <Image src={englishIcon} width={30} height={30} alt="english flag" />
        ) : (
          <Image
            src={georgianIcon}
            width={30}
            height={30}
            alt="georgian flag"
          />
        )}
      </button>
    </>
  );
};

export default ToggleLanguage;
