import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="email">{t("subscribe")}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("enterEmail")}
          autoComplete="off"
        />
        <button type="submit">{t("save")}</button>
      </form>

      <nav>
        <ul className="flex justify-around">
          <li className="footer-link">
            <Link href="/terms">{t("terms")}</Link>
          </li>
          <li className="footer-link">
            <Link href="/privacy">{t("privacy")}</Link>
          </li>
          <li className="footer-link">
            <Link href="/posts">{t("posts")}</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
