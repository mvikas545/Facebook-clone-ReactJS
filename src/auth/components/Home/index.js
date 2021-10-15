import React, { Fragment } from "react";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import Logo from "../../../icons/Logo";
import Footer from "../footer";

export default function index() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <Logo />
            <div className={styles.heading}>
              Facebook helps you connect and share with the people in your life.
            </div>
          </div>
          <div className={styles.formContainer}>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </Fragment>
  );
}
