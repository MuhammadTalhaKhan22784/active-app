import React, { useState } from "react";
import "./Accordion.css";

// assets

import downArrow from "../../Assets/Icons/down-arrow.svg";
import upArrow from "../../Assets/Icons/up-arrow.svg";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="pas-accordion bg-light-red"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <img src={!isActive ? downArrow : upArrow} alt="..." />
        </div>
        <span>דווח על החמרה</span>
      </div>
      {isActive ? (
        <div className="pas-accordion-list">
          <div className="pas-accordion-item">
            <span>{"<"}</span>
            <strong>ליחה/שיעול</strong>
          </div>
          <div className="pas-accordion-item">
            <span>{"<"}</span>
            <strong>קושי פיזי</strong>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Accordion;
