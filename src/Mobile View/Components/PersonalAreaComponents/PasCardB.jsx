import React from "react";

const PasCardB = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className={props.imgClass}>
          <div className={props.imgBodyBg}>{props.imgText}</div>
        </div>
        <div className={`pas-4-1a ${props.headBg}`}>
          <span>{props.textA}</span>
        </div>
        <div className={`pas-4-1b ${props.bodyBg}`}>
          <strong>{props.textB}</strong>
          <div>
            <button className={`${props.buttonBg}`}>{props.buttonText}</button>
            <button className={`${props.buttonBgA}`}>
              {props.buttonTextA}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasCardB;
