import { motion } from "framer-motion";
import React from "react";
import { staggerContainer, fadeIn } from "../../../utils/motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative !z-20">
      <div className="gradient-01 z-0" />
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center"
        >
          <span className="font-extrabold dark:text-white">{t("welcome")}</span>{" "}
          <span className="dark:text-white"> {t("welcome_2")} </span>
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.png"
          alt="arrow down"
          className="w-[50px] h-[68px] object-contain mt-[28px] "
        />
      </motion.div>
    </section>
  );
};

export default About;
