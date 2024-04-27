"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import profile from "../../public/profile.png";
import LogOutButton from "./LogOutButton";
import ThemeToggle from "./ToggleTheme";
import { useTranslation } from "react-i18next";
import "../i18n";
import ToggleLanguage from "./ToggleLanguage";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
          </li>
          <div className="flex gap-x-5 items-center">
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link href="/profile">
                <Image src={profile} width={50} height={50} alt="profile" />
              </Link>
            </li>
            <li>
              <LogOutButton />
            </li>
          </div>
        </ul>
        <ThemeToggle />
        <ToggleLanguage />
      </nav>
    </header>
  );
};

export default Header;
