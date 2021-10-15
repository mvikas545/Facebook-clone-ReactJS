import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../../common/components/Button";
import CardContent from "../../../common/components/CardContent";
import Card from "../../../common/components/Card";
import Input from "../../../common/components/Input";
import FacebookIcon from "../../../icons/FacebookIcon";
import Footer from "../footer";
import styles from "./styles.module.css";
function Login() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <FacebookIcon width="240" height="85" />
          </Link>
        </div>
        <div className={styles.loginForm}>
          <Card width={396}>
            {/* <CardContent> */}
            <div className={styles.content}>
              <div className={styles.title}>
                <p>Log in to Facebook</p>
              </div>
              <Input
                placeholder=" Email address or phone number"
                height="52"
                style={{ marginTop: 6, marginBottom: 6 }}
              />
              <Input
                placeholder="Password"
                height="52"
                style={{ marginTop: 6, marginBottom: 6 }}
              />
              {/* <div> */}
              <Button
                value="Log In"
                type="primary"
                style={{ marginTop: 6, marginBottom: 6 }}
                height="48"
                width="100%"
              />
              <div className={styles.links}>
                <div className={styles.link}>
                  <NavLink to="/forgot-password">Forgotten account?</NavLink>
                </div>
                <div className={styles.link}>
                  <NavLink to="/sign-up">Sign up for Facebook</NavLink>
                </div>
              </div>
              {/* </CardContent> */}
            </div>
          </Card>
        </div>
      </div>
      ;
      <Footer />
    </Fragment>
  );
}

export default Login;
