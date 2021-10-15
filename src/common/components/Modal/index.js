import React, { Fragment } from "react";
import styles from "./styles.module.css";
function Modal(props) {
  const { top, left, width, height } = props.dim;

  return (
    <Fragment>
      <div
        className={styles.backdrop}
        onClick={() => props.setIsOpenList((state) => !state)}
        style={props?.style?.backdrop}
      />
      <div
        className={styles.modal}
        style={{ ...props.style, top: top, left, width, height }}
      >
        <div className={styles["modal-content"]}>{props.children}</div>
      </div>
    </Fragment>
  );
}

export default Modal;
