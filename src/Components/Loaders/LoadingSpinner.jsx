import React from "react";
import "./spinners.scss";

const LoadingSpinner = ({ isMini = false }) => (
  <div className="loading-spinner">
    <div className={`spinner ${isMini ? "mini" : ""}`}></div>
  </div>
);

export default LoadingSpinner;
