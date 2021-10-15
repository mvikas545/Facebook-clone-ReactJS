import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";
import ReactDOM from "react-dom";
import styles from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import Modal from "../../../common/components/Modal";
import SignupForm from "../Signup/SignupForm";

const LoginForm = (props) => {
  const { history } = props;
  const createNewAccountHandler = () => {
    // props.history.push("/sign-up");
    setIsModalVisible(true);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Fragment>
      {isModalVisible &&
        ReactDOM.createPortal(
          <Modal
            dim={{ top: 0, left: 0, width: "100%", height: "100%" }}
            style={{
              backgroundColor: "rgba(251, 255, 254, 0.7)",
              zIndex: 10,
              backdrop: { zIndex: 10 },
            }}
            setIsOpenList={setIsModalVisible}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                height: 700,
                paddingTop: 60,
                // height: "100vh",
                // marginTop: 20,
              }}
            >
              <SignupForm
                setIsModalVisible={setIsModalVisible}
                showCloseOption={true}
              />
            </div>
          </Modal>,
          document.getElementById("modal-1")
        )}
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <form className={styles.loginForm}>
            <input type="text" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
          </form>
          <div className={styles.forgotPassword}>
            <NavLink to="/forgot-password">Forgotten Password?</NavLink>
          </div>
          <div className={styles.hrLine} />
          <div className={styles.createNewAccount}>
            <button onClick={createNewAccountHandler}>
              Create New Account
            </button>
          </div>
        </div>
      </div>
      <div className={styles.createPage}>
        <a href="">Create a Page </a>
        <p> &nbsp;for a celebrity, band or buisness. </p>
      </div>
    </Fragment>
  );
};

export default withRouter(LoginForm);
