"use client";

import logo from "../../public/logo.png";
import profile from "../../public/user.svg";
import MenuSvg from "../../public/svg/MenuSvg";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenu } from "./design/Header";
import Button from "./ButtonOld";
import Image from "next/image";
import ThemeToggle from "./ToggleThemeOld";
import Link from "next/link";
import ToggleLanguage from "./ToggleThemeOld";
import { useTranslation } from "react-i18next";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogOut from "./LogOut";
import Cart from "./Cart";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useUser();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        openNavigation
          ? "bg-white dark:bg-[#121212]"
          : "bg-white dark:bg-[#121212] "
      }`}
    >
      <div className="flex items-center px-10 lg:px-7.5 xl:px-20 max-lg:py-2 lg:px-20">
        <Link href="/" className="block xl:mr-8">
          <Image src={logo} width={60} height={60} alt="logo" />
        </Link>

        <nav
          className={`${
            openNavigation
              ? "flex flex-col items-center dark:bg-[#121212] bg-white"
              : "hidden"
          }  fixed w-full top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:m-auto  lg:flex-row ">
            <ul
              className={`gap-10 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              <div className="flex flex-col gap-y-[30px] items-center pt-[100px] lg:pt-0 lg:flex-row">
                <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out p-2 rounded">
                  <Link href="/smartphones"> {t("smartphones")}</Link>
                </li>

                <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out p-2 rounded">
                  <Link href="/computers"> {t("computers")}</Link>
                </li>
                <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out p-2 rounded">
                  <Link href="/brands"> {t("brands")}</Link>
                </li>
              </div>
            </ul>
          </div>

          <Cart
            // className=" hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out p-2 rounded"
            selectedNumber={4}
          />

          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              type="button"
              className="w-10 h-10 flex rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-100 p-1"
              id="user-menu-button"
              aria-expanded={isUserDropdownOpen ? "true" : "false"}
              onClick={toggleUserDropdown}
            >
              <Image src={profile} width={50} height={50} alt="profile" />
            </button>

            <div
              ref={dropdownRef}
              className={`z-50 ${
                isUserDropdownOpen ? "" : "hidden"
              } border-t border-gray-300 dark:border-gray-600 dark:shadow-[0px_3px_7px_3px_#c4c4c421] absolute top-7 w-[200px] -left-20 lg:top-10 lg:-left-[150px] mt-5 list-none bg-white divide-y divide-gray-200 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <ul className="px-4 py-3">
                <li className="font-medium transition-colors duration-300 block sm:text-sm lg:text-lg text-gray-900 dark:text-white">
                  {user?.nickname}
                </li>
                <li className="transition-colors duration-300 block sm:text-sm lg:text-base  text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </li>
              </ul>

              <ul className="py-2" aria-labelledby="user-menu-button">
                <Link
                  href="/profile"
                  className="px-4 py-2  lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  {t("profile")}
                </Link>

                <li className="px-4 py-2  lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-500">
                  <LogOut /> {t("logout")}
                </li>
                <li className="gap-x-1 px-4 py-2  lg:text-base text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-400">
                  <ThemeToggle />
                  <ToggleLanguage />
                </li>
              </ul>
            </div>
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden bg-black"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
