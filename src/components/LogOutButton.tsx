"use client";
import { handleLogout } from "../../scripts/logout";
import { useTranslation } from "react-i18next";

const SignOutButton = () => {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => {
        handleLogout().then(() => window.location.reload());
      }}
    >
      {t("logout")}
    </button>
  );
};

export default SignOutButton;
