import React from "react";
// assets
import leftArrow from "../../Assets/Icons/left-arrow.svg";
const PasCardC = (props) => {
  return (
    <>
      <div className={`pas-7 ${props.className}`}>
        <div className={`${props.imgBodyBg} ${props.imgClass}`}>
          {props.imgText}
        </div>
        <div className="pas-4-1a">
          <span>{props.textA}</span>
        </div>
        <div className={`pas-4-1b pas-7-1b ${props.bgBody}`}>
          <div className="d-flex align-items-center justify-content-between">
            <img src={leftArrow} alt="..." />
            <strong className="m-0">הודעת מערכת חדשה</strong>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <img src={leftArrow} alt="..." />
            <strong className="m-0">ברוך הבא ל- Active Lungs</strong>
          </div>
          <span className={props.border}>{props.textC}</span>
        </div>
      </div>
    </>
  );
};

export default PasCardC;
