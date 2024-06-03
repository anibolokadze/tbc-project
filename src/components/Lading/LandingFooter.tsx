"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../../../utils/motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import headset from "../../../public/headset.svg";

const LandingFooter = () => {
  const { t } = useTranslation();
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="gradient-02 z-0" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] dark:text-white">
            Tech Madness
          </h4>
        </div>
        <div className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] max-w-[400px]">
          <Image src={headset} alt="headset" width={24} height={24} />

          <a
            href="/api/auth/login"
            className="font-normal text-[16px] text-white"
          >
            {t("enter")}
          </a>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-gray-900 dark:bg-white  opacity-10" />
        </div>
      </div>
    </motion.footer>
  );
};

export default LandingFooter;
