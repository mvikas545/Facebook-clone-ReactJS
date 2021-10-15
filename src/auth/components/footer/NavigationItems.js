import React from "react";
import styles from "./NavigationItems.module.css";

const NAVIGATION = [
  { id: "s0", name: "Sign Up" },
  { id: "s1", name: "Log In" },
  { id: "s2", name: "Messanger" },
  { id: "s3", name: "Facebook Lite" },
  { id: "s4", name: "Watch" },
  { id: "s5", name: "Places" },
  { id: "s6", name: "Games" },
  { id: "s7", name: "Market Place" },
  { id: "s8", name: "Facebook Pay" },
  { id: "s9", name: "Job" },
  { id: "s10", name: "Oculus" },
  { id: "s11", name: "Portals" },
  { id: "s12", name: "Instragram" },
  { id: "s13", name: "Local" },
  { id: "s14", name: "Fundraisers" },
  { id: "s15", name: "Services" },
  { id: "s16", name: "Vooting Information Center" },
  { id: "s17", name: "About" },
  { id: "s18", name: "Create Ad" },
  { id: "s19", name: "Create Page" },
  { id: "s20", name: "Developers" },
  { id: "s21", name: "Careers" },
  { id: "s22", name: "Privacy" },
  { id: "s23", name: "Cookies" },
  { id: "s24", name: "AdChoices" },
  { id: "s25", name: "Terms" },
  { id: "s26", name: "Help" },
];

const NaviagteItem = (props) => {
  return <li>{props.name}</li>;
};
function NavigationItems() {
  return (
    <div className={styles.container}>
      <ul>
        {NAVIGATION.map((item) => (
          <NaviagteItem key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default NavigationItems;
