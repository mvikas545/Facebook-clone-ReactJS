import React, { Fragment, useState, useEffect } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import Button from "../../../common/components/Button";
import Card from "../../../common/components/Card";
import Input from "../../../common/components/Input";
import { AiOutlineClose } from "react-icons/ai";

import CardHeader from "../../../common/components/CardHeader";
import Dropdown from "../../../common/components/DropDown";
import Radio from "../../../common/components/Radio";
import generateDateList from "../../../utils/generateDateList";
import generateMonthList from "../../../utils/generateMonthList";
import generateYearList from "../../../utils/generateYearList";
import styles from "./styles.module.css";

const customGenderArr = [
  { id: 0, selected: false, title: "She:Wish her happy birthday!" },
  { id: 1, selected: false, title: "He:Wish him happy birthday!" },
  { id: 2, selected: false, title: "They:Wish them happy birthday!" },
];

function Signup(props) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [customGender, setCustomGender] = useState("");
  const [customGenderList, setCustomGenderList] = useState(customGenderArr);
  const { showCloseOption, setIsModalVisible } = props;

  const closeHandler = () => {
    setIsModalVisible((state) => !state);
  };
  useEffect(() => {
    setCustomGenderList((prevState) => {
      const newState = prevState.slice();
      for (const [idx] of newState.entries()) {
        newState[idx] = {
          ...newState[idx],
          selected: newState[idx].id === customGender?.id,
        };
      }
      return newState;
    });
  }, [setCustomGenderList, customGender]);

  return (
    <Fragment>
      <div className={styles.loginForm}>
        <Card width={450}>
          <CardHeader>
            <div
              className={[
                styles.heading,
                showCloseOption
                  ? styles["heading-start"]
                  : styles["heading-center"],
              ].join(" ")}
            >
              <div className={[showCloseOption ? styles.close : ""].join("")}>
                <h2>Create a new account</h2>
                {showCloseOption && (
                  <AiOutlineClose size={20} onClick={closeHandler} />
                )}
              </div>
              <p>It's quick and easy</p>
            </div>
          </CardHeader>
          <div className={styles.signupForm}>
            <div className={styles.nameInput}>
              <div>
                <Input
                  height={40}
                  style={{ marginTop: 10 }}
                  placeholder="First name"
                />
              </div>
              <div className={styles.nameSubContaienr}>
                <Input
                  height={40}
                  style={{ marginTop: 10 }}
                  placeholder="Surname"
                />
              </div>
            </div>
            <Input
              height={40}
              style={{ marginTop: 10 }}
              placeholder="Email or phone number"
            />
            <Input
              height={40}
              style={{ marginTop: 10 }}
              placeholder="New password"
            />
            <div className={styles.label}>
              <p>Date of Birth </p>
              <AiFillQuestionCircle color="#606770" />
            </div>
            <div className={styles.dateDropdown}>
              <Dropdown
                dim={{ height: 400, top: -250 }}
                list={generateDateList()}
              />
              <Dropdown
                dim={{ height: 400, top: -250 }}
                list={generateMonthList()}
              />
              <Dropdown
                dim={{ height: 400, top: -250 }}
                list={generateYearList()}
              />
            </div>
            <div className={styles.label}>
              <p>Gender </p>
              <AiFillQuestionCircle color="#606770" />
            </div>
            <div className={styles.gender}>
              <Radio
                list={[
                  { id: 0, title: "Male", selected: false },
                  { id: 1, title: "Female", selected: false },
                  { id: 2, title: "Other", selected: false },
                ]}
                getSelectedItem={setSelectedGender}
              />
            </div>
            {selectedGender?.id === 2 && (
              <div className={styles.customGender}>
                <Dropdown
                  height={36}
                  width="100%"
                  dim={{ height: 120, top: -80 }}
                  headerTitle="Select your gender pronoun"
                  getSelectedItem={(item) => setCustomGender(item)}
                  list={customGenderList}
                />
              </div>
            )}
            <div className={styles.privacyPolicy}>
              <p>
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
            </div>
            <div className={styles.signUpBtn}>
              <Button
                type="success"
                value="Sign Up"
                height="36"
                width="100%"
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                }}
              />
            </div>
          </div>
          {/* </div> */}
        </Card>
      </div>
    </Fragment>
  );
}

export default Signup;
