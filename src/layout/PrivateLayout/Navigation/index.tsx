import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import UserLinks from "./UserLinks";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../../context";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  name: string;
  role: string;
  user: User;
  style?: any;
}

export interface User {
  firstname: string;
  id: number;
  // roles: Role[];
}

const Navigation: React.FC<NavigationProps> = ({
  name,
  role,
  user,
  style = {},
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    authCtx.logout();
    window.location.reload();
    navigate("/");
  };

  return (
    <div className={styles.navigation} style={style}>
      <div className={styles.userContainer}>
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
              <li className={styles.business}>
                <span>
                  New Business
                  <AiOutlinePlus style={{ color: "#850075" }} />
                </span>
              </li>
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
      </div>
      <UserLinks name={name} roles={role} />
    </div>
  );
};

export default Navigation;
