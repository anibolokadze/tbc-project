import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.scss";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}>Reach Us</h2>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} /> 555 54 50 03
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          ani@gmail.com
        </p>
        <p className={style.columnElement}>
          <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
          Tbilisi Georgia
        </p>
      </div>

      <div className={style.footerColumn}>
        <h2 className={style.columnTitle}>Company</h2>

        <Link href="/contact" className={style.columnElement}>
          Contact
        </Link>
        <Link href="/blogs" className={style.columnElement}>
          Blogs
        </Link>
      </div>
    </div>
  );
}
