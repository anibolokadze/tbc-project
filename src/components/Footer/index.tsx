import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.scss";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}>Reach Us</h2>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} /> 557 62 02 01
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          lasha@glitch.ge
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
          Guramishvili ave 30. Tbilisi Georgia
        </p>
      </div>

      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}>Company</h2>
        <p className={style.columnElement}>About</p>
        <p className={style.columnElement}>Contact</p>
        <p className={style.columnElement}>Blogs</p>
      </div>
    </div>
  );
}
