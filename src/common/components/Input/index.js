import React from "react";
import styles from "./styles.module.css";
function Input({ placeholder, height, width, style }) {
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          paddingTop: (height - 22) / 2,
          paddingBottom: (height - 22) / 2,
          width: width,
          ...style,
        }}
      />
    </div>
  );
}

export default Input;
