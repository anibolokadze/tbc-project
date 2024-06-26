"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./Cover.module.scss";
import Spline from "@splinetool/react-spline";
import { useTranslation } from "react-i18next";

const Cover = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1000
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className={style.coverWrapper}>
        {isMobile ? (
          <div className={style.cover}></div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Spline scene="https://prod.spline.design/uQ1GFXGpp-tOienV/scene.splinecode" />
          </motion.div>
        )}

        <motion.h1
          className={style.intro}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {t("title")}
        </motion.h1>

        <motion.h1
          className={style.sub_intro}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {t("sub_title")}
        </motion.h1>
      </div>
    </>
  );
};

export default Cover;
