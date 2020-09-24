import React from "react";

import "./style.scss";

const Type = (props) => {
  return (
    <div className={`type ${props.type.toLowerCase()}`}>
      {props.type !== "unknown" ? props.type : "???"}
    </div>
  );
};

export default Type;
