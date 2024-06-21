import style from "./Header.module.scss";

import Sidebar from "./SideBar";
import { motion } from "framer-motion";
import {
  faBars,
  faReceipt,
  faShoppingCart,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import ToggleLanguage from "./ToggleLanguage";
import Icon from "../Icon";
import { useTheme } from "next-themes";
import { useCartContext } from "../../context/CartContext";

export interface HeaderButton {
  text: string;
  link?: string;
  onClick?: () => void;
}

const sidebarButtonVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const { itemCount } = useCartContext();

  const toggleSidebar = (value: boolean) => {
    if (value === false) {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
    }
    setSidebarOpen(value);
  };

  const headerButtons: HeaderButton[] = [
    { text: "cart", link: "/cart" },
    { text: "profile", link: "/profile" },
    // { text: "swap theme", onClick: () => {} },
  ];

  return (
    <nav
      className={theme === "dark" ? style.containerDark : style.containerLight}
      // className="dark:bg-black bg-red-600"
    >
      <div className={style.desktopMenu}>
        <div className={style.desktopButtons}>
          <Link href="/">
            <h1 className={style.siteLogo}> Tech Madness</h1>
          </Link>
        </div>

        <div className={style.navRightContainer}>
          <Link href="/cart">
            <div className={style.iconContainer}>
              <Icon icon={faShoppingCart} theme={theme} />
              {itemCount > 0 && (
                <div className={style.cartBadge}>{itemCount}</div>
              )}
            </div>
          </Link>

          <Link href="/orders">
            <div className={style.iconContainer}>
              <Icon icon={faReceipt} theme={theme} />
            </div>
          </Link>

          <Link href="/profile">
            <Icon icon={faUser} theme={theme} />
          </Link>
          <ToggleTheme />

          <ToggleLanguage />
        </div>

        <motion.button
          className={style.sidebarOpenWrapper}
          onClick={() => {
            toggleSidebar(!sidebarOpen);
          }}
          variants={sidebarButtonVariants}
          animate={sidebarOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon
            className={
              theme === "white" && sidebarOpen
                ? style.sidebarIconLight
                : style.sidebarIcon
            }
            icon={sidebarOpen ? faX : faBars}
          />
        </motion.button>
      </div>

      <Sidebar
        buttons={headerButtons}
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />
    </nav>
  );
}
