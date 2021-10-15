import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import theme from "../../styles/theme";
import Modal from "../Modal";

const RenderModal = (props) => {
  if (!props.showModal) return null;
  return (
    <Modal dim={props.dim} setIsOpenList={props.setIsOpenList}>
      <div className={styles["dd-list"]}>
        {props.list.map((item) => (
          <button
            type="button"
            key={item.id}
            className={styles["dd-list-item"]}
            onClick={() => props.selectItemHandler(item)}
          >
            {`${item.title} `}
            {item.selected && <BiCheck color={theme.colors.SUCCESS} />}
          </button>
        ))}
      </div>
    </Modal>
  );
};

const fetchSelectedItem = (list, headerTitle) => {
  for (const [idx, { selected }] of list.entries()) {
    if (selected) {
      return list[idx];
    }
  }
  return { title: headerTitle };
};

const resetAndSetItemList = (selectedItem, list, setItemList) => {
  setItemList(
    list.map((item) => ({
      ...item,
      selected: item.id === selectedItem.id,
    }))
  );
};

function Dropdown(props) {
  const [isListOpen, setIsOpenList] = useState(false);
  const [itemList, setItemList] = useState(props.list);
  const [selectedItem, setSelectedItem] = useState(
    fetchSelectedItem(itemList, props.headerTitle)
  );

  const [buttonEle, setButtonEle] = useState(null);
  const [eleDimension, setElemDimension] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const getDimension = (ele) => {
    setButtonEle(ele);
  };
  useEffect(() => {
    setElemDimension({
      top: buttonEle?.offsetTop,
      left: buttonEle?.offsetLeft,
      width: buttonEle?.offsetWidth,
      height: buttonEle?.offsetHeight,
    });
  }, [buttonEle, setElemDimension, isListOpen]);

  const toggleListHandler = () => {
    setIsOpenList((prevState) => !prevState);
  };

  const selectItemHandler = (item) => {
    setIsOpenList((prevState) => !prevState);
    resetAndSetItemList(item, itemList, setItemList);
    setSelectedItem(item);
    props.getSelectedItem && props.getSelectedItem(item);
  };

  return (
    <div className={styles["dd-wrapper"]} style={{ width: props.width }}>
      <button
        ref={(el) => {
          getDimension(el);
        }}
        type="button"
        className={styles["dd-header"]}
        onClick={toggleListHandler}
        style={{ width: props.width, height: props.height }}
      >
        <div className={styles["dd-header-title"]}>{selectedItem.title}</div>
        {isListOpen ? <BsChevronUp /> : <BsChevronDown />}
      </button>
      {ReactDOM.createPortal(
        <RenderModal
          list={itemList}
          dim={{
            height: props?.dim?.height,
            width:
              (props?.dim?.width && eleDimension.width + props.dim.width) ||
              eleDimension.width,
            top:
              (props?.dim?.top && eleDimension.top + props.dim.top) ||
              eleDimension.top,
            left:
              (props?.dim?.left && eleDimension.left + props.dim.left) ||
              eleDimension.left,
          }}
          showModal={isListOpen}
          selectItemHandler={selectItemHandler}
          setIsOpenList={setIsOpenList}
        />,
        document.getElementById("overlay")
      )}
    </div>
  );
}

export default Dropdown;
