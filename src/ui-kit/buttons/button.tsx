import styles from "./button.module.scss";
import React from "react";
type TProps = {
  onClick: () => void;
  size?: "large" | "medium" | "small";
  color?: "white" | "black" | "blue";
  variant?: "primary" | "secondary";
  className?: CSSModuleClasses;
  text: string;
};

function Button({
  variant = "primary",
  color = "white",
  size = "medium",
  text = "Кнопка",
  className,
  onClick,
}: TProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        styles[color]
      }
      ${className && className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
