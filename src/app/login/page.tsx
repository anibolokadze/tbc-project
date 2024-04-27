"use client";

import LoginForm from "../../components/LoginForm";
import ToggleLanguage from "../../components/ToggleLanguage";

import ThemeToggle from "../../components/ToggleTheme";

const page = async () => {
  return (
    <>
      <div>
        <ThemeToggle />
        <ToggleLanguage />
      </div>
      <LoginForm />
    </>
  );
};

export default page;
