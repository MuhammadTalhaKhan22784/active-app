import React, { useState } from "react";
import "./style.css";

// components
import Accordion from "../../Accordion";
import PasHead from "../../PersonalAreaComponents/PasHead";
import WeeklyProgram1 from "../../WeeklyProgramComponents/WeeklyProgram1";
import WeeklyProgram2 from "../../WeeklyProgramComponents/WeeklyProgram2";
import WeeklyProgram3 from "../../WeeklyProgramComponents/WeeklyProgram3";
import WeeklyProgram4 from "../../WeeklyProgramComponents/WeeklyProgram4";

// assets
import iconTick from "../../../Assets/Icons/tick.svg";

const WeeklyProgramStepper = () => {
  const [stepper, setStepper] = useState(1);
  const stepperNextFunc = () => {
    if (stepper !== 4) {
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
      <div className="weekly-program-stepper">
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
        <Accordion />
        <div className="wps-1">
          <strong>סט מספר</strong>
        </div>

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
                  stepper === 2 || stepper === 3 || stepper === 4
                    ? "active-step-tick"
                    : "d-none"
                }
              >
                <img src={iconTick} alt="..." />
              </div>
              1
            </div>
            <div className="qm-active-line qm-line"></div>
            <div
              className={
                stepper === 2 ? "step qm-active-step" : "step qm-finish-step"
              }
            >
              <div
                className={
                  stepper === 3 || stepper === 4 ? "active-step-tick" : "d-none"
                }
              >
                <img src={iconTick} alt="..." />
              </div>
              2
            </div>
            <div
              className={stepper === 4 ? "qm-line qm-active-line" : "qm-line"}
            ></div>
            <div
              //
              className={
                stepper === 3
                  ? "step qm-active-step"
                  : stepper === 4
                  ? "step qm-finish-step"
                  : "step"
              }
            >
              <div className={stepper === 4 ? "active-step-tick" : "d-none"}>
                <img src={iconTick} alt="..." />
              </div>
              3
            </div>
            <div
              className={stepper === 3 ? "qm-line qm-active-line" : "qm-line"}
            ></div>
            <div className={stepper === 4 ? "step qm-active-step" : "step"}>
              {/* <div className={stepper === 3 ? "active-step-tick" : "d-none"}>
                <img src={iconTick} alt="..." />
              </div> */}
              4
            </div>
          </div>
          <div className="d-flex w-100 justify-content-end text-blue mt-2">
            <span>בדיקת מדדים</span>
          </div>
        </div>
        <div className="pas-3 qm-1 position-relative">
          {stepper === 1 && (
            <WeeklyProgram1
              stepperNextFunc={stepperNextFunc}
              stepperBackFunc={stepperBackFunc}
            />
          )}
          {stepper === 2 && (
            <WeeklyProgram2
              stepperNextFunc={stepperNextFunc}
              stepperBackFunc={stepperBackFunc}
            />
          )}
          {stepper === 3 && (
            <WeeklyProgram3
              stepperNextFunc={stepperNextFunc}
              stepperBackFunc={stepperBackFunc}
            />
          )}
          {stepper === 4 && (
            <WeeklyProgram4
              stepperNextFunc={stepperNextFunc}
              stepperBackFunc={stepperBackFunc}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default WeeklyProgramStepper;
