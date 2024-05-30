"use client";

import LoginButton from "../../components/login/LoginButton";
import LoginAnimation from "../../components/login/LoginAnimation";
import ToggleLanguage from "../../components/ToggleLanguage";
import ToggleTheme from "../../components/ToggleTheme";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <section className="dark:bg-darkMode px-5 overflow-hidden max-w-screen-md mx-auto  ">
      <section className="flex justify-end py-2 px-2 gap-1">
        <ToggleTheme />
        <ToggleLanguage />
      </section>

      <section>
        <h1 className="mt-10 text-3xl font-bold text-center bg-gradient-to-r from-red-400 via-violet-600 to-purple-700 bg-clip-text text-transparent">
          {t("header1")}
        </h1>
        <h1 className="text-lg mt-8 text-center bg-gradient-to-r from-red-400 via-violet-600 to-purple-700 bg-clip-text text-transparent">
          {t("header2")}
        </h1>

        <section>
          <LoginAnimation />
          <section className=" dark:bg-darkMode">
            <LoginButton />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Login;
