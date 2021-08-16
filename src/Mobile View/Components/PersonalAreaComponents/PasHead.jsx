import React from "react";

const PasHead = (props) => {

  return (
    <>
      <div className="pas-1">
        <strong>{props.textA}</strong>
        <span>{props.textB}</span>
      </div>
    </>
  );
};

export default PasHead;
