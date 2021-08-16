import React, { useState } from "react";
import "./style.css";
// assets
import loadStar from "../../../Assets/Images/load-star.svg";
import sosImg from "../../../Assets/Images/sos-normal.svg";
import downArrow from "../../../Assets/Icons/left-arrow.svg";

// select box data
const data = [
  { text: "1 ליטרים", id: "01" },
  { text: "1.5 ליטרים", id: "02" },
  { text: "2 ליטרים", id: "03" },
  { text: "2.5 ליטרים", id: "04" },
  { text: "3 ליטרים", id: "05" },
  { text: "3.5 ליטרים", id: "06" },
  { text: "4 ליטרים", id: "07" },
  { text: "4.5 ליטרים", id: "08" },
  { text: "5 ליטרים", id: "09" },
  { text: "מעל 5 ל'", id: "10" },
];

const QuestionMobile1 = ({ setActive1 }) => {
  // states
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectValue, setSelectValue] = useState("כמות חמצן בזמן פעולה");
  const [toggle, setToggle] = useState(0);

  // select options text from dropdown
  const handleDropdown = (e) => {
    setSelectValue(e);
    if (openDropDown) {
      setOpenDropDown(false);
    }
  };
  // open dropdown func
  const handleSelectOpen = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <>
      <div className="pas-3-1">
        <div className="d-flex flex-column align-items-center">
          <span>השבוע ביצעת</span>
          <span>
            <strong className="str-1">1</strong>
            <strong className="str-2">/3</strong>
          </span>
          <span>תרגילים שבועיים</span>
        </div>
        <div className="d-flex">
          <img src={loadStar} alt="..." />
        </div>
      </div>
      <hr />
      <div className="qm-box1">
        <h2>האם יש שימוש בחמצן?</h2>
        <button
          className={`${
            (toggle === 0 && "mt-3") ||
            (toggle === 1 && "qm-active-btn") ||
            "qm-disable-btn"
          } mt-3`}
          onClick={() => {
            setActive1(true);
            setToggle(1);
          }}
        >
          לא, אין שימוש בחמצן 👎
        </button>
        <button
          className={`${
            (toggle === 0 && "mt-3") ||
            (toggle === 2 && "qm-active-btn") ||
            "qm-disable-btn"
          } mt-3`}
          onClick={() => {
            setActive1(true);
            setToggle(2);
          }}
        >
          כן, משתמש בחמצן 👍
        </button>
      </div>

      {toggle === 2 ? (
        <>
          <div className="qm-box2">
            <span>כמות חמצן בזמן פעולה</span>
          </div>

          <div className="qm-box-4">
            <div onClick={handleSelectOpen}>
              <div className="d-flex w-100 align-items-center justify-content-between">
                <img
                  style={{
                    transform:
                      openDropDown === true
                        ? "rotate(90deg)"
                        : "rotate(-90deg)",
                  }}
                  src={downArrow}
                  alt="..."
                />
                <span>{selectValue}</span>
              </div>
              {openDropDown ? (
                <ul className="dropdown-list">
                  {data.map((val) => {
                    return (
                      <li key={val.id} onClick={() => handleDropdown(val.text)}>
                        {val.text}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="d-none"></div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
      <img className="qm-img" src={sosImg} alt="..." />
    </>
  );
};

export default QuestionMobile1;
