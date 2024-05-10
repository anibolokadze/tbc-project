"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-colored.svg";
import profile from "../../public/profile.png";
import LogOutButton from "./LogOutButton";
import ThemeToggle from "./ToggleTheme";
import { useTranslation } from "react-i18next";
import "../i18n";
import ToggleLanguage from "./ToggleLanguage";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white dark:bg-slate-950 border-b border-gray-200  dark:border-gray-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <Link href="/" className="flex">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="logo"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              type="button"
              className="w-10 h-10 flex rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-white"
              id="user-menu-button"
              aria-expanded={isUserDropdownOpen ? "true" : "false"}
              onClick={toggleUserDropdown}
            >
              <Image src={profile} width={50} height={50} alt="profile" />
            </button>

            <div
              className={`z-50 ${
                isUserDropdownOpen ? "" : "hidden"
              } border-t border-gray-300 dark:border-gray-600 
              shadow-lg dark:shadow-[0px_3px_7px_3px_#c4c4c421] absolute top-7 right-2 sm:-right-2 mt-5 list-none bg-white divide-y divide-gray-200 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <ul className="px-4 py-3">
                <li className="transition-colors duration-300 block sm:text-sm lg:text-lg text-gray-900 dark:text-white">
                  Ani Bolokadze
                </li>
                <li className=" transition-colors duration-300block sm:text-sm lg:text-base  text-gray-500 truncate dark:text-gray-400">
                  anibolokadze@gmail.com
                </li>
              </ul>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    href="/profile"
                    className="transition-colors duration-300 block px-4 py-2  lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {t("profile")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 block px-4 py-2 lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {t("settings")}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 block px-4 py-2 lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <LogOutButton />
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isBurgerMenuOpen ? "true" : "false"}
              onClick={toggleBurgerMenu}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isBurgerMenuOpen ? "" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-900 md:dark:bg-slate-950 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 block py-2 px-3 lg:text-lg text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" transition-colors duration-300 block py-2 px-3 lg:text-lg text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 block py-2 px-3 lg:text-lg text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto py-2 px-4">
        <ThemeToggle />
        <ToggleLanguage />
      </div>
    </header>
  );
};

export default Header;