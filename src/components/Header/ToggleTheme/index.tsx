import React from "react";
import { useTheme } from "next-themes";
import Icon from "../../Icon";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface Props {
  text?: string;
}

const ToggleTheme = ({ text }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center ">
      {text && (
        <p
          onClick={() => {
            setTheme(theme === "white" ? "dark" : "white");
          }}
        >
          {text}
        </p>
      )}
      <Icon
        theme={theme}
        icon={theme === "dark" ? faMoon : faSun}
        onClick={() => {
          !text && setTheme(theme === "white" ? "dark" : "white");
        }}
      />
    </div>
  );
};

export default ToggleTheme;
