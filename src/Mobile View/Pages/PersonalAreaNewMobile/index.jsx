import React from "react";
// component
import PasHead from "../../Components/PersonalAreaComponents/PasHead";
import Accordion from "../../Components/Accordion";
import PasHeadList from "../../Components/PasHeadList";
import PasCardB from "../../Components/PersonalAreaComponents/PasCardB";
import PasCardD from "../../Components/PersonalAreaComponents/PasCardD";
import PasCardC from "../../Components/PersonalAreaComponents/PasCardC";
// assets
import iconDoctorOff from "../../Assets/Icons/icon-doctor-off.svg";
import iconAddFiles from "../../Assets/Icons/icon-add-files.svg";
import iconUploadFiles from "../../Assets/Icons/icon-upload-files.svg";
import leftArrow from "../../Assets/Icons/left-arrow.svg";
import manRunning from "../../Assets/Images/man running.png";
import womanSit from "../../Assets/Images/woman sit.png";
import womanTyping from "../../Assets/Images/woman typing.png";

const PersonalAreaNewMobile = () => {
  // list data
  const personalAreaNewMob = [
    {
      text: "מפגש עם רופא",
      icon: iconDoctorOff,
      arrowIcon: leftArrow,
      disable: "true",
      route: "/",
    },
    {
      text: "אבחון נשימתי פיזי",
      icon: iconAddFiles,
      arrowIcon: leftArrow,
      disable: "false",
      route: "/",
    },
    {
      text: "העלאת קבצים",
      icon: iconUploadFiles,
      arrowIcon: leftArrow,
      disable: "false",
      route: "/inbox-reply",
    },
  ];
  return (
    <>
      <div className="personal-area-subs">
        <PasHead textA="שלום, שלומי שושנה" textB="ברוך הבא לאזור האישי שלך" />
        <Accordion />
        {/* mapping list data */}
        {personalAreaNewMob.map((list, id) => {
          return (
            <div key={id}>
              <PasHeadList
                text={list.text}
                icon={list.icon}
                arrowIcon={list.arrowIcon}
                disable={list.disable}
                route={list.route}
              />
            </div>
          );
        })}
        <hr />
        <div className="pas-text">
          <strong>משימות שבועיות</strong>
          <span>כדי לראות את המשימות השבועיות שלך, יש להרשם</span>
        </div>
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-gray"
          bodyBg="bg-white"
          textA="תכנית עומס"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border gray-border text-gray"
          buttonBgA="pass-btn-show"
        />
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-gray"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border gray-border text-gray"
          buttonBgA="pass-btn-show"
        />
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-gray"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border gray-border text-gray"
          buttonBgA="pass-btn-show"
        />
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-gray"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          imgClass="pass-img"
          imgText="!"
          imgBodyBg="bg-gray"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border gray-border text-gray"
          buttonBgA="pass-btn-show"
        />
        <hr />
        <div className="pas-text">
          <strong>הודעות</strong>
        </div>
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5 pass-6"
          headBg="bg-blue"
          bodyBg="bg-white"
          textA="צרו קשר"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התקשרו"
          buttonTextA="כתבו לנו"
          buttonBg="pas-btn pas-btn-border"
          buttonBgA="pass-btn-show pas-btn pas-btn-border"
        />

        <PasCardC
          className="pas-4-1 pas-4-2"
          textA="הודעות"
          textB="היום כדאי לנוח חצי שעה לפני תחילת התרגילים היומיים"
          textC="כל ההודעות"
          bgBody="bg-white"
          border="blue-bottom-border"
          imgClass="pass-img"
          imgText="54"
          imgBodyBg="bg-light-red"
        />
        <div className="pas-text">
          <strong>עדכונים</strong>
        </div>
        <PasCardD
          className="pas-8"
          textA="22.6.2021"
          textB="תרגילי נשימה לספורטאים שנפגעו"
          textC="קראו עוד"
          imgClass="d-none"
          justifyContent="justify-content-end"
          img={manRunning}
        />
        <PasCardD
          className="pas-8"
          textA="22.6.2021"
          textB="תרגילי נשימה לספורטאים שנפגעו"
          textC="קראו עוד"
          imgClass="d-block"
          justifyContent="justify-content-between"
          img={womanSit}
        />
        <PasCardD
          className="pas-8"
          textA="22.6.2021"
          textB="תרגילי נשימה לספורטאים שנפגעו"
          textC="קראו עוד"
          imgClass="d-block"
          justifyContent="justify-content-between"
          img={womanTyping}
        />
      </div>
    </>
  );
};

export default PersonalAreaNewMobile;
