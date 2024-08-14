// import React from "react";
import styles from "./styles.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

type DrawerProps = {
  isOpen: boolean;
  content?: JSX.Element[] | JSX.Element;
  title: string;
  size?: string;
  onClose: () => void;
};

const Drawer = ({
  isOpen,
  content,
  title,
  size = "sm",
  onClose,
}: DrawerProps) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      ></div>
      <div
        className={`${styles.drawer} ${isOpen ? styles.open : ""} ${
          styles[size]
        }`}
      >
        <div className={styles.title}>
          <h5>{title}</h5>
          <span onClick={onClose}>
            <IoIosCloseCircleOutline />
          </span>
        </div>
        <div className={styles.drawerContent}>{content}</div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
};

export default Drawer;
