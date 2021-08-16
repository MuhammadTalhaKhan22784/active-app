import React from "react";
import "./PersonalAreaTryMobile.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// components
import PasCardA from "../../Components/PersonalAreaComponents/PasCardA";
import PasHead from "../../Components/PersonalAreaComponents/PasHead";
import PasHeadList from "../../Components/PasHeadList";

// assets
import iconDoctorOff from "../../Assets/Icons/icon-doctor-off.svg";
import iconAddFilesOff from "../../Assets/Icons/icon-add-files-off.svg";
import iconUploadFiles from "../../Assets/Icons/icon-upload-files.svg";
import leftArrow from "../../Assets/Icons/left-arrow.svg";
import leftArrowOff from "../../Assets/Icons/left-arrow-off.svg";
import PasCardB from "../../Components/PersonalAreaComponents/PasCardB";
import PasCardD from "../../Components/PersonalAreaComponents/PasCardD";
import PasCardC from "../../Components/PersonalAreaComponents/PasCardC";
import manRunning from "../../Assets/Images/man running.png";
import womanSit from "../../Assets/Images/woman sit.png";
import womanTyping from "../../Assets/Images/woman typing.png";
import Accordion from "../../Components/Accordion";
import PasForm from "../../Components/PersonalAreaComponents/PasForm";

const PersonalAreaTryMobile = () => {
  // list data
  const personalAreaTryMob = [
    {
      text: "מפגש עם רופא",
      icon: iconDoctorOff,
      arrowIcon: leftArrowOff,
      disable: "true",
      route: "/",
    },
    {
      text: "ייעוץ אונליין",
      icon: iconAddFilesOff,
      arrowIcon: leftArrowOff,
      disable: "true",
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
        <PasHead
          textA="שלום, שלומי שושנה"
          textB="כניסתך האחרונה הייתה ב-22.6.2020"
        />
        <Accordion />
        {/* mapping list data */}
        {personalAreaTryMob.map((list, id) => {
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
        <PasForm />
        <hr />

        <div className="pas-4">
          {/* slider or carousel*/}

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ disableOnInteraction: false, delay: 2500 }}
          >
            <SwiperSlide>
              <PasCardA
                className="pas-4-1 bg-white pam-try"
                textA="מדריכים"
                textB="איך מבצעים נשימה נכונה, המדריך המלא"
                textC="קראו עוד"
                bgBody="bg-white"
                border="lightgreen-bottom-border"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PasCardA
                className="pas-4-1 pas-4-2"
                textA="המלצה רופא 03"
                textB="היום כדאי לנוח חצי שעה לפני תחילת התרגילים היומיים"
                textC="קראו עוד"
                bgBody="bg-white"
                border="blue-bottom-border"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="pas-text">
          <strong>משימות שבועיות</strong>
        </div>
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5 text-gray"
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
          headBg="bg-blue"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn bg-linearlightgreen"
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

export default PersonalAreaTryMobile;
