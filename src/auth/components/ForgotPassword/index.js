import React, { Fragment } from "react";
import CardHeader from "../../../common/components/CardHeader";
import Card from "../../../common/components/Card";
import AuthHeader from "../common/AuthHeader";
import styles from "./styles.module.css";
import CardContent from "../../../common/components/CardContent";
import Input from "../../../common/components/Input";
import CardFooter from "../../../common/components/CardFooter";
import Button from "../../../common/components/Button";
import { useHistory } from "react-router-dom";
import Footer from "../footer";

function ForgotPassword(props) {
  const history = useHistory();
  return (
    <Fragment>
      <div className={styles.container}>
        <AuthHeader />
        <Card width={500}>
          <CardHeader title="Find Your Account" />
          <CardContent className={styles.content}>
            <p>
              Please enter your email address or phone number to search your
              account
            </p>
            <Input placeholder="Email or phone number" height="52" />
          </CardContent>
          <CardFooter>
            <div className={styles.footerBtn}>
              <Button
                value="Cancel"
                height="36"
                type="gray"
                style={{ marginRight: 8 }}
                onClick={() => history.goBack()}
              />
              <Button value="Search" height="36" type="primary" />
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ForgotPassword;
