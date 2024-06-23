import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.scss";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={style.footer}>
      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}>{t("reach")}</h2>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} /> 555 54 50 03
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          ani@gmail.com
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
          {t("place")}
        </p>
      </div>

      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}> {t("company")}</h2>

        <Link href="/contact" className={style.columnElement}>
          {t("contact")}
        </Link>
        <Link href="/blogs" className={style.columnElement}>
          {t("blogs")}
        </Link>
      </div>
    </div>
  );
}
