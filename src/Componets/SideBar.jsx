import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/leftPannel.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";

const LeftPanel = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <div className="RightPanel">
        <div className="icons">
          <div
            className="icon-container "
            onClick={() => handleIconClick("icon1")}
          >
            <img
              src={icon1}
              alt="icons"
              className={`icons_panel ${activeIcon === "icon1" ? "highlight" : ""}`}
            />
            <span className="icon-text">Icon 1</span>
          </div>
          <div
            className="icon-container "
            onClick={() => handleIconClick("icon2")}
          >
            <img
              src={icon2}
              alt="icons"
              className={`icons_panel ${activeIcon === "icon2" ? "highlight" : ""}`}
            />
            <span className="icon-text">Icon 2</span>
          </div>
          <div
            className="icon-container "
            onClick={() => handleIconClick("icon3")}
          >
            <img
              src={icon3}
              alt="icons"
              className={`icons_panel ${activeIcon === "icon3" ? "highlight" : ""}`}
            />
            <span className="icon-text">Icon 3</span>
          </div>
          <div
            className="icon-container "
            onClick={() => handleIconClick("icon4")}
          >
            <img
              src={icon4}
              alt="icons"
              className={`icons_panel ${activeIcon === "icon4" ? "highlight" : ""}`}
            />
            <span className="icon-text">Icon 4</span>
          </div>
          <div
            className="icon-container "
            onClick={() => handleIconClick("icon5")}
          >
            <img
              src={icon5}
              alt="icons"
              className={`icons_panel ${activeIcon === "icon5" ? "highlight" : ""}`}
            />
            <span className="icon-text">Icon 5</span>
          </div>
          <Link to="/history">
            <div
              className="icon-container "
              onClick={() => handleIconClick("icon6")}
            >
              <img
                src={icon6}
                alt="icons"
                className={`icons_panel ${location.pathname === "/history" ? "highlight" : ""}`}
              />
              <span className="icon-text">Icon 6</span>
            </div>
          </Link>
          <Link to="/featured">
            <div
              className="icon-container "
              onClick={() => handleIconClick("icon7")}
            >
              <img
                src={icon7}
                alt="icons"
                className={`icons_panel ${location.pathname === "/featured" ? "highlight" : ""}`}
              />
              <span className="icon-text">Icon 7</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
