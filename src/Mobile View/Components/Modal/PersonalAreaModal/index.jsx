import React, { useState } from "react";
import "./style.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import iconX from "../../../Assets/Icons/icon-x.svg";

const PersonalAreaModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div>
        <strong onClick={toggle} className="ms-5">
          צור קשר
        </strong>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="pa-modal"
        backdrop="static"
      >
        <ModalHeader className="pa-header">
          <img onClick={toggle} src={iconX} alt="..." />
        </ModalHeader>
        <ModalBody>
          <div className="wp-3 wpm-3">
            <strong>נשמח לשמוע ממכם בכל עניין</strong>
          </div>
          <div className="q2-box-2 wp-4">
            <div className="q2-input-box">
              <h5>שם</h5>
              <div>
                <input type="text" placeholder="|" />
              </div>
            </div>
            <div className="q2-input-box">
              <h5>כתובת אימייל</h5>
              <div>
                <input type="text" placeholder="|" />
              </div>
            </div>
            <div className="q2-input-box">
              <h5>משפחה</h5>
              <div>
                <input type="text" placeholder="|" />
              </div>
            </div>
            <div className="q2-input-box">
              <h5>טלפון</h5>
              <div>
                <input type="text" placeholder="|" />
              </div>
            </div>
            <div className="q2-input-box">
              <h5>הודעה</h5>
              <div>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="qm-box3">
          <button onClick={toggle} className="qm-active-btn">
            שלח
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PersonalAreaModal;
