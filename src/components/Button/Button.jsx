import React from "react";
import "./buttons.scss";

export const Button = ({ className, label, onClick }) => {
  return (
    <button className={`${className} orange-btn`} onClick={onClick}>
      {label}
    </button>
  );
};
