import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import UserLinks from "./UserLinks";
import { NavigationProps } from "../../../interface";
import logo from "../../../assets/logo.jpg";

const Navigation: React.FC<NavigationProps> = ({
  name,
  role,
  user,
  style = {},
}) => {
  return (
    <div className={styles.navigation} style={style}>
      <div className={styles.logoImgContainer}>
        {/* <img src={logo} alt="Carefinder's Logo" className={styles.logoImg} /> */}
        <p className={styles.logoImg}>CareFinder</p>
      </div>
      <UserLinks name={name} roles={role} />
    </div>
  );
};

export default Navigation;
