import React, { Fragment, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { userLinks } from "./links";
import { UserLinksProps } from "../../../interface";
import { useLocation } from 'react-router-dom';

const UserLinks: React.FC<UserLinksProps> = ({ name, roles = "user" }) => {
  const [newItems, setNewItems] = useState<{ [key: number]: boolean }>({});

  const toggleHandler = (id: number) => {
    setNewItems((prevItems) => ({ ...prevItems, [id]: !prevItems[id] }));
  };
  const location = useLocation();
  const currentRoute = location.pathname;

  const hasPermission = (allowedRoles: string[], role: string) => {
    return allowedRoles?.includes(role);
  };

  return (
    <div className={styles.links}>
      <ul>
        {userLinks.map(
          (item: any, i: number) =>
            hasPermission(item.allowed, roles) && (
              <Fragment key={i}>
                {item.children ? (
                  <div className={styles.childContainer}>
                    <li
                      className={currentRoute === item.route ? styles.active : ""}
                      onClick={() => toggleHandler(i)}
                    >
                      <span>
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className={styles.iconImage}
                          />
                        ) : (
                          <item.Icon className={styles.icon} />
                        )}
                        {item.name}
                        &nbsp;&nbsp;
                        <FaCaretDown />
                      </span>
                    </li>
                    {newItems[i] && (
                      <div className={styles.child}>
                        <ul>
                          {item.children.map((child: any, x: number) => (
                            <li key={x}>
                              <Link to={child.route}>
                                {child.image ? (
                                  <img
                                    src={child.image}
                                    alt={child.name}
                                    className={styles.iconImage}
                                  />
                                ) : (
                                  child.Icon && (
                                    <child.Icon className={styles.icon} />
                                  )
                                )}
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  item.route && (
                    <li
                      key={i}
                      className={currentRoute === item.route ? styles.active : ""}
                    >
                      <Link to={item.route}>
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className={styles.iconImage}
                          />
                        ) : (
                          item.Icon && <item.Icon className={styles.icon} />
                        )}
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </Fragment>
            )
        )}
      </ul>
    </div>
  );
};

export default UserLinks;
