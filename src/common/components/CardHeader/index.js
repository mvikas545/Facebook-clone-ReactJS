import React from "react";
import theme from "../../styles/theme";
import styles from "./styles.module.css";
function CardHeader({ title, subtitle, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {children && children}
      </div>
      <div
        className={styles.bottomBorder}
        style={{ borderColor: theme.colors.GRAY_BG }}
      />
    </div>
  );
}

export default CardHeader;
