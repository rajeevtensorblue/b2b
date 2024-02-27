import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import profile from "../assets/boy.png";
import below from "../assets/Vector1.png";
import menu from "../assets/menu.png";
import search from "../assets/Vector.png";
import notification from "../assets/Group.png";
import x from "../assets/x-button.png";
import logo_imgs from "../assets/mainLogo.png";
import { Link } from "react-router-dom";
import "../css/MainHeader.css";
import logo_iconi1 from "../assets/logout.png";
import logo_iconi2 from "../assets/bookmark (1).png";
import logo_iconi3 from "../assets/trending_up.png";
import logo_iconi4 from "../assets/grid_view.png";
import logo_iconi5 from "../assets/payments.png";
import logo_iconi6 from "../assets/account_circle.png";



const Header = ({ isAuth, userCredits, setIsAuth }) => {
  const navigate = useNavigate();
  const [isUserCardOpen, setUserCardOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleUserCard = () => {
    setUserCardOpen(!isUserCardOpen);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <div className="main_header_component">
        <header className="header_component">
          <div className="looo">
            <Link to="/">
              <img src={logo_imgs} alt="Main logo" className="mainLogoIP" />
            </Link>
          </div>
          <div className="profile">
            <div className="btn_item_gig">
              {isAuth ? (
                <a
                  href="#"
                  className="exploreing"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Explore
                </a>
              ) : null}

              {/* {isAuth ? (
              <a
                href="#"
                className="pricee"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/subscription");
                }}
              >
                Prices
              </a>
            ) : null} */}
              <a
                href="#"
                className="sign_inout"
                onClick={(e) => {
                  e.preventDefault();
                  if (isAuth) {
                  
                    setIsAuth(false);
                  }
                  navigate("/login");
                }}
              >
                {isAuth ? "Sign out" : "Sign in"}
              </a>
              {isAuth ? (
                <p className="creditAvailable">
                  {" "}
                  {isAuth ? (
                    <a
                      href="#"
                      className="mlm"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/payment");
                      }}
                    >
                      Add Credits
                    </a>
                  ) : null}{" "}
                  {""} <span className="dollarsign">$</span>
                  <span className="credit_numberss">{userCredits}</span>
                </p>
              ) : null}
            </div>
            {isAuth ? (
              <div
                className="profile_sys"
                onClick={handleDropdownClick}
                ref={dropdownRef}
              >
                <img src={profile} alt="profile" className="img_pic" />
                <img
                  src={below}
                  alt="below"
                  className={`below ${showDropdown ? "rotate" : ""}`}
                />
              </div>
            ) : null}

            <img
              src={menu}
              alt="menu"
              className="menu"
              onClick={handleMenuClick}
            />
          </div>
        </header>
      </div>
      {/* <div className="drop">{showDropdown && <Dropdown_Menu />}</div> */}

      {showMenu ? (
        <div className="hamburger">
          <img
            src={x}
            alt="close"
            className="close_btn_ham"
            onClick={handleMenuClick}
          />
          <div className="logoings">
            <img src={logo_imgs} alt="Main logo" className="mainLogoIPs" />
            <h1 className="namingLogos">Ideaverse</h1>
          </div>
          {isAuth ? (
            <p className="creditAvailable">
              {" "}
              {isAuth ? (
                <a
                  href="#"
                  className="mlm"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/payment");
                    handleMenuClick(); // Close the sidebar after navigating
                  }}
                >
                  Add Credits
                </a>
              ) : null}{" "}
              {""} <span className="dollarsign">$</span>
              <span className="credit_numberss">{userCredits}</span>
            </p>
          ) : null}
          <div className="hamburger_btns">
            <a
              href="#"
              className="exploreing"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                handleMenuClick(); // Close the sidebar after navigating
              }}
            >
              <img src={logo_iconi4} alt="logo_iconi1" className="iconni" />
              <span className="hmaicon">Home</span>
            </a>

            <a
              href="#"
              className="exploreing"
              onClick={(e) => {
                e.preventDefault();
                navigate("/featured");
                handleMenuClick(); // Close the sidebar after navigating
              }}
            >
              <img src={logo_iconi3} alt="logo_iconi1" className="iconni" />
              <span className="hmaicon">Featured</span>
            </a>
            <a
              href="#"
              className="exploreing"
              onClick={(e) => {
                e.preventDefault();
                navigate("/history");
                handleMenuClick(); // Close the sidebar after navigating
              }}
            >
              <img src={logo_iconi2} alt="logo_iconi1" className="iconni" />
              <span className="hmaicon">History</span>
            </a>
            <a
              href="#"
              className="exploreing"
              onClick={(e) => {
                e.preventDefault();
                navigate("/profile");
                handleMenuClick(); // Close the sidebar after navigating
              }}
            >
              <img src={logo_iconi6} alt="logo_iconi1" className="iconni" />
              <span className="hmaicon">Profile</span>
            </a>
            {isAuth ? (
              <a
                href="#"
                className="pricee"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/subscription");
                  handleMenuClick(); // Close the sidebar after navigating
                }}
              >
                <img src={logo_iconi5} alt="logo_iconi1" className="iconni" />
                <span className="hmaicon">Pricing</span>
              </a>
            ) : null}
            <a
              href="#"
              className="sign_inout"
              onClick={(e) => {
                e.preventDefault();
                if (isAuth) {
                  
                  setIsAuth(false);
                }
                navigate("/login");
                handleMenuClick(); // Close the sidebar after navigating
              }}
            >
              <img src={logo_iconi1} alt="logo_iconi1" className="iconni" />

              <span className="hmaicon">{isAuth ? "Sign out" : "Sign in"}</span>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
