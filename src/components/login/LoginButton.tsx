import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import lock from "../../../public/icons8-lock.svg";
import Image from "next/image";

const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <div className="grid place-content-center bg-white dark:bg-darkMode p-4">
      <EncryptButton t={t} />
    </div>
  );
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ t }: any) => {
  const intervalRef = useRef<any>(null);
  const [text, setText] = useState(t("loginText"));

  // Update text when language changes
  useEffect(() => {
    setText(t("loginText"));
  }, [t]);

  // Function to scramble text
  const scramble = () => {
    let pos = 0;
    const TARGET_TEXT = t("loginText");

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char: string, index: number) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble(TARGET_TEXT);
      }
    }, SHUFFLE_TIME);
  };

  // Function to stop text scrambling
  const stopScramble = (TARGET_TEXT: string) => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    // Button with motion effects
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={() => stopScramble("🚀👩🏻‍🚀")}
      className=" group relative overflow-hidden rounded-lg bg-violet-700 px-10 py-2 font-mono font-medium uppercase text-white transition-colors hover:text-white"
    >
      {/* Lock icon and button text */}
      <div className="relative z-10 flex items-center gap-2">
        <Image src={lock} alt="lock icon" width={20} height={20} />
        <a href="/api/auth/login">{text}</a>
      </div>

      {/* Animated gradient background */}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default LoginButton;
