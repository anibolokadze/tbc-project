"use client";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";
import ThemeToggle from "./ToggleTheme";

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <ThemeToggle />
        <ToggleLanguage />
      </div>
      <form action="/api" method="POST">
        <input
          maxLength={100}
          name="username"
          placeholder={t("name")}
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          spellCheck="false"
          required
        />

        <input
          maxLength={100}
          name="password"
          placeholder={t("password")}
          type="password"
          autoCapitalize="none"
          autoComplete="off"
          spellCheck="false"
          required
        />

        <div className="w-full flex gap-3">
          <button type="submit">{t("login")}</button>
          <div>
            <p>kminchelle</p>
            <p>0lelplR</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
