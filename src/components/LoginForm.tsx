"use client";

import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";
import ThemeToggle from "./ToggleTheme";
import LoginAnimation from "./LoginAnimation";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const { t } = useTranslation();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="mx-3 ">
      <div className="flex mb-7 justify-center gap-3">
        <ToggleLanguage />
        <ThemeToggle />
      </div>
      <div className="bg-white dark:bg-darkGray rounded-3xl max-w-md px-5 py-5 m-auto shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        {showAnimation ? (
          <LoginAnimation />
        ) : (
          <div className="flex items-center justify-center height bg-gray-300 rounded dark:bg-gray-700 animate-pulse">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
            </svg>
          </div>
        )}

        <form action="/api" method="POST">
          <div>
            <p className="mt-5 text-xs text-center font-medium text-slate-400 px-8 hover:dark:text-slate-50 hover:text-slate-900 hover:cursor-pointer">
              {t("loginText")}
            </p>

            <div className="relative w-full max-w-xs h-10 mb-4 mt-10 mx-auto group">
              <input
                type="text"
                id="username"
                required
                className="block w-full h-[40px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs peer outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                maxLength={100}
                name="username"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
              />
              <label
                htmlFor="username"
                className="transform transition-all duration-300 ease-in-out absolute top-0 left-0 h-full flex items-center pl-2 text-xs text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-valid:text-xs peer-focus:h-1/2 peer-valid:h-1/2 peer-focus:-translate-y-full peer-valid:-translate-y-full peer-focus:pl-0 peer-valid:pl-0"
              >
                {t("name")}
              </label>
            </div>

            <div className="relative w-full max-w-xs h-10 mb-4 mt-6 mx-auto group">
              <input
                type="password"
                id="password"
                required
                className="block w-full h-[40px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs peer outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                maxLength={100}
                name="password"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
              />
              <label
                htmlFor="password"
                className="transform transition-all duration-300 ease-in-out absolute top-0 left-0 h-full flex items-center pl-2 text-xs text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-valid:text-xs peer-focus:h-1/2 peer-valid:h-1/2 peer-focus:-translate-y-full peer-valid:-translate-y-full peer-focus:pl-0 peer-valid:pl-0"
              >
                {t("password")}
              </label>
            </div>
          </div>

          <div className="w-full flex gap-3 pb-3">
            <button
              type="submit"
              className="mx-auto rounded-lg relative flex h-[40px] w-[320px] items-center justify-center overflow-hidden  bg-hoverDarkBlue text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-900 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full"
            >
              <span className="relative z-10">{t("login")}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
