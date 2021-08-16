import React from "react";
import { useState } from "react";
import Nav from "../../assets/components/nav";

import stylesSheet from "./q3.module.css";

import weeklyExercises from "../../assets/componentsData/weeklyExercises";
import progressLogo from "../../assets/svgs/progress.svg";
import signalsLogo from "../../assets/svgs/signalStream.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SelectComponent from "../../assets/components/selectComponent";
import selectDataForHeaderMessage from "../../assets/componentsData/selectDataForHeaderMessage";
import Question4 from "../4question/main";
import Question1 from "../1question/main";

const completed = 2;
const total = 3;

const name = "שלומי שושנה";
const id = 63485408;
const date = new Date().toLocaleDateString();

const checkIconStyle = {
  float: "left",
  borderRadius: "50%",
  border: "2px solid #fff",
  backgroundColor: "#21cec1",
  position: "relative",
  fontSize: "21px",
  height: "20px",
  width: "20px",
  padding: "3px",
  color: "#fff",
};

const checkIconForQuestionNumberStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
  backgroundColor: "#21cec1",
  position: "absolute",
  fontSize: "15px",
  width: "20px",
  height: "20px",
  padding: "1px",
  zIndex: "9999",
  margin: "18px 0px 0px 8px",
  color: "#fff",
  fill: "#fff",
};

const checkIcon = <FontAwesomeIcon icon={faCheck} style={checkIconStyle} />;
const CheckIconForQuestionNumber = () => {
  return (
    <FontAwesomeIcon icon={faCheck} style={checkIconForQuestionNumberStyle} />
  );
};

const Main = () => {
  const [pulse, setPulse] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [lDIABlood, setLDIABlood] = useState("");
  const [lSYSBlood, setLSYSBlood] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [step, setStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pulse && oxygen && lDIABlood && lSYSBlood) {
      console.log(pulse, oxygen, lDIABlood, lSYSBlood);
    }
  };

  const checkForFilledInputs = () => {
    if (pulse && oxygen && lDIABlood && lSYSBlood) {
      setIsSubmitButtonDisabled(false);
    }
  };

  const pulseInputChangeHandler = (e) => {
    setPulse(e.target.value);
    checkForFilledInputs();
  };

  const oxygenInputChangeHandler = (e) => {
    setOxygen(e.target.value);
    checkForFilledInputs();
  };

  const lDIABloodInputChangeHandler = (e) => {
    setLDIABlood(e.target.value);
    checkForFilledInputs();
  };

  const lSYSBloodInputChangeHandler = (e) => {
    setLSYSBlood(e.target.value);
    checkForFilledInputs();
  };

  return (
    <>
      {step === 0 ? (
        <div>
          <Nav />
          <div className={stylesSheet.mainWrapper}>
            <div className={stylesSheet.messageAndSelectContainer}>
              <span className={stylesSheet.message}>
                <h1>מדדים לפני התוכנית</h1>
                <p className={stylesSheet.nameIdDate}>
                  {name}&emsp;/&emsp;{id}&emsp;/&emsp;{date}
                </p>
              </span>
              <SelectComponent {...selectDataForHeaderMessage} />
            </div>

            <div className={stylesSheet.mainContainer}>
              <div className={stylesSheet.rightSide}>
                <div
                  className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite} `}
                >
                  <div className={stylesSheet.progressInfo}>
                    <span className={stylesSheet.img}>
                      <img src={progressLogo} alt="" />
                    </span>
                    <span className={stylesSheet.statisticsBreif}>
                      <h1 className={stylesSheet.excercisesCompleted}>
                        {total} / {completed}
                      </h1>
                      <p className={stylesSheet.disabled}>תרגילים שבועיים</p>
                    </span>
                  </div>

                  <div className={stylesSheet.exercisesNames}>
                    {weeklyExercises.map((exercise) => {
                      return (
                        <p
                          className={
                            exercise.isCompleted
                              ? stylesSheet.completed
                              : stylesSheet.notCompleted
                          }
                        >
                          {exercise.name}
                          {exercise.isCompleted ? checkIcon : ""}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className={stylesSheet.leftSide}>
                <div>
                  <div className={stylesSheet.questionNumbers} dir="ltr">
                    <div
                      className={`${stylesSheet.questionNumber} ${stylesSheet.completed}`}
                      id="q1"
                    >
                      <h3>1</h3>
                      <CheckIconForQuestionNumber />
                    </div>
                    <div
                      className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
                      id="q2"
                    >
                      <h3>2</h3>
                    </div>
                    <div
                      className={`${stylesSheet.questionNumber} ${stylesSheet.next}`}
                      id="q3"
                    >
                      <h3>3</h3>
                    </div>
                  </div>
                  <div className={stylesSheet.question}>
                    <h2>בדיקת מדדים במנוחה לפני ביצוע התכנית</h2>
                    <p className={stylesSheet.explainQuestionText}>
                      יש לשבת כ- 5 דקות במנוחה מוחלטת לפני הפעילות ולהכניס את
                      מדדי לחץ הדם והדופק.
                    </p>
                  </div>
                  <div className={stylesSheet.inputAnswersWrapper}>
                    <div className={stylesSheet.formControl}>
                      <label htmlFor="pulse">דופק בזמן מנוחה</label>
                      <input
                        type="text"
                        name="pulse"
                        id="pulse"
                        placeholder="הכנס נתון"
                        value={pulse}
                        onChange={pulseInputChangeHandler}
                      />
                    </div>

                    <div className={stylesSheet.formControl}>
                      <label htmlFor="oxygen">חמצן בזמן מנוחה</label>
                      <input
                        type="text"
                        name="oxygen"
                        id="oxygen"
                        placeholder="הכנס נתון"
                        value={oxygen}
                        onChange={oxygenInputChangeHandler}
                      />
                    </div>

                    <div className={stylesSheet.formControl}>
                      <label htmlFor="lDIABlood">ל.דם DIA בזמן מנוחה</label>
                      <input
                        type="text"
                        name="lDIABlood"
                        id="lDIABlood"
                        placeholder="הכנס נתון"
                        value={lDIABlood}
                        onChange={lDIABloodInputChangeHandler}
                      />
                    </div>

                    <div className={stylesSheet.formControl}>
                      <label htmlFor="lSYSBlood">ל.דם SYS בזמן מנוחה</label>
                      <input
                        type="text"
                        name="lSYSBlood"
                        id="lSYSBlood"
                        placeholder="הכנס נתון"
                        value={lSYSBlood}
                        onChange={lSYSBloodInputChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className={stylesSheet.footerSubmitAndBackButton}>
                  <a href="#" onClick={() => setStep(2)}>
                    חזור
                  </a>
                  {!isSubmitButtonDisabled ? (
                    <button
                      className={stylesSheet.gradient}
                      disabled={false}
                      onClick={() => {
                        handleSubmit;
                        setStep(1);
                      }}
                    >
                      לסט הבא
                    </button>
                  ) : (
                    <button
                      className={stylesSheet.disabled}
                      disabled={true}
                      onClick={() => setStep(1)}
                    >
                      לסט הבא
                    </button>
                  )}
                </div>
              </div>
            </div>
            <span className={stylesSheet.sos}>
              <img src={signalsLogo}></img>
            </span>
          </div>
        </div>
      ) : step === 1 ? (
        <Question4 />
      ) : (
        <Question1 />
      )}
    </>
  );
};

export default Main;
