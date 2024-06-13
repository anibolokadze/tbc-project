"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Button.module.scss";

type TProps = {
  text: string;
  onClick?: () => void;
  icon: any;
};

export default function Button({ text, onClick, icon }: TProps) {
  return (
    <button onClick={onClick} className={style.button}>
      {icon && <FontAwesomeIcon icon={icon} />} {text}
    </button>
  );
}
