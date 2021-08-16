import React from "react";
import { useState } from "react";
import Nav from "../../assets/components/nav";

import stylesSheet from "./q4.module.css";

import weeklyExercises from "../../assets/componentsData/weeklyExercises";
import progressLogo from "../../assets/svgs/progressLogoComplete.svg";
import signalsLogo from "../../assets/svgs/signalStream.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SelectComponent from "../../assets/components/selectComponent";
import selectDataForHeaderMessage from "../../assets/componentsData/selectDataForHeaderMessage";
import Question3 from "../3question/main";

const completed = 3;
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
  const [yesButtonClicked, setYesButtonClicked] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [step, setStep] = useState(0);

  const noButtonClickHandler = (e) => {
    console.log(e.target.innerHTML);

    setNoButtonClicked(true);
    setYesButtonClicked(false);
    setIsSubmitButtonDisabled(false);
  };
  const yesButtonClickHandler = (e) => {
    console.log(e.target.innerHTML);
    setYesButtonClicked(true);
    setNoButtonClicked(false);
    setIsSubmitButtonDisabled(false);
  };

  const YesButtonClicked = () => {
    return (
      <button className={stylesSheet.gradient}>מצויין, רוצה להמשיך 😀</button>
    );
  };
  const YesButtonUnclicked = () => {
    return (
      <button
        className={noButtonClicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={yesButtonClickHandler}
      >
        מצויין, רוצה להמשיך 😀
      </button>
    );
  };

  const NoButtonClicked = () => {
    return (
      <button className={stylesSheet.gradient}>לא במיטבי, היום אנוח 🥵</button>
    );
  };
  const NoButtonUnclicked = () => {
    return (
      <button
        className={noButtonClicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={noButtonClickHandler}
      >
        לא במיטבי, היום אנוח 🥵
      </button>
    );
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
                  className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite}`}
                >
                  <div className={stylesSheet.progressInfo}>
                    <span className={stylesSheet.img}>
                      <img src={progressLogo} alt="" />
                    </span>
                    <span className={stylesSheet.statisticsBreif}>
                      <h1 className={stylesSheet.exercisesCompleted}>
                        {total} / {completed}
                      </h1>
                      <p className={stylesSheet.disabled}>
                        איך אני מרגיש היום?
                      </p>
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
                <div className={stylesSheet.questionNumbers} dir="ltr">
                  <div
                    className={`${stylesSheet.questionNumber} ${stylesSheet.completed}`}
                    id="q1"
                  >
                    <h3>1</h3>
                    <CheckIconForQuestionNumber />
                  </div>
                  <div
                    className={`${stylesSheet.questionNumber} ${stylesSheet.completed}`}
                    id="q2"
                  >
                    <h3>2</h3>
                    <CheckIconForQuestionNumber />
                  </div>
                  <div
                    className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
                    id="q3"
                  >
                    <h3>3</h3>
                  </div>
                </div>
                <div className={stylesSheet.question}>
                  <h1>האם יש שימוש בחמצן?</h1>
                </div>
                <div className={stylesSheet.questionOptions}>
                  <div className={stylesSheet.noButton}>
                    {noButtonClicked ? (
                      <NoButtonClicked />
                    ) : (
                      <NoButtonUnclicked />
                    )}
                  </div>
                  <div className={stylesSheet.yesButton}>
                    {yesButtonClicked ? (
                      <YesButtonClicked />
                    ) : (
                      <YesButtonUnclicked />
                    )}
                  </div>
                </div>
                <div className={stylesSheet.footerSubmitAndBackButton}>
                  <a href="#" onClick={() => setStep(1)}>
                    חזור
                  </a>
                  {!isSubmitButtonDisabled ? (
                    <button
                      className={stylesSheet.gradient}
                      disabled={false}
                      onClick={() => alert("Clicked!")}
                    >
                      לסט הבא
                    </button>
                  ) : (
                    <button
                      className={stylesSheet.disabled}
                      disabled={true}
                      onClick={() => alert("Clicked!")}
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
      ) : (
        <Question3 />
      )}
    </>
  );
};

export default Main;
