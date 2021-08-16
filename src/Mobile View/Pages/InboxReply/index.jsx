import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./InboxReply.css";
// assets
import pdfIcon from "../../Assets/Icons/pdf-icon.svg";

const InboxReply = () => {
  const [text, settext] = useState("");

  const history = useHistory();

  // this function for showing text area data on console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <>
      <div className="inbox-reply">
        <div className="ibox-1">
          <strong>שלום, שלומי שושנה</strong>
          <span>ברוך הבא לאזור האישי שלך</span>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="irbox-1">
            <div>
              <span onClick={() => history.goBack()}>ביטול</span>
            </div>
            <div className="justify-content-end d-flex">
              {/* upload file icon */}
              <div className="cus-form">
                <input
                  className="file-input-3"
                  type="file"
                  id="myfile"
                  name="myfile"
                />
                <button type="submit">שלח</button>
              </div>
            </div>
          </div>
          <textarea
            value={text}
            placeholder="ככה תראה הודעה שהלוקח יכתוב…"
            className="irbox-2"
            onChange={(e) => settext(e.target.value)}
          ></textarea>
        </form>

        <div className="irbox-3">
          <span>
            <strong>2</strong> קבצים מצורפים
          </span>
          <div className="d-flex align-items-center justify-content-between mt-3">
            {/* upload file button */}
            <button>
              <input className="file-input-1" type="file" />
              <img src={pdfIcon} alt="..." />
            </button>
            {/* upload file button */}
            <button>
              <input className="file-input-2" type="file" />
              <img src={pdfIcon} alt="..." />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxReply;
