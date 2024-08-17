import React from "react";
import "./Tabs.scss";

export const Tabs = ({ tabItems, onTabClick, activeIndex, getClassName }) => {
  return (
    <ul className="tabs">
      {tabItems?.map((item, idx) => (
        <li
          key={idx}
          className={`tab-item ${getClassName ? getClassName(item, idx) : ""} ${
            activeIndex === idx ? "active" : ""
          }`}
          onClick={() => onTabClick(idx)}
        >
          {typeof item === "string" ? item : item.label}
        </li>
      ))}
    </ul>
  );
};
