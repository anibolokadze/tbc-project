"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  planetVariants,
  fadeIn,
} from "../../../utils/motion";
import { TitleText } from "./CustomTexts";
import { useTranslation } from "react-i18next";
import PostInfo from "./PostInfo";
import Image from "next/image";
import planet from "../../../public/whats-new.png";

const WhatsNew = () => {
  const { t } = useTranslation();
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 overflow-x-hidden overflow-y-hidden">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src={planet}
            width={1000}
            height={1000}
            alt="planet"
            className="w-[80%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText title={<>{t("whats_new")}</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            <PostInfo />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
