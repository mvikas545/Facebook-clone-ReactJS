import React from "react";
import styles from "./styles.module.css";
function CardFooter(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default CardFooter;
