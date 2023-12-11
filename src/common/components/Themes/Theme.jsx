import clsx from "clsx";
import React from "react";
import { LuApple } from "react-icons/lu";
import styles from "./Theme.module.css";
import { BsApple } from "react-icons/bs";

function Theme({ fontsize }) {
  const textSizeClassName = clsx(styles.text, {
    [styles.small]: fontsize === "small",
    [styles.medium]: fontsize === "medium",
    [styles.large]: fontsize === "large",
  
  });

  return (
    <div className={styles.textContainer}>
      <BsApple className={styles.icon} />
      <p className={textSizeClassName}>ex.iphones.</p>
    </div>
  );
}

export default Theme;
