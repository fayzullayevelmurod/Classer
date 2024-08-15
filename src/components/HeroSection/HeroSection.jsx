import React, { useEffect, useState } from "react";
import { Button } from "../";
import "./HeroSection.scss";
import assets from "../../assets";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <section className="intro">
      <div className="container">
        <h1 className="intro-title">
          Класстер -{" "}
          <span>
            <AnimatedText duration={1000} delay={500} />
          </span>
        </h1>
      </div>

      <div className="consultations">
        <div className="container">
          <div className="consultations-info">
            <span className="students-score">Средний балл учеников 87 🤯</span>
            <h2 className="consultations-info__title">
              Обучение в Класстер - самое эффективное на рынке.
            </h2>
            <p className="desc">
              <span>
                +1 решенное задание <span className="bold">ЕГЭ</span>
              </span>{" "}
              <br />
              уже после бесплатного урока
            </p>
          </div>
          <div className="consultations-form">
            <h3 className="consultations-form__title">
              Попробуйте наши методики на <span>бесплатной</span> консультации
            </h3>
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
                <a href="#!">политикой обработки персональных данных</a>
              </span>
              <Button label="Записаться" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FADE_INTERVAL_MS = 1000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  "это",
  "Сайты",
  "Приложения",
  "Сервисы",
  "CRM",
  "Бренды",
  "Рекламу",
];

export const AnimatedText = ({ duration = 1000, delay = 0 }) => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // set fade out effect
      setFadeIn(false);

      // wait for fade out to complete, then update the index and set fade in effect
      setTimeout(() => {
        setIndex((index + 1) % WORDS_TO_ANIMATE.length);
        setFadeIn(true);
      }, duration);
    }, duration + delay);

    return () => clearInterval(interval);
  }, [index, duration, delay]);

  return (
    <span
      className={`block text-blue md:text-7xl text-3xl uppercase font-black`}
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: `opacity ${duration / 1000}s ease-in-out`,
      }}
    >
      {WORDS_TO_ANIMATE[index]}
    </span>
  );
};
