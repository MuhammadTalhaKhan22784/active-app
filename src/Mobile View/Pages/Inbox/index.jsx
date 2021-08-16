import React from "react";
import "./Inbox.css";
// assets
import zip from "../../Assets/Icons/zip.svg";

const Inbox = () => {
  // all ibox list data
  const list = [
    {
      background: "bg-light-blue",
      dotBg: "bg-lightgreen",
      bgBox: "bg-bluegreen",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "בקשה",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-lightgreen",
      bgBox: "bg-light-red",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "דחוף",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-transparent",
      bgBox: "bg-light-red",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "דחוף",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-lightgreen",
      bgBox: "bg-light-red",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "דחוף",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-transparent",
      bgBox: "bg-light-red",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "דחוף",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-transparent",
      bgBox: "bg-light-red",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "דחוף",
    },
    {
      background: "bg-light-blue",
      dotBg: "bg-lightgreen",
      bgBox: "bg-purple",
      time: "17:25",
      text: "אוהד אוחנה",
      strongText: "יש לך עדכון תכנית גש לאזור האישי",
      boxText: "תשובה",
    },
  ];

  return (
    <>
      <div className="ibox-1">
        <strong>שלום, שלומי שושנה</strong>
        <span>ברוך הבא לאזור האישי שלך</span>
      </div>
      <div className="ibox-2">
        <div>44</div>
        <span>הודעות שלא נקראו</span>
      </div>
      {/* showing inbox list data */}
      {list.map((list, id) => {
        return (
          <div key={id} className={`ibox-3 ${list.background}`}>
            <div className="row w-100 align-items-center">
              <div className="col-6 col-sm-6 col-md-6 text-center">
                <span>{list.time}</span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 ">
                <div className="d-flex align-items-center justify-content-end">
                  <span>{list.text}</span>
                  <div className={`dot ms-2 ${list.dotBg}`}></div>
                </div>
              </div>
            </div>
            <div className="row w-100 pe-3">
              <strong>{list.strongText}</strong>
            </div>
            <div className="ibox3-1 mt-2">
              <img src={zip} alt="..." />
              <div className={`green-box ${list.bgBox}`}>{list.boxText}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inbox;
