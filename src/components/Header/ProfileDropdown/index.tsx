// components/ProfileDropdown.tsx
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import styles from "./ProfileDropdown.module.scss";
import LogOut from "../../LogOut";
import ToggleTheme from "../../ToggleThemeOld";
import ToggleLanguage from "../ToggleLanguage";

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useUser();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.profileContainer}>
      <button
        className={styles.profileButton}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen ? "true" : "false"}
      >
        <img src="/user.svg" alt="Profile" className={styles.profileIcon} />
        {user?.nickname}
      </button>
      {isDropdownOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>{user?.email}</li>
            <li className={styles.dropdownItem}>
              <Link href="/profile">{t("profile")}</Link>
            </li>
            <li className={styles.dropdownItem}>
              <LogOut />
              {t("logout")}
            </li>
            <li className={styles.dropdownItem}>
              <ToggleTheme />
              <ToggleLanguage />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
