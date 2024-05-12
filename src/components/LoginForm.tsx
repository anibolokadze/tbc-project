"use client";

import { useState } from "react";
// import { handleLogin } from "../../scripts/login";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   handleLogin(name, password).then(() => window.location.reload());
      // }}
      action="/api"
      method="POST"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("name")}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t("password")}
      />

      <button type="submit">{t("login")}</button>
    </form>
  );
};

export default LoginForm;
