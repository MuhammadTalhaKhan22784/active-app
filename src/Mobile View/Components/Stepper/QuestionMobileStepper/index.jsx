import React, { useState } from "react";
import "./style.css";

// components

import Accordion from "../../../Components/Accordion";
import PasHead from "../../PersonalAreaComponents/PasHead";
import QuestionMobile1 from "../../QuestionMobileComponents/QuestionMobile1";
import QuestionMobile2 from "../../QuestionMobileComponents/QuestionMobile2";
import QuestionMobile3 from "../../QuestionMobileComponents/QuestionMobile3";

// assets

import iconDoctor from "../../../Assets/Icons/icon-doctor.svg";
import iconTick from "../../../Assets/Icons/tick.svg";
import leftArrow from "../../../Assets/Icons/left-arrow.svg";
import iconUploadFiles from "../../../Assets/Icons/icon-upload-files.svg";
import iconOnline from "../../../Assets/Icons/icon-online.svg";

const QuestionMobileStepper = () => {
  // input fields data

  const [field, setField] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  // this state for showing button in stepper 1
  const [active1, setActive1] = useState(false);

  // this state for showing button in stepper 2
  const [active2, setActive2] = useState(false);

  // this state for showing which state of stepper
  const [stepper, setStepper] = useState(1);

  // top cards list data
  const questionMobileList = [
    {
      text: "מפגש עם רופא",
      icon: iconDoctor,
      arrowIcon: leftArrow,
      disable: "false",
    },
    {
      text: "ייעוץ אונליין",
      icon: iconOnline,
      arrowIcon: leftArrow,
      disable: "false",
    },
    {
      text: "ייעוץ אונליין",
      icon: iconUploadFiles,
      arrowIcon: leftArrow,
      disable: "false",
    },
  ];

  // next step function
  const stepperNextFunc = () => {
    if (stepper !== 3) {
      setStepper(stepper + 1);
    }
  };

  // back step function
  const stepperBackFunc = () => {
    if (stepper !== 0) {
      setStepper(stepper - 1);
    }
  };

  return (
    <>
      <PasHead
        textA="מדדים לפני התוכנית"
        textB={
          <div className="qm1-head">
            <strong style={{ fontSize: "1rem" }}>שלומי שושנה</strong>
            <span> / </span> 63485408 <span>/</span>
            22.6.2020
          </div>
        }
      />
      <Accordion listName={questionMobileList} />

      {/* stepper */}
      <div className="qm-stepper">
        <div className="stepper-wrapper">
          <div
            className={
              stepper === 1 ? "step qm-active-step" : "step qm-finish-step"
            }
          >
            <div
              className={
                stepper === 2 || stepper === 3 ? "active-step-tick" : "d-none"
              }
            >
              <img src={iconTick} alt="..." />
            </div>
            1
          </div>
          <div className="qm-active-line qm-line"></div>
          <div
            className={
              stepper === 2
                ? "step qm-active-step"
                : stepper === 3
                ? "step qm-finish-step"
                : "step"
            }
          >
            <div className={stepper === 3 ? "active-step-tick" : "d-none"}>
              <img src={iconTick} alt="..." />
            </div>
            2
          </div>
          <div
            className={stepper === 3 ? "qm-line qm-active-line" : "qm-line"}
          ></div>
          <div className={stepper === 3 ? "step qm-active-step" : "step"}>
            3
          </div>
        </div>
      </div>
      <div className="pas-3 qm-1 position-relative">
        {stepper === 1 && (
          // active1 and setActive1 props are used for showing step 1 button
          <QuestionMobile1 active1={active1} setActive1={setActive1} />
        )}
        {
          // field and setField props are used for getting step 2 inputs data
          stepper === 2 && <QuestionMobile2 field={field} setField={setField} />
        }
        {
          // active2 and setActive2 props are used for showing step 3 button
          stepper === 3 && (
            <QuestionMobile3 active2={active2} setActive2={setActive2} />
          )
        }
        {/* condition for showing button in step 1  */}
        {(stepper === 1 && active1 && (
          <div className="qm-box3">
            <button onClick={stepperNextFunc} className="qm-active-btn">
              המשך
            </button>
            <span>חזור</span>
          </div>
        )) ||
          // condition for showing button in step 2
          (stepper === 3 && active2 && (
            <div className="qm-box3">
              <button onClick={stepperNextFunc} className="qm-active-btn">
                {stepper === 3 ? "מוכן להתחיל" : "המשך"}
              </button>
              <span onClick={stepperBackFunc}>חזור</span>
            </div>
          )) ||
          // condition for checking inputs are filled or not
          (stepper === 2 && field && (
            <div className="qm-box3">
              {field.input1 &&
              field.input2 &&
              field.input3 &&
              field.input4 &&
              field.input5 ? (
                <>
                  {/* fill inputs show active button */}
                  <button onClick={stepperNextFunc} className="qm-active-btn">
                    המשך
                  </button>
                </>
              ) : (
                // empty inputs show disable button
                <button className="qm-disable-btn">המשך</button>
              )}
              <span onClick={stepperBackFunc}>חזור</span>
            </div>
          )) ||
          // condition for showing buttons on step1 and step2
          (stepper !== 1 && stepper !== 3 && (
            <div className="qm-box3">
              <button onClick={stepperNextFunc} className="qm-active-btn">
                {stepper === 3 ? "מוכן להתחיל" : "המשך"}
              </button>
              <span onClick={stepperBackFunc}>חזור</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default QuestionMobileStepper;
