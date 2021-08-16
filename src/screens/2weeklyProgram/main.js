//Builtin
import React, { useState } from "react";
import Nav from "../../assets/components/nav";

//components
import SelectComponent from "../../assets/components/selectComponent";
// import { SelectForMCQ5 } from '../../assets/components/selectComponentForMultipleChoices'
import Select from "react-select";
import WeeklyProgram3 from "../3weeklyProgram/main";
import WeeklyProgramOne from "../1weeklyProgramTimer/main";

//componentsData
import selectData1 from "../../assets/componentsData/selectDataForHeaderMessage";
import { weeklyProgram1 } from "../../assets/componentsData/selectDataForMultipleChoices";

//modal
import { Modal } from "react-bootstrap";
import "../../assets/css/bootstrap/bootstrap.min.css";

import Countdown from "react-countdown";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import progressLogo from "../../assets/svgs/progress.svg";
import videoImage from "../../assets/images/group-6.png";
import playIcon from "../../assets/svgs/playIcon.svg";

//css
import stylesSheet from "./wptimer.module.css";
import "./timerModal.css";
import "./wptimer.module.css";
import { useRef } from "react";

const ExclaimationIconForErrorStyle = {
  borderRadius: "50%",
  border: "2px solid #fff",
  backgroundColor: "#fd7172",
  fontSize: "30px",
  padding: "3px",
  width: "35px",
  height: "35px",
  float: "right",
  fill: "#fff",
  color: "#fff",
};

const ExclaimationIconForError = () => {
  return (
    <FontAwesomeIcon
      icon={faExclamation}
      style={ExclaimationIconForErrorStyle}
    />
  );
};

const exclamationIcon = (
  <FontAwesomeIcon
    icon={faExclamation}
    style={{
      borderRadius: "50%",
      border: "2px solid #fff",
      backgroundColor: "#fd7172",
      position: "relative",
      right: "-35px",
      top: "8px",
      fontSize: "30px",
      padding: "3px",
      width: "35px",
      height: "35px",
      float: "right",
      fill: "#fff",
      color: "#fff",
    }}
  />
);

const CheckIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={{
        borderRadius: "50%",
        border: "1px solid #fff",
        backgroundColor: "#21cec1",
        position: "absolute",
        fontSize: "15px",
        width: "20px",
        height: "20px",
        padding: "1px",
        zIndex: "1000",
        margin: "9px 0px 0px 5px",
      }}
    />
  );
};
const circleIcon = (
  <FontAwesomeIcon
    icon={faCircle}
    style={{
      borderRadius: "50%",
      color: "#43e4ff",
      position: "absolute",
      fontSize: "10px",
      width: "10px",
      height: "10px",
      zIndex: "1000",
      margin: "0px 0px 0px -13px",
    }}
  />
);

const name = "שלומי שושנה";
const id = 63485408;
const date = new Date().toLocaleDateString();

const completed = 2;
const total = 4;

const precuation = {
  para1:
    "במידה ובכל שלב של מהלך הפעילות הסיטורציה יורדת ונשארת מתחת ל90% ו/או מופיעה הרגשה של אי נוחות/ סחרחורת/חולשה או אפילו כאב, יש להפסיק את הפעילות ולשקול לפנות  לייעוץ רפואי.",
  para2:
    "נא לקרוא את ההוראות בפירוט לפני ביצוע כל תרגיל, ולשים לב לאופן הנשימה המצוין בביצוע המאמץ.",
};

const exerciseDesc = {
  topic1: "תאור התרגיל:",
  topic2: "ביצוע:",
  topic3: "אופן נשימה:",
  topic4: "אופן מדידה:",
  topic5: "התאוששות:",
  desc1:
    "בעמידה במקום, יש להתחיל לצעוד ולנסות להגיע עם הברכיים עד לגובה של הליכה טבעית. קצב הפעילות יהיה קבוע, לא מהיר ולא איטי מידי, במידה והקושי מתגבר, ניתן להאט את קצב ההליכה.",
  desc2:
    "כל סט יבוצע במשך זמן מוגדר בלבד, במידה וקיים קושי ניתן להקטין את הזמן.",
  desc3: {
    para1: "לשאוף אוויר בתחילת הפעילות, לנסות להגיע לנפח ריאות מלא.",
    para2:
      "יש לנשוף את האוויר החוצה לאורך 5 צעדים, ומיד לאחר מכן לשאוף אוויר מחדש ולהמשיך שוב.",
    para3:
      "-&emsp;לא לעצור את הפעילות בשביל לשאוף אוויר חדש, אלא תוך כדי פעילות –",
  },

  desc4: {
    para1:
      "יש לשבת מיד לאחר סיום הפעילות ולהכניס את האצבע למכשיר כבוי כך שהאצבע נכנסת כמעט עד הסוף, ולאחר מכן להדליק את המכשיר.",
    para2:
      "בשלב זה המכשיר יציג תוצאה ראשונית, יש להמתין פרק זמן קצר יחסית, עד קבלת תוצאת מדידה סופית.",
    para3: "זאת אומרת, לבצע רישום ברגע שהמספרים מתייצבים ואין שינוי.",
  },

  desc5: {
    para1:
      "לאחר כל  משך זמן פעילות, יש להמתין דקה וחצי עד 2 דקות - או-  להמתין עד שהדופק, הסיטורציה והנשימה מסתדרים לגמרי, ורק אז להתחיל שוב.",
    para2:
      "**במידה ומתקבלת בכל שלב של הפעילות תוצאה סופית של סיטורציה נמוכה מ90% - יש להפסיק את הפעילות, וליידע אותי.",
  },
};

const Main = () => {
  const isSearchable = false;
  const [areInputsDisabled, setAreInputsDisabled] = React.useState(true);
  const [hasClockCompletedOnce, setHasClockCompletedOnce] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);

  const handleFooterButtonClick = () => {
    if (hasClockCompletedOnce) {
    } else setShowModal(true);
  };

  function TimerModal(props) {
    const [timeInMiliSeconds, setTimeInMiliSeconds] = useState(120000);

    return hasClockCompletedOnce ? (
      <></>
    ) : (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="timerModal"
      >
        <Modal.Body>
          <div className="modalContent">
            <div className="timerContainer">
              <h1>
                {timeInMiliSeconds ? (
                  <Countdown
                    date={Date.now() + timeInMiliSeconds}
                    renderer={renderer}
                  />
                ) : (
                  ""
                )}
              </h1>
            </div>

            <button
              className={stylesSheet.gradient}
              onClick={() => {
                setShowModal(false);
                setAreInputsDisabled(false);
                setHasClockCompletedOnce(true);
              }}
            >
              סיום
            </button>
            <button
              onClick={() => {
                if (timeInMiliSeconds === 120000) {
                  console.log(timeInMiliSeconds);
                  setTimeInMiliSeconds(120001);
                  console.log(timeInMiliSeconds);
                } else {
                  console.log(timeInMiliSeconds);
                  setTimeInMiliSeconds(120000);
                  console.log(timeInMiliSeconds);
                }
                console.log("clicked");
              }}
            >
              התחל מחדש
            </button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const handleCompleteCountdown = () => {
    setShowModal(false);
    setAreInputsDisabled(false);
    setHasClockCompletedOnce(true);
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      handleCompleteCountdown();
      return null;
    } else {
      return (
        <>
          {/* {console.log(seconds.toString().length)} */}
          {seconds.toString().length < 2 ? "0" + seconds.toString() : seconds} :
          {minutes.toString().length < 2 ? "0" + minutes.toString() : minutes} :
          {hours.toString().length < 2 ? "0" + hours.toString() : hours}
        </>
      );
    }
  };

  const onSelectValueChangeHandler = (newValue) => {
    console.log(newValue);
  };

  const OneToTenDropDown = () => {
    return (
      <Select
        options={weeklyProgram1}
        onChange={onSelectValueChangeHandler}
        isDisabled={areInputsDisabled}
        defaultValue={weeklyProgram1[0]}
        className="select-mcq-container"
        classNamePrefix="select-mcq"
        isSearchable={isSearchable}
      />
    );
  };

  return (
    <>
      {step === 0 ? (
        <div>
          <Nav />

          <div className={stylesSheet.mainWrapper}>
            <div className={stylesSheet.messageAndSelectContainer}>
              <div className={stylesSheet.message}>
                <h1>מדדים לפני התוכנית</h1>
                <p className={stylesSheet.nameIdDate}>
                  {name}&emsp;/&emsp;{id}&emsp;/&emsp;{date}
                </p>
              </div>
              <div className={stylesSheet.errorMessageAndSelect}>
                <div className={stylesSheet.headerErrorMessage}>
                  <p>
                    {exclamationIcon}
                    שים לב! במידה והנך משתמש במכשיר חמצן יש להשתמש במכשיר כ-30
                    דקות לפני תחילת התרגי או כל הודעה אחרת שאתה רוצה לרשום
                  </p>
                </div>
                {console.log(selectData1)}
                <SelectComponent {...selectData1} />
              </div>
            </div>

            <div className={stylesSheet.mainContainer}>
              <TimerModal
                show={showModal}
                onHide={() => {
                  setShowModal(false);
                }}
              />
              <div className={stylesSheet.rightSide}>
                <div
                  className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite}`}
                >
                  <div className={stylesSheet.progressInfo}>
                    <span className={stylesSheet.img}>
                      <img src={progressLogo} alt="" />
                    </span>
                    <span className={stylesSheet.statisticsBreif}>
                      <h1 className={stylesSheet.exercisesNames}>
                        {total} / {completed}
                      </h1>
                      <p className={stylesSheet.disabled}>תרגילים שבועיים</p>
                    </span>
                  </div>
                </div>

                <hr />

                <article className={stylesSheet.precaution}>
                  <main>
                    <p>{precuation.para1}</p>
                    <br />
                    <p>{precuation.para2}</p>
                  </main>
                </article>

                <article className={stylesSheet.exerciseDesc}>
                  <header>
                    <p>
                      <strong> שם התרגיל בשורה אחת בלבד</strong>
                    </p>
                  </header>
                  <main>
                    <p>
                      <strong>{exerciseDesc.topic1}</strong>{" "}
                      {exerciseDesc.desc1}{" "}
                    </p>
                    <hr />

                    <p>
                      <strong>{exerciseDesc.topic2}</strong>{" "}
                      {exerciseDesc.desc2}
                    </p>
                    <hr />

                    <p>
                      <strong>{exerciseDesc.topic3}</strong>
                      {exerciseDesc.desc3.para1}
                    </p>
                    <p>{exerciseDesc.desc3.para2}</p>
                    <br />
                    <p>{exerciseDesc.desc3.para3}</p>
                    <hr />

                    <p>
                      <strong>{exerciseDesc.topic4}</strong>{" "}
                      {exerciseDesc.desc4.para1}
                    </p>
                    <br />
                    <p>{exerciseDesc.desc4.para2}</p>
                    <br />
                    <p>{exerciseDesc.desc4.para3}</p>
                    <hr />

                    <p>
                      <strong>{exerciseDesc.topic5}</strong>{" "}
                      {exerciseDesc.desc5.para1}
                    </p>
                    <p>{exerciseDesc.desc5.para2}</p>
                  </main>
                </article>
              </div>

              <div className={stylesSheet.leftSide}>
                <div>
                  <p className={stylesSheet.rowHeader}>סט מספר</p>
                  <div className={stylesSheet.questionNumbersAndBrief}>
                    <div className={stylesSheet.questionNumbersContainer}>
                      <div className={stylesSheet.questionNumbers}>
                        <div
                          className=""
                          dir="ltr"
                          style={{ textAlign: "center" }}
                        >
                          <div
                            className={`${stylesSheet.questionNumber} ${stylesSheet.completed}`}
                            // className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
                            id="q1"
                          >
                            {circleIcon}
                            <h3>1</h3>
                            {/* <CheckIcon /> */}
                          </div>
                          <div
                            className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
                            // className={`${stylesSheet.questionNumber}`}
                            id="q2"
                          >
                            {/* {circleIcon} */}
                            <h3>2</h3>
                          </div>
                          <div
                            className={`${stylesSheet.questionNumber} ${stylesSheet.next}`}
                            id="q3"
                          >
                            {/* {circleIcon} */}
                            <h3>3</h3>
                          </div>
                          <div className={stylesSheet.questionNumber} id="q4">
                            <h3>4</h3>
                          </div>
                        </div>
                        <p>בדיקת מדדים</p>
                      </div>
                      <div>
                        <p className={stylesSheet.rowHeader}>עומס</p>
                        <p>עד 45 שנ' - לנשום כמפורט בתרגיל</p>
                      </div>
                    </div>
                    <div className={stylesSheet.details}>
                      <p>
                        <strong> סט 1:</strong> Sat02% - 96 | דופק - 98
                      </p>
                    </div>
                    <div className={stylesSheet.video}>
                      <img
                        src={videoImage}
                        alt=""
                        className={stylesSheet.videoImage}
                      />
                      <img
                        src={playIcon}
                        alt=""
                        className={stylesSheet.playIcon}
                      />
                      <p className={stylesSheet.rowHeader}>
                        תרגיל לחיזוק הנשימה
                      </p>
                      <p>
                        <small>45 שניות</small>
                      </p>
                    </div>
                  </div>
                  <div className={stylesSheet.questionAnswers}>
                    <div className={stylesSheet.metricsAnswersContainer}>
                      <p className={stylesSheet.rowHeader}>
                        נא להכניס מדדים לאחר סיום סט מספר 1
                      </p>
                      <div className={stylesSheet.metricsAnswers}>
                        <div className={stylesSheet.metricsAnswer}>
                          <p className={stylesSheet.metricsQuestion}>satO2%</p>
                          <input
                            type="text"
                            placeholder="הכנס נתון"
                            disabled={areInputsDisabled}
                          />
                        </div>
                        <div className={stylesSheet.metricsAnswer}>
                          <p className={stylesSheet.metricsQuestion}>דופק HR</p>
                          <input
                            type="text"
                            placeholder="הכנס נתון"
                            disabled={areInputsDisabled}
                          />
                        </div>
                        <div className={stylesSheet.metricsAnswer}>
                          <p className={stylesSheet.metricsQuestion}>
                            מהו הקושי הפיזי? 1 - 10
                          </p>
                          <OneToTenDropDown />
                        </div>
                        <div className={stylesSheet.metricsAnswer}>
                          <p className={stylesSheet.metricsQuestion}>
                            מהו הקושי הנשימתי? 1 - 10
                          </p>
                          <OneToTenDropDown />
                        </div>
                        <div className={stylesSheet.metricsAnswer}>
                          <p className={stylesSheet.metricsQuestion}>
                            זמן התאוששות?
                          </p>
                          <input
                            type="text"
                            placeholder="הכנס נתון"
                            disabled={areInputsDisabled}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={stylesSheet.footerSubmitAndBackButton}>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setStep(2);
                    }}
                    style={{ padding: "10px 0px" }}
                  >
                    חזור
                  </a>
                  <div className={stylesSheet.footerButtons}>
                    {hasClockCompletedOnce ? (
                      <button
                        className={stylesSheet.gradient}
                        id="restartTimer"
                        style={{ marginBottom: "20px" }}
                        onClick={() => {
                          setAreInputsDisabled(true);
                          setHasClockCompletedOnce(false);
                          setStep(1);
                        }}
                      >
                        חזור על התרגיל
                      </button>
                    ) : (
                      ""
                    )}

                    <button
                      className={stylesSheet.gradient}
                      onClick={handleFooterButtonClick}
                    >
                      {areInputsDisabled ? "התחל תרגיל" : "לסט הבא"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : step === 1 ? (
        <WeeklyProgram3 />
      ) : (
        <WeeklyProgramOne />
      )}
    </>
  );
};

export default Main;
