import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import UserLinks from "./UserLinks";
import { NavigationProps } from "../../../interface";

const Navigation: React.FC<NavigationProps> = ({
  name,
  role,
  style = {},
}) => {
  return (
    <div className={styles.navigation} style={style}>
      <div className={styles.logoImgContainer}>
        <p className={styles.logoImg}>CareFinder</p>
      </div>
      <UserLinks name={name} roles={role} />
    </div>
  );
};

export default Navigation;
