import React, { useState } from "react";
// assets
import loadStar from "../../../Assets/Images/load-star.svg";
import sosImg from "../../../Assets/Images/sos-normal.svg";

const QuestionMobile3 = ({ setActive2 }) => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="pas-3-1">
        <div className="d-flex flex-column align-items-center">
          <span>
            <strong className="str-1">3</strong>
            <strong className="str-2">/3</strong>
          </span>
          <span>שאלות שנשארו</span>
        </div>
        <div className="d-flex">
          <img src={loadStar} alt="..." />
        </div>
      </div>
      <hr />
      <div className="qm-box1 mb-5">
        <h2>האם יש שימוש בחמצן?</h2>
        <button
          //  toggle button*
          className={`${
            (toggle === 0 && "mt-5") ||
            (toggle === 1 && "qm-active-btn") ||
            "qm-disable-btn"
          } mt-5`}
          onClick={() => {
            setActive2(true);
            setToggle(1);
          }}
        >
          לא במיטבי, היום אנוח 🥵
        </button>
        <button
          //  toggle button*
          className={`${
            (toggle === 0 && "mt-3") ||
            (toggle === 2 && "qm-active-btn") ||
            "qm-disable-btn"
          } mt-3`}
          onClick={() => {
            setActive2(true);
            setToggle(2);
          }}
        >
          מצויין, רוצה להמשיך 😀
        </button>
      </div>
      <img className="qm-img" src={sosImg} alt="..." />
    </>
  );
};

export default QuestionMobile3;
