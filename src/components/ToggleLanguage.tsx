import React from "react";
import { useTranslation } from "react-i18next";
import englishIcon from "../../public/icons8-english-48.png";
import georgianIcon from "../../public/icons8-georgia-circular-48.png";
import "../i18n";
import Image from "next/image";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleLanguage}
        className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {i18n.language === "en" ? (
          <Image
            src={georgianIcon}
            width={25}
            height={25}
            alt="georgian flag"
          />
        ) : (
          <Image src={englishIcon} width={25} height={25} alt="english flag" />
        )}
      </button>
    </div>
  );
};

export default ToggleLanguage;
