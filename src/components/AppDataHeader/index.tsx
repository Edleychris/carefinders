import React, { useEffect, useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { FaRegArrowAltCircleRight, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./index.css";
import MoreIcon from "../../assets/Menu/more_icon.png";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

interface AppDataHeaderProps {
  HeaderText: string;
  SubHeader: string;
  MoreAction: string;
  FilterDays: string;
  AppName: string;
  Environ: string;
  Username: string;
  avatarAlt: string;
  FilterType: string;
  PlceHolderText: string;
}

const AppDataHeader: React.FC<AppDataHeaderProps> = ({
  HeaderText,
  SubHeader,
  MoreAction,
  FilterDays,
  AppName,
  Username,
  FilterType,
  PlceHolderText,
  avatarAlt,
  Environ,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const HandleNavigate = () => {
    // navigate(NavigationUrl);
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("isVisible", JSON.stringify(false));
  };

  useEffect(() => {
    const savedVisibility = localStorage.getItem("isVisible");
    if (savedVisibility !== null) {
      setIsVisible(JSON.parse(savedVisibility));
    }
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div className="Appheader">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h2>{HeaderText}</h2>
              <button
                onClick={handleClose}
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <IoCloseCircle size={20} />
              </button>
            </div>
            <p>{SubHeader} </p>

            <button className="AppheaderLinks" onClick={() => {}}>
              {MoreAction}

              <img src={MoreIcon} alt="" className="Appicon" />
            </button>
          </div>{" "}
        </>
      )}

      <div className="AppfiltersContainer">
        <div className="Appfilters">
          <button className="AppfilterButton">
            {FilterDays}{" "}
            <span>
              {" "}
              <BiCalendarEvent className="AppdropdownIcon" />
            </span>
          </button>

          <button className="AppfilterButton">
            {AppName}{" "}
            <span className="AppavatarContainer">
              <div className="AppuserAvatar"></div>
            </span>
            <IoMdArrowDropdown className="AppdropdownIcon" />
          </button>
          <button className="AppfilterButton">
            {Environ}{" "}
            <span className="AppavatarContainer">
              <div className="AppuserAvatar"></div>
            </span>
            <IoMdArrowDropdown className="AppdropdownIcon" />
          </button>
          <button className="AppfilterButton">
            {FilterType}{" "}
            <span>
              <IoMdArrowDropdown className="AppdropdownIcon" />
            </span>
          </button>
        </div>

        <div className="Appfilters">
          <div className="AppsearchbarContain">
            <FaSearch className="AppsearchIcon" />
            <input
              type="text"
              placeholder={PlceHolderText}
              className="AppsearchBar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDataHeader;
