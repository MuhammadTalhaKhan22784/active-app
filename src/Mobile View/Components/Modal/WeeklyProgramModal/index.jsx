import React, { useState } from "react";
import "./style.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
// assets
import alertIcon from "../../../Assets/Icons/icon-alert.svg";

const WeeklyProgramModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div>
        <span onClick={toggle}>הגדרות</span>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="wp-modal"
        backdrop="static"
      >
        <ModalHeader className="wpm-header">
          <div>
            <span>צור קשר</span>
          </div>
          <div style={{ direction: "rtl" }}>
            <img src={alertIcon} alt="..." />
            <strong className="me-4">הזהרה!</strong>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="wp-3 wpm-3">
            <strong>היי, שלומי שושנה</strong>
            <p>
              <strong>דופק המנוחה גבוה מהרצוי</strong>, נא לשבת עוד מספר דקות
              ולבצע בדיקה נוספת.
            </p>
            <p>
              במידה ולאחר בדיקה שניה המדדים עדיין גבוהים - נא לסגור את התכנית
              וליצור איתי קשר.
            </p>
            <p>
              <strong>הסיטורציה במנוחה נמוכה מהרצוי,</strong> נא לשבת עוד מספר
              דקות ולבצע בדיקה נוספת.
            </p>
            <p>
              במידה ולאחר בדיקה שניה המדדים עדיין נמוכים - נא לסגור את התכנית
              וליצור איתי קשר.
            </p>
          </div>
          <div className="q2-box-2 wp-4">
            <div className="q2-input-box">
              <h5>SATO2%</h5>
              <div>
                <input type="text" placeholder="הכנס נתון" />
              </div>
            </div>
            <div className="q2-input-box">
              <h5>דופק HR</h5>
              <div>
                <input type="text" placeholder="הכנס נתון" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="qm-box3">
          <button onClick={toggle} className="qm-active-btn">
            המשך
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default WeeklyProgramModal;
