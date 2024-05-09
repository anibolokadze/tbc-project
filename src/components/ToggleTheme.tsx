import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import lightModeImage from "../../public/icons8-sun-30.png";
import darkModeImage from "../../public/icons8-moon-30.png";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div>
        <Image
          src={theme === "light" ? darkModeImage : lightModeImage}
          alt={theme === "light" ? "Dark Mode" : "Light Mode"}
          width={30}
          height={30}
        />
      </div>
    </button>
  );
}
