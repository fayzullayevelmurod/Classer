import React from "react";
import "./Tabs.scss";

export const Tabs = ({ tabItems }) => {
  return (
    <ul className="tabs">
      {tabItems?.map((item, idx) => (
        <li key={idx} className={`tab-item ${idx == [0] ? "active" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};
