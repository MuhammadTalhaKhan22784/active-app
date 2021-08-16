import React from "react";
import PasHead from "../../Components/PersonalAreaComponents/PasHead";
import Accordion from "../../Components/Accordion";
// assets
import loadStar from "../../Assets/Images/load-star.svg";
import videoIcon from "../../Assets/Icons/icon-play-on-video.svg";
import circleTick from "../../Assets/Icons/icon-v-copy.svg";
import circleAlert from "../../Assets/Icons/icon-alert.svg";
import "./ExercisePageMain.css";
const ExercisePageMain = () => {
  const cardData = [
    {
      circleImg: circleTick,
      circleImgClass: "vc-circle-img",
      spanText: "תרגיל מספר 1",
      StrongText: "נשימות בסיבוב הגוף",
      paraText: "מפעיל ומחזק את הסרעפת, הבטן, הטחול, הלבלב, הלב והכבד…",
      lightText: "משך התרגיל - 20 דקות",
      btnText: "חזור על התרגיל",
      btnClasses:
        "text-lightpurple bg-transparent lightpurple-border border-radius-26 padding-15",
    },
    {
      circleImg: circleAlert,
      circleImgClass: "vc-circle-img",
      spanText: "תרגיל מספר 1",
      StrongText: "נשימות בסיבוב הגוף",
      paraText: "מפעיל ומחזק את הסרעפת, הבטן, הטחול, הלבלב, הלב והכבד…",
      lightText: "משך התרגיל - 20 דקות",
      btnText: "חזור על התרגיל",
      btnClasses:
        "text-white bg-light-red no-border border-radius-26 padding-15",
    },
    {
      circleImg: circleAlert,
      circleImgClass: "vc-circle-img d-none",
      spanText: "תרגיל מספר 1",
      StrongText: "נשימות בסיבוב הגוף",
      paraText: "מפעיל ומחזק את הסרעפת, הבטן, הטחול, הלבלב, הלב והכבד…",
      lightText: "משך התרגיל - 20 דקות",
      btnText: "חזור על התרגיל",
      btnClasses:
        "text-white bg-linearlightgreen no-border border-radius-26 padding-15",
    },
  ];
  return (
    <>
      <div className="exercise-page-main">
        <PasHead
          textA="תרגילים לחיזוק הנשימה ושרירי עזר בבית החזה והסרעפת"
          textB={
            <div className="qm1-head mt-2">
              <strong style={{ fontSize: "1rem" }}>שלומי שושנה</strong>
              <span> / </span> 63485408 <span>/</span>
              22.6.2020
            </div>
          }
        />
        <Accordion />
        <div className="pas-3 qm-1">
          <div className="pas-3-1">
            <div className="d-flex flex-column align-items-center">
              <span>השבוע ביצעת</span>
              <span>
                <strong className="str-1">1</strong>
                <strong className="str-2">/20</strong>
              </span>
              <span>תרגילים שבועיים</span>
            </div>
            <div className="d-flex">
              <img src={loadStar} alt="..." />
            </div>
          </div>
          <hr />
          <div className="epm-1">
            <div>
              <strong>
                במידה ובכל שלב של הפעילות מופיעה הרגשה של אי נוחות/סחרחורת/חולשה
                או אפילו כאב, יש להפסיק את הפעילות ולשקול לפנות לייעוץ רפואי
              </strong>
            </div>
            <div>
              <strong>יש לקרוא את ההוראות בפירוט לפני ביצוע כל תרגיל</strong>
            </div>
            <ul>
              <li>
                <span>
                  <b>1.</b> את התרגילים ניתן ורצוי לבצע על בסיס יומי, מתי שנח
                  לכם, בכל שעה של היום.
                </span>
              </li>
              <li>
                <span>
                  <b>2.</b> תכנית זו היא לא תחליף לתכנית השבועית , אלא
                  בנוסף.(ניתן לבצע את התכנית הזו ממש לפני או אחרי לתכנית
                  השבועית, וניתן לעשות אותה בהפרש של כמה שעות - מתי שאתם מרגישים
                  הכי נח).
                </span>
              </li>
              <li>
                <span>
                  <b>3.</b> רצוי לא לבצע את כל התרגילים בתכנית זו, אלא - מומלץ
                  לבחור 2 או 3 תרגילים בכל פעם ולגוון.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="emp-2">
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
                    <span className="text-blue">{list.spanText}</span>
                    <strong className="text-blue">{list.StrongText}</strong>
                    <p className="text-blue">{list.paraText}</p>
                    <h5 className="text-blue">{list.lightText}</h5>
                    <button className={list.btnClasses}>{list.btnText}</button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExercisePageMain;
