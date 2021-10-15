import React from "react";
import theme from "../../styles/theme";
import styles from "./styles.module.css";
function CardContent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{props.children}</div>
      <div
        className={styles.bottomBorder}
        style={{ borderColor: theme.colors.GRAY_BG }}
      />
    </div>
  );
}

export default CardContent;
