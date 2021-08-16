import React, { useState } from "react";
import "./style.css";

// assets
import loadStar from "../../../Assets/Images/load-star.svg";
import videoIcon from "../../../Assets/Icons/icon-play-on-video.svg";
import leftArrow from "../../../Assets/Icons/left-arrow.svg";
import downArrow from "../../../Assets/Icons/left-arrow.svg";
import sosImg from "../../../Assets/Images/sos-normal.svg";

// extra

import SelectComponent from "../../../../assets/components/selectComponent";
// import { SelectForMCQ5 } from '../../assets/components/selectComponentForMultipleChoices'
import Select from "react-select";

//componentsData
import selectData1 from "../../../../assets/componentsData/selectDataForHeaderMessage";
import { weeklyProgram1 } from "../../../../assets/componentsData/selectDataForMultipleChoices";

//modal
import { Modal } from "react-bootstrap";
import "../../../../assets/css/bootstrap/bootstrap.min.css";

import Countdown from "react-countdown";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import progressLogo from "../../../../assets/svgs/progress.svg";
import videoImage from "../../../../assets/images/group-6.png";
import playIcon from "../../../../assets/svgs/playIcon.svg";

//css
import stylesSheet from "../../../../screens/1weeklyProgramTimer/wptimer.module.css";

import "../../../../screens/1weeklyProgramTimer/timerModal.css";
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

const completed = 1;
const total = 4;

const WeeklyProgram1 = ({ stepperNextFunc }) => {
  // inputs data
  const data = [
    { text: "1 ליטרים", id: "01" },
    { text: "1.5 ליטרים", id: "02" },
    { text: "2 ליטרים", id: "03" },
    { text: "2.5 ליטרים", id: "04" },
    { text: "3 ליטרים", id: "05" },
    { text: "3.5 ליטרים", id: "06" },
    { text: "4 ליטרים", id: "07" },
    { text: "4.5 ליטרים", id: "08" },
    { text: "5 ליטרים", id: "09" },
    { text: "מעל 5 ל'", id: "10" },
  ];
  // input data for number dropdown
  const data2 = [
    { text: "1", id: "01" },
    { text: "2", id: "02" },
    { text: "3", id: "03" },
    { text: "4", id: "04" },
    { text: "5", id: "05" },
    { text: "6", id: "06" },
    { text: "7", id: "07" },
    { text: "8", id: "08" },
    { text: "9", id: "09" },
    { text: "10", id: "10" },
  ];
  // video card data
  const cardData = [
    {
      circleImgClass: "vc-circle-img d-none",
      spanText: "45 שניות",
      StrongText: "תרגיל לחיזוק הנשימה",
      btnClasses:
        "text-white bg-linearlightgreen no-border border-radius-26 padding-15",
    },
  ];
  // states
  // dropdown 1 state
  const [openDropDown1, setOpenDropDown1] = useState(false);
  // dropdown 2 state
  const [openDropDown2, setOpenDropDown2] = useState(false);
  // dropdown 3 state
  const [openDropDown3, setOpenDropDown3] = useState(false);

  // select dropdown 1 options
  const [selectValue1, setSelectValue1] = useState("כמות חמצן בזמן פעולה");
  // select dropdown 2 options
  const [selectValue2, setSelectValue2] = useState("1");
  // select dropdown 3 options
  const [selectValue3, setSelectValue3] = useState("1");

  // seting input disable and enable
  const [disable, setDisable] = useState(true);

  // select options text from dropdown1
  const handleDropdown1 = (e) => {
    setSelectValue1(e);
    if (openDropDown1) {
      setOpenDropDown1(false);
    }
  };
  // open dropdown func1
  const handleSelectOpen1 = () => {
    setOpenDropDown1(!openDropDown1);
  };

  // select options text from dropdown2
  const handleDropdown2 = (e) => {
    setSelectValue2(e);
    if (openDropDown2) {
      setOpenDropDown2(false);
    }
  };

  // open dropdown func2
  const handleSelectOpen2 = () => {
    setOpenDropDown2(!openDropDown2);
  };

  // select options text from dropdown3
  const handleDropdown3 = (e) => {
    setSelectValue3(e);
    if (openDropDown3) {
      setOpenDropDown3(false);
    }
  };

  // open dropdown func3
  const handleSelectOpen3 = () => {
    setOpenDropDown3(!openDropDown3);
  };
  // extra2

  const isSearchable = false;
  const [areInputsDisabled, setAreInputsDisabled] = React.useState(true);
  const [hasClockCompletedOnce, setHasClockCompletedOnce] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFooterButtonClick = () => {
    if (hasClockCompletedOnce) {
    } else setShowModal(true);
  };

  // timer modal
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

  return (
    <>
      <div className="pas-3-1 wp-1">
        <div className="d-flex flex-column align-items-center">
          {/* <span>השבוע ביצעת</span> */}
          <span>
            <strong className="str-1">1</strong>
            <strong className="str-2">/4</strong>
          </span>
          <span>תרגילים שבועיים</span>
        </div>
        <div className="d-flex">
          <img src={loadStar} alt="..." />
        </div>
      </div>
      <hr />
      <div className="wp-11">
        <strong>עומס</strong>
        <span>עד 45שנ' - לנשום כמפורט בתרגיל</span>
      </div>
      <hr />
      <div className="wp-2">
        <p>
          במידה ובכל שלב של מהלך הפעילות הסיטורציה יורדת ונשארת מתחת ל90% ו/או
          מופיעה הרגשה של אי נוחות/ סחרחורת/חולשה או אפילו כאב, יש להפסיק את
          הפעילות ולשקול לפנות לייעוץ רפואי.
        </p>
        <br />
        <p>
          נא לקרוא את ההוראות בפירוט לפני ביצוע כל תרגיל, ולשים לב לאופן הנשימה
          המצוין בביצוע המאמץ.
        </p>
      </div>

      <div className="wp-3">
        <strong>שם התרגיל בשורה אחת בלבד</strong>
        <p>
          <strong>תאור התרגיל:</strong> בעמידה במקום, יש להתחיל לצעוד ולנסות
          להגיע עם הברכיים עד לגובה של הליכה טבעית. קצב הפעילות יהיה קבוע, לא
          מהיר ולא איטי מידי, במידה והקושי מתגבר, ניתן להאט את קצב ההליכה
        </p>
        <br />
        <p>
          <strong>ביצוע:</strong> כל סט יבוצע במשך זמן מוגדר בלבד, במידה וקיים
          קושי ניתן להקטין את הזמן.
        </p>
        <br />
        <p>
          <strong>אופן נשימה: </strong>לשאוף אוויר בתחילת הפעילות, לנסות להגיע
          לנפח ריאות מלא
        </p>
        <br />
        <p>
          יש לנשוף את האוויר החוצה לאורך 5 צעדים, ומיד לאחר מכן לשאוף אוויר מחדש
          ולהמשיך שוב
        </p>
        <br />
        <p>לא לעצור את הפעילות בשביל לשאוף אוויר חדש, אלא תוך כדי פעילות</p>
        <br />
        <p>
          <strong>אופן מדידה:</strong> יש לשבת מיד לאחר סיום הפעילות ולהכניס את
          האצבע למכשיר כבוי כך שהאצבע נכנסת כמעט עד הסוף, ולאחר מכן להדליק את
          המכשיר
        </p>
        <br />
        <p>
          בשלב זה המכשיר יציג תוצאה ראשונית, יש להמתין פרק זמן קצר יחסית, עד
          קבלת תוצאת מדידה סופית
        </p>
        <br />
        <p>זאת אומרת, לבצע רישום ברגע שהמספרים מתייצבים ואין שינוי</p>
        <br />
        <p>
          <strong>התאוששות:</strong> לאחר כל משך זמן פעילות, יש להמתין דקה וחצי
          עד 2 דקות - או- להמתין עד שהדופק, הסיטורציה והנשימה מסתדרים לגמרי, ורק
          אז להתחיל שוב
        </p>
        <br />
        <p>
          **במידה ומתקבלת בכל שלב של הפעילות תוצאה סופית של סיטורציה נמוכה מ90%
          - יש להפסיק את הפעילות, וליידע אותי
        </p>
      </div>

      <hr />
      <div className={stylesSheet.mainContainer}>
        <TimerModal
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
        />
      </div>
      <div className="emp-2 wp-4">
        {cardData.map((list, id) => {
          return (
            <div key={id}>
              <div className="video-card">
                <div className="vc-main-img position-relative">
                  <img
                    className={list.circleImgClass}
                    src={list.circleImg}
                    alt="..."
                  />
                  <img className="vc-icon" src={videoIcon} alt="..." />
                </div>
                <div className="vc-content">
                  <strong className="text-blue">{list.StrongText}</strong>
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <span className="text-blue">{list.spanText}</span>
                    <img src={leftArrow} alt="..." />
                  </div>
                </div>
              </div>
              <hr />
              <div className="q2-box-2">
                <div className="q2-input-box">
                  <strong>נא להכניס מדדים לאחר סיום סט מספר 1</strong>
                  <h5>satO2%</h5>
                  <div>
                    <input
                      disabled={disable}
                      type="text"
                      placeholder="הכנס נתון"
                    />
                  </div>
                </div>
                <div className="q2-input-box">
                  <h5>דופק HR</h5>
                  <div>
                    <input
                      type="text"
                      disabled={disable}
                      placeholder="הכנס נתון"
                    />
                  </div>
                </div>
                <h5>מהו הקושי הפיזי? 1 - 10</h5>
                <div className="qm-box-4">
                  <div onClick={handleSelectOpen1}>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      {!disable ? (
                        <img
                          style={{
                            transform:
                              openDropDown1 === true
                                ? "rotate(90deg)"
                                : "rotate(-90deg)",
                          }}
                          src={downArrow}
                          alt="..."
                        />
                      ) : (
                        <img
                          style={{
                            transform:
                              openDropDown1 === true && !disable
                                ? "rotate(90deg)"
                                : "rotate(-90deg)",
                          }}
                          src={downArrow}
                          alt="..."
                        />
                      )}
                      <span>{selectValue1}</span>
                    </div>
                    {openDropDown1 && !disable ? (
                      <ul className="dropdown-list">
                        {data2.map((val) => {
                          return (
                            <li
                              key={val.id}
                              onClick={() => handleDropdown1(val.text)}
                            >
                              {val.text}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div className="d-none"></div>
                    )}
                  </div>
                </div>
                <h5>מהו הקושי הנשימתי? 1 - 10</h5>
                <div className="qm-box-4">
                  <div onClick={handleSelectOpen2}>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <img
                        style={{
                          transform:
                            openDropDown2 === true
                              ? "rotate(90deg)"
                              : "rotate(-90deg)",
                        }}
                        src={downArrow}
                        alt="..."
                      />
                      <span>{selectValue2}</span>
                    </div>
                    {openDropDown2 ? (
                      <ul className="dropdown-list">
                        {data2.map((val) => {
                          return (
                            <li
                              key={val.id}
                              onClick={() => handleDropdown2(val.text)}
                            >
                              {val.text}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div className="d-none"></div>
                    )}
                  </div>
                </div>

                <h5>זמן התאוששות?</h5>
                <div className="qm-box-4">
                  <div onClick={handleSelectOpen3}>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <img
                        style={{
                          transform:
                            openDropDown3 === true
                              ? "rotate(90deg)"
                              : "rotate(-90deg)",
                        }}
                        src={downArrow}
                        alt="..."
                      />
                      <span>{selectValue3}</span>
                    </div>
                    {openDropDown3 ? (
                      <ul className="dropdown-list">
                        {data.map((val) => {
                          return (
                            <li
                              key={val.id}
                              onClick={() => handleDropdown3(val.text)}
                            >
                              {val.text}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div className="d-none"></div>
                    )}
                  </div>
                </div>
              </div>

              <div className={stylesSheet.footerSubmitAndBackButton}>
                <a href="" style={{ padding: "10px 0px" }}>
                  חזור
                </a>
                <div className={`${stylesSheet.footerButtons} ft-btns`}>
                  {hasClockCompletedOnce ? (
                    <button
                      className={stylesSheet.gradient}
                      id="restartTimer"
                      style={{ marginBottom: "20px" }}
                      onClick={stepperNextFunc}

                      // setAreInputsDisabled(true);
                      // setHasClockCompletedOnce(false);
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
                    התחל תרגיל
                  </button>
                </div>
              </div>

              {/* <div className="qm-box3">
                <button className="qm-active-btn">המשך</button>
                <span>חזור</span>
              </div> */}
              <img className="qm-img" src={sosImg} alt="..." />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeeklyProgram1;
