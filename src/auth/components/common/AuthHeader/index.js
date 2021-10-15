import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import FacebookIcon from "../../../../icons/FacebookIcon";
import Input from "../../../../common/components/Input";
import { Link, useHistory } from "react-router-dom";
import Button from "../../../../common/components/Button";
import useDimension from "../../../../common/hooks/useDimension";

function AuthHeader() {
  const { width } = useDimension();
  const [hide, setHide] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (width < 950) setHide(true);
    else setHide(false);
  }, [width, setHide]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.headerForm}>
          {!hide && (
            <div className={styles.inputBox}>
              <Input placeholder="Email or phone" height="40" width="178" />
            </div>
          )}
          {!hide && (
            <div className={styles.inputBox}>
              <Input placeholder="Password" height="40" width="178" />
            </div>
          )}
          <div className={styles.btn}>
            <Button value="Log In" onClick={() => history.replace("/login")} />
          </div>
        </div>
        {!hide && (
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password">Forgotten account?</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthHeader;
