import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";
import assets from "../../assets";
import { Button } from "../Button/Button";

export const Modal = ({ handleToggleModal, showModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleToggleModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, handleToggleModal]);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content" ref={modalRef}>
        <button className="close-btn" onClick={handleToggleModal}>
          <img src={assets.closeIcon} alt="close icon" />
        </button>
        <h2 className="title">
          Попробуйте наши методики на <span>бесплатной</span> консультации
        </h2>
        <form>
          <div className="input-box">
            <div className="custom-select">
              <div
                className="selected-box form-control"
                onClick={handleSelectToggle}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Класс"
                  value={selectedValue}
                  readOnly
                />
                <img src={assets.arrowDown} alt="arrow down" />
              </div>
              <div className={`select-options ${isOpen ? "show" : ""}`}>
                <div
                  className="select-option"
                  onClick={() => handleOptionClick("Value 1")}
                >
                  Value 1
                </div>
                <div
                  className="select-option"
                  onClick={() => handleOptionClick("Value 2")}
                >
                  Value 2
                </div>
                <div
                  className="select-option"
                  onClick={() => handleOptionClick("Value 3")}
                >
                  Value 3
                </div>
              </div>
            </div>
            <input type="text" placeholder="Имя" className="form-control" />
            <input
              type="tel"
              placeholder="Номер телефона"
              className="form-control"
            />
          </div>
          <span className="form-info">
            Нажимая на “записаться” вы соглашаетесь с{" "}
            <a href="https://docs.google.com/document/d/1pjuPi-5ZCOp5Ila-qE2XFker5hSD3IxU/edit" target="_blank">
              политикой обработки персональных данных
            </a>
          </span>
          <Button label="Записаться" />
        </form>
      </div>
    </div>
  );
};
