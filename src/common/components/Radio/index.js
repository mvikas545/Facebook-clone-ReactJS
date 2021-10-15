import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import theme from "../../styles/theme";
function Radio(props) {
  const { list } = props;
  const [itemList, setItemList] = useState(list);
  const resetAndSetHandler = (item) => {
    setItemList((prevState) => {
      const newState = prevState.slice();
      for (const [idx] of newState.entries()) {
        newState[idx] = {
          ...newState[idx],
          selected: item.id === newState[idx].id,
        };
      }
      return newState;
    });
  };

  return (
    <div className={styles["r-list"]}>
      {itemList.map((item) => {
        return (
          <button
            key={item.id}
            className={styles["r-list-item"]}
            onClick={() => {
              resetAndSetHandler(item);
              props.getSelectedItem(item);
            }}
          >
            {item.title}
            {item.selected ? (
              <IoMdRadioButtonOn color={theme.colors.PRIMARY} />
            ) : (
              <IoMdRadioButtonOff />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Radio;
