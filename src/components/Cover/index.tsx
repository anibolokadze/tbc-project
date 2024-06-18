import { motion } from "framer-motion";
import style from "./Cover.module.scss";
const cover = () => {
  return (
    <>
      <div className={style.coverWrapper}>
        <div className={style.cover}></div>

        <motion.h1
          className={style.intro}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock the Power of Technology
        </motion.h1>

        <motion.h1
          className={style.sub_intro}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Revolutionizing E-Commerce with Cutting-Edge Technology
        </motion.h1>
      </div>
    </>
  );
};

export default cover;
