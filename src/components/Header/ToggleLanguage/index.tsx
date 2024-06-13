import React from "react";
import { useTranslation } from "react-i18next";
import { GE } from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/react/3x2";

import style from "./ToggleLanguage.module.scss";
import "../../../i18n";
import Icon from "../../Icon";

interface Props {
  text?: string;
}

const ToggleLanguage = ({ text }: Props) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className={style.container}>
      {text && <p onClick={toggleLanguage}>{text} </p>}
      <Icon
        theme={undefined}
        customIcon={
          i18n.language === "en" ? (
            <GE className={style.flag} />
          ) : (
            <US className={style.flag} />
          )
        }
        onClick={() => {
          !text && toggleLanguage();
        }}
      />
    </div>
  );
};

export default ToggleLanguage;
