import React from "react";
import styles from "./LanguageItems.module.css";

const LANGUAGES = [
  { id: "l0", name: "English(U K)" },
  { id: "l1", name: "हिन्दी" },
  { id: "l2", name: "اردو" },
  { id: "l3", name: "ગુજરાતી" },
  { id: "l4", name: "मराठी" },
  { id: "l5", name: "తెలుగు" },
  { id: "l6", name: "ਪੰਜਾਬੀ" },
  { id: "l7", name: "ಕನ್ನಡ" },
  { id: "l8", name: "中国人" },
];

const LanguageItem = (props) => {
  return <li>{props.name}</li>;
};

function LanguageItems() {
  return (
    <div className={styles.container}>
      <ul>
        {LANGUAGES.map((item) => (
          <LanguageItem key={item.id} name={item.name} />
        ))}
      </ul>
      <div className={styles.add}>
        <button>+</button>
      </div>
    </div>
  );
}

export default LanguageItems;
