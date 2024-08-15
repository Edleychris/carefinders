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
        <img src={logo} alt="Carefinder's Logo" className={styles.logoImg} />
      </div>
      {/* <div className={styles.userContainer}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <p>J</p>
          </div>
          <div className={styles.greeting}>
            <h3>{user?.firstname}</h3>
            <p className={styles.id}>
              ID: <span>{user?.id}</span>
            </p>
          </div>
          <div className={styles.icon} onClick={toggleDropdown}>
            {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <ul>
              <li>Settings</li>
              <li>
                <span onClick={logout} className={styles.logout}>
                  <FaSignOutAlt />
                  Logout
                </span>
              </li>
            </ul>
          </div>
        )}
      </div> */}
      <UserLinks name={name} roles={role} />
    </div>
  );
};

export default Navigation;
