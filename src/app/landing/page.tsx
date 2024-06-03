"use client";
import React from "react";
import ToggleLanguage from "../../components/ToggleLanguage";
import ToggleTheme from "../../components/ToggleTheme";
import Image from "next/image";
import login from "../../../public/login.png";
import Explore from "../../components/Lading/Explore";
import GetStarted from "../../components/Lading/GetStarted";
import WhatsNew from "../../components/Lading/WhatsNew";
import About from "../../components/Lading/About";
import Hero from "../../components/Lading/Hero";
import LandingFooter from "../../components/Lading/LandingFooter";

const landing = () => {
  return (
    <>
      <div className="pl-10 pt-5 flex gap-2">
        <ToggleLanguage />
        <ToggleTheme />
        <a
          href="/api/auth/login"
          className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-500 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <Image src={login} width={30} height={30} alt="login icon" />
        </a>
      </div>
      <Hero />
      <div className="relative">
        <About />
        <Explore />
        <GetStarted />
        <WhatsNew />

        <LandingFooter />
      </div>
    </>
  );
};

export default landing;
