import React from "react";
import "./PersonalAreaSubs.css";

// assets
import manRunning from "../../Assets/Images/man running.png";
import womanSit from "../../Assets/Images/woman sit.png";
import womanTyping from "../../Assets/Images/woman typing.png";
import iconDoctor from "../../Assets/Icons/icon-doctor.svg";
import leftArrow from "../../Assets/Icons/left-arrow.svg";
import iconUploadFiles from "../../Assets/Icons/icon-upload-files.svg";
import iconAddFiles from "../../Assets/Icons/icon-add-files.svg";

// components
import PasCardA from "../../Components/PersonalAreaComponents/PasCardA";
import PasCardB from "../../Components/PersonalAreaComponents/PasCardB";
import PasCardC from "../../Components/PersonalAreaComponents/PasCardC";
import PasCardD from "../../Components/PersonalAreaComponents/PasCardD";
import PasHead from "../../Components/PersonalAreaComponents/PasHead";
import PasHeadList from "../../Components/PasHeadList";
import PasForm from "../../Components/PersonalAreaComponents/PasForm";
import Accordion from "../../Components/Accordion";

// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const PersonalAreaSubs = () => {
  // list data
  const personalAreaSubList = [
    {
      text: "מפגש עם רופא",
      icon: iconDoctor,
      arrowIcon: leftArrow,
      disable: "false",
      route: "/",
    },
    {
      text: "ייעוץ אונליין",
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
        <PasHead
          textA="שלום, שלומי שושנה"
          textB="כניסתך האחרונה הייתה ב-22.6.2020"
        />
        <Accordion />
        {/* mapping list data */}
        {personalAreaSubList.map((list, id) => {
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
                className="pas-4-1"
                textA="מדריכים"
                textB="איך מבצעים נשימה נכונה, המדריך המלא"
                textC="קראו עוד"
                bgBody="bg-blue"
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

        <hr />
        <div className="pas-text">
          <strong>משימות שבועיות</strong>
        </div>
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
        <hr />
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
        <hr />
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-lightgreen"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          imgClass="pass-img"
          imgText="✓"
          imgBodyBg="bg-lightgreen"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border"
          buttonBgA="pass-btn-show"
        />
        <hr />
        <PasCardB
          className="pas-4-1 pas-4-2 pas-5"
          headBg="bg-light-red"
          bodyBg="bg-white"
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          imgClass="pass-img"
          imgText="!"
          imgBodyBg="bg-light-red"
          buttonText="התחל עכשיו"
          buttonBg="pas-btn pas-btn-border"
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
          textA="תכנית שבועית"
          textB="כאן יבואו כמה מילים על תרגילים לחיזוק שרירי הנשימה"
          buttonText="התקשרו"
          buttonTextA="כתבו לנו"
          buttonBg="pas-btn pas-btn-border"
          buttonBgA="pass-btn-show pas-btn pas-btn-border"
        />

        <PasCardC
          className="pas-4-1 pas-4-2"
          textA="המלצה רופא 03"
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
          textB="איך לעשות תרגילי נשימה מהבית"
          textC="קראו עוד"
          imgClass="d-none"
          justifyContent="justify-content-end"
          img={manRunning}
        />
        <PasCardD
          className="pas-8"
          textA="22.6.2021"
          textB="איך לעשות תרגילי נשימה מהבית"
          textC="קראו עוד"
          imgClass="d-block"
          justifyContent="justify-content-between"
          img={womanSit}
        />
        <PasCardD
          className="pas-8"
          textA="22.6.2021"
          textB="איך לעשות תרגילי נשימה מהבית"
          textC="קראו עוד"
          imgClass="d-block"
          justifyContent="justify-content-between"
          img={womanTyping}
        />
      </div>
    </>
  );
};

export default PersonalAreaSubs;
