import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";
import Header from "./Header";
import { AuthContext } from "../../context";

interface PrivateLayoutProps {
  children: React.ReactNode;
  name: string;
  role?: string;
  // user: User;
  pageTitle: string;
  pageName: string;
  remove?: boolean;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({
  children,
  name,
  role = "",
  // user,
  pageTitle,
  pageName,
  remove = false,
}) => {
  const { user } = useContext(AuthContext);

  const currentUser = user || { firstname: "John Doe", id: 38200392 };

  const handleDateClick = (date: Date) => {
    console.log("Selected date:", date);
  };

  return (
    <div className="appContainer">
      <Navigation name={name} role={role} user={currentUser} />
      <div className="contentsRight">
        <ToastContainer />
        <Header
          title={pageTitle}
          user={currentUser}
          pageName={pageName}
          handleDateClick={handleDateClick}
        />
        <div className={remove ? "removePadding" : "contents"}>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
