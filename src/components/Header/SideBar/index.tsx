import style from "./SideBar.module.scss";
import { motion } from "framer-motion";

import Link from "next/link";
import { HeaderButton } from "..";
import ToggleTheme from "../ToggleTheme";
import ToggleLanguage from "../ToggleLanguage";

interface Props {
  buttons: HeaderButton[];
  sidebarOpen: boolean;
  toggleSidebar: (value: boolean) => void;
}

const sidebarVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0, transition: { delay: 0.2 } },
};

export default function Sidebar({
  buttons,
  toggleSidebar,
  sidebarOpen,
}: Props) {
  return (
    <motion.div
      className={style.container}
      variants={sidebarVariants}
      animate={sidebarOpen ? "open" : "closed"}
      initial="closed"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.02,
      }}
    >
      <motion.div
        className={style.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {buttons.map((button, index) => {
          if (button.link) {
            return (
              <Link
                className={style.link}
                key={index}
                href={button.link}
                onClick={() => {
                  toggleSidebar(false);
                }}
              >
                {button.text}
              </Link>
            );
          } else if (button.onClick) {
            return (
              <motion.button
                key={index}
                onClick={() => {
                  button.onClick && button.onClick();
                }}
                className={style.button}
              >
                {button.text}
              </motion.button>
            );
          }
          return null;
        })}
        <div className={style.iconWrapper}>
          <ToggleLanguage text={"Toggle Language"} />
        </div>
        <div className={style.iconWrapper}>
          <ToggleTheme text={"Toggle Theme"} />
        </div>
      </motion.div>
    </motion.div>
  );
}
