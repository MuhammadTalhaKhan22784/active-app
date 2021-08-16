import React from "react";
// assets
import loadStar from "../../Assets/Images/load-star.svg";
import iconSuccess from "../../Assets/Icons/icon-v-copy.svg";

const PasForm = () => {
  return (
    <>
      <div className="pas-3">
        <div className="w-100 d-flex justify-content-end">
          <strong>סטיסטיקות</strong>
        </div>
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
        <div className="pas-3-2">
          <input type="text" placeholder="תכנית עומס" />
        </div>
        <hr />
        <div className="pas-3-2">
          <input type="text" placeholder="תכנית עומס" />
        </div>
        <hr />
        <div className="pas-3-3">
          <img src={iconSuccess} alt="..." />
          <span>תרגילים לחיזוק שרירי הנשימה</span>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PasForm;
