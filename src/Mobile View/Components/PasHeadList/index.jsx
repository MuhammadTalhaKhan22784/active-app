import React from "react";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <>
      <div className="pas-2">
        <div>
          <img src={props.arrowIcon} alt="..." />
        </div>
        <div className="d-flex align-items-center">
          <span
            className={props.disable === "false" ? "text-blue" : "text-gray"}
          >
            {props.text}
          </span>
          <Link to={props.route}><img src={props.icon} alt="..." /></Link>
        </div>
      </div>
    </>
  );
};

export default index;
