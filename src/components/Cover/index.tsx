"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./Cover.module.scss";
import Spline from "@splinetool/react-spline";

const Cover = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style.coverWrapper}>
        {isMobile ? (
          <div className={style.cover}></div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
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
          Unlock the Power of Technology
        </motion.h1>

        <motion.h1
          className={style.sub_intro}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Revolutionizing E-Commerce with Cutting-Edge Technology
        </motion.h1>
      </div>
    </>
  );
};

export default Cover;
