import React, { Fragment, useContext, useState } from "react";
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context";
import styles from "./styles.module.css";
import { userLinks } from "./links";
import { AiOutlineSearch } from "react-icons/ai";
import { UserLinksProps } from "../../../interface";

const UserLinks: React.FC<UserLinksProps> = ({ name, roles = "user" }) => {
  const [newItems, setNewItems] = useState<{ [key: number]: boolean }>({});
  const [search, setSearch] = useState<string>("");
  // const navigate = useNavigate();

  const toggleHandler = (id: number) => {
    setNewItems((prevItems) => ({ ...prevItems, [id]: !prevItems[id] }));
  };

  const hasPermission = (allowedRoles: string[], role: string) => {
    console.log({ allowedRoles });
    console.log({ role });
    return allowedRoles?.includes(role);
  };

  // const authCtx = useContext(AuthContext);

  // const logout = () => {
  //   authCtx.logout();
  //   window.location.reload();
  //   navigate("/");
  // };

  return (
    <div className={styles.links}>
      <ul>
        {userLinks.map((item: any, i: any) => {
          // console.log("Rendering link:", item.name, "Allowed:", item.allowed);
          return (
            hasPermission(item.allowed, roles) && (
              <Fragment key={i}>
                {item.children ? (
                  <div className={styles.childContainer}>
                    <li
                      className={name === item.name ? styles.active : undefined}
                      onClick={() => toggleHandler(i)}
                    >
                      {/* <span>
                        <item.Icon />
                        {item.name}
                        &nbsp;&nbsp;
                        <FaCaretDown />
                      </span> */}

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
                          {item.children.map((child: any, x: any) => (
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
                      className={name === item.name ? styles.active : undefined}
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
          );
        })}
        {/* <li>
          <span onClick={logout}>
            <FaSignOutAlt />
            Logout
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export default UserLinks;
