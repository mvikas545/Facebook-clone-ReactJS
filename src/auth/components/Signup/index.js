import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../../../icons/FacebookIcon";
import Footer from "../footer";
import SignupForm from "./SignupForm";
import styles from "./styles.module.css";

function Signup() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <FacebookIcon width="240" height="85" />
          </Link>
        </div>
        <SignupForm />
      </div>

      <Footer />
    </Fragment>
  );
}

export default Signup;
