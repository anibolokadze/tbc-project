import React from "react";
import { useTheme } from "next-themes";
import lightMode from "../../public/icons8-sun-30.png";
import darkMode from "../../public/icons8-moon-30.png";
import Image from "next/image";

const ToggleLanguage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {theme === "light" ? (
          <Image src={lightMode} width={25} height={25} alt="sun icon" />
        ) : (
          <Image src={darkMode} width={25} height={25} alt="moon icon" />
        )}
      </button>
    </div>
  );
};

export default ToggleLanguage;
