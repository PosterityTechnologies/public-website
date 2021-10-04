import React from "react";
import classnames from "classnames";

export const TYPES = {
  DOTS: "dots",
  CIRCLES: "circles",
  LINE: "line",
  SQUARE: "square",
};

const AccentIcon = ({ type, cssClass }) => (
  <div className={classnames("accent-icon-container", cssClass)}>
    <div className={classnames("accent-icon", type)}></div>
  </div>
);

export default AccentIcon;
