import React, { useState } from "react";
import styles from "./styles.module.css";
import buttonTheme from "../../styles/buttonTheme";

function Button({
  value,
  type = "primary",
  height = "40",
  fontWeight = "600",
  style = {},
  onClick,
  width,
}) {
  const btnColor = buttonTheme.colorMapping[type].bgColor;
  const hoverColor = buttonTheme.colorMapping[type].bgHover;
  const color = buttonTheme.colorMapping[type].color;
  const [buttonColor, setButtonColor] = useState(btnColor);
  return (
    <div className={styles.btn}>
      <button
        onMouseEnter={() => setButtonColor(btnColor)}
        onMouseLeave={() => setButtonColor(hoverColor)}
        onClick={onClick}
        style={{
          backgroundColor: buttonColor,
          color: color,
          height: +height,
          fontWeight: fontWeight,
          width: width,
          ...style,
        }}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
