import React from "react";
import "./style.css";

// assets
import loadStar from "../../../Assets/Images/load-star.svg";
import sosImg from "../../../Assets/Images/sos-normal.svg";

const QuestionMobile2 = ({ field, setField }) => {
  // set input value to state
  const handleInputCheck = (e) => {
    const { name, value } = e.target;
    setField({
      ...field,
      [name]: value,
    });
    console.log(name, value);
  };

  return (
    <>
      <div className="pas-3-1">
        <div className="d-flex flex-column align-items-center">
          <span>השבוע ביצעת</span>
          <span>
            <strong className="str-1">2</strong>
            <strong className="str-2">/3</strong>
          </span>
          <span>תרגילים שבועיים</span>
        </div>
        <div className="d-flex">
          <img src={loadStar} alt="..." />
        </div>
      </div>
      <hr />
      <div className="qm-box1 qm2-box-1">
        <div>
          <h2 className="mb-3">בדיקת מדדים במנוחה לפני ביצוע התכנית</h2>
          <span>
            יש לשבת כ- 5 דקות במנוחה מוחלטת לפני הפעילות ולהכניס את מדדי לחץ הדם
            והדופק.
          </span>
        </div>
        <div className="q2-box-2">
          <div className="q2-input-box">
            <span>ל.דם SYS בזמן מנוחה</span>
            <div>
              <input
                onChange={handleInputCheck}
                type="text"
                placeholder="הכנס נתון"
                name="input1"
                value={field.input1}
              />
            </div>
          </div>
          <div className="q2-input-box">
            <span>ל.דם DIA בזמן מנוחה</span>
            <div>
              <input
                onChange={handleInputCheck}
                type="text"
                placeholder="הכנס נתון"
                name="input2"
                value={field.input2}
              />
            </div>
          </div>
          <div className="q2-input-box">
            <span>חמצן בזמן מנוחה</span>
            <div>
              <input
                onChange={handleInputCheck}
                type="text"
                placeholder="הכנס נתון"
                name="input3"
                value={field.input3}
              />
            </div>
          </div>
          <div className="q2-input-box">
            <span>דופק בזמן מנוחה</span>
            <div>
              <input
                onChange={handleInputCheck}
                type="text"
                placeholder="הכנס נתון"
                name="input4"
                value={field.input4}
              />
            </div>
          </div>
          <div className="q2-input-box">
            <span>ל.דם SYS בזמן מנוחה</span>
            <div>
              <input
                onChange={handleInputCheck}
                type="text"
                placeholder="הכנס נתון"
                name="input5"
                value={field.input5}
              />
            </div>
          </div>
        </div>
      </div>
      <img className="qm-img" src={sosImg} alt="..." />
    </>
  );
};

export default QuestionMobile2;
