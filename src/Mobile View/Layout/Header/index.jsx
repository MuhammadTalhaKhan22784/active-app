import React, { useState } from "react";
import "./header.css";
// assets
import toggleBtnOpen from "../../Assets/Icons/hamburger-closed.svg";
import toggleBtnClose from "../../Assets/Icons/hamburger-open.svg";
import leftArrow from "../../Assets/Icons/left-arrow.svg";
import settingIcon from "../../Assets/Icons/icon-setings.svg";
import iconUser from "../../Assets/Icons/icon-user.svg";
import mailIcon from "../../Assets/Icons/icon-mail.svg";

// Modal
import PersonalAreaModal from "../../Components/Modal/PersonalAreaModal";
const Header = () => {
  // state for open menu
  const [open, setOpen] = useState(true);
  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-7 col-sm-6 col-md-6 d-flex align-items-center">
              {open ? (
                <img
                  className="toggle-close"
                  src={toggleBtnOpen}
                  onClick={() => setOpen(false)}
                  alt="..."
                />
              ) : (
                <img
                  className="toggle-open"
                  src={toggleBtnClose}
                  onClick={() => setOpen(true)}
                  alt="..."
                />
              )}
              <PersonalAreaModal />
            </div>
            <div className="col-5 col-sm-6 col-md-6 text-end">
              <span>לוגו יבוא כאן</span>
            </div>
          </div>
        </div>
        {!open ? (
          <div className="head-menu">
            <div className="menu-ul">
              <img src={leftArrow} alt="..." />
              <div className="d-flex align-items-center">
                <span>הגדרות</span>
                <img className="ms-3" src={settingIcon} alt="..." />
              </div>
            </div>
            <hr />

            <div className="menu-ul">
              <img src={leftArrow} alt="..." />
              <div className="d-flex align-items-center">
                <span>הגדרות משתמש</span>
                <img className="ms-3" src={iconUser} alt="..." />
              </div>
            </div>
            <hr />

            <div className="menu-ul">
              <img src={leftArrow} alt="..." />
              <div className="d-flex align-items-center">
                <div className="menu-circle me-2">54</div>
                <span>הגדרות</span>
                <img className="ms-3" src={mailIcon} alt="..." />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </>
  );
};

export default Header;
