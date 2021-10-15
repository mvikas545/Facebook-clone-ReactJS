import React from "react";
import styles from "./styles.module.css";

function Card(props) {
  return (
    <div className={styles.container} style={{ width: props.width }}>
      {props.children}
    </div>
  );
}

export default Card;
