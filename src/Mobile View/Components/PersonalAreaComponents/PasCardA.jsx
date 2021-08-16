import React from "react";

const PasCardA = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="pas-4-1a">
          <span className={props.textColorA}>{props.textA}</span>
        </div>
        <div className={`pas-4-1b ${props.bgBody}`}>
          <div
            className="d-flex justify-content-end"
            style={{ height: "100px" }}
          >
            <strong className={props.textColorB}>{props.textB}</strong>
          </div>
          <span className={`${(props.textColorC, props.border)}`}>
            {props.textC}
          </span>
        </div>
      </div>
    </>
  );
};

export default PasCardA;
