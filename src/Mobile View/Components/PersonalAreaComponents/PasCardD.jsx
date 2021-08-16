import React from "react";
// assets
import playIcon from "../../Assets/Icons/icon-play.svg";
const PasCardD = (props) => {
  return (
    <>
      <div className="pas-8">
        <div className="pas-8-1">
          <div className={`d-flex w-100 ${props.justifyContent}`}>
            <img className={props.imgClass} src={playIcon} alt="..." />
            <span>{props.textA}</span>
          </div>
          <strong>{props.textB}</strong>
          <span className="blue-bottom-border">{props.textC}</span>
        </div>
        <div className="pas-8-2">
          <img src={props.img} alt="..." />
        </div>
      </div>
    </>
  );
};

export default PasCardD;
