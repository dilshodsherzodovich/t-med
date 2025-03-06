import React from "react";
import "./spinners.scss";

const LoadingSpinner = ({ isMini = false, style }) => (
  <div className="loading-spinner" style={style}>
    <div className={`spinner ${isMini ? "mini mb-0" : ""}`}></div>
  </div>
);

export default LoadingSpinner;
