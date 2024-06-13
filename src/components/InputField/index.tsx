import React, { ChangeEvent } from "react";
import styles from "./InputField.module.scss";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<Props> = ({
  onChange,
  placeholder = "",
  type = "text",
}) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
