import React from "react";
import styles from "./styles.module.css";
import LanguageItems from "./LanguageItems";
import NavigationItems from "./NavigationItems";

function Footer() {
  return (
    <div className={styles.container}>
      <LanguageItems />
      <div className={styles.hrLine} />
      <NavigationItems />
      <div className={styles.facebook}>
        <p>Facebook &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
