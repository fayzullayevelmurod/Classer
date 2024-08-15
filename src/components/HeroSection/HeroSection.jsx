// import React, { useEffect, useState } from "react";
// import { Button } from "../";
// import "./HeroSection.scss";
// import assets from "../../assets";

// export const HeroSection = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("");
//   const [imgIndex, setImgIndex] = useState(0);
//   const [imgFadeIn, setImgFadeIn] = useState(true);

//   const handleSelectToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (value) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   const handleTextChange = (newIndex, fadeIn) => {
//     setImgIndex(newIndex);
//     setImgFadeIn(fadeIn);
//   };

//   return (
//     <section className="intro">
//       <div className="container">
//         <div className="intro-content">
//           <h1 className="intro-title">
//             Класстер - <span>это</span>
//           </h1>
//           <AnimatedText
//             duration={1000}
//             delay={500}
//             onChange={handleTextChange}
//           />
//         </div>
//         <div className="intro-img__box">
//           <img
//             className={`intro-img teachers-img ${
//               imgIndex === 0 && imgFadeIn ? "show" : ""
//             }`}
//             src={assets.teachers}
//             alt=""
//           />
//           <img
//             className={`intro-img reviews-img ${
//               imgIndex === 1 && imgFadeIn ? "show" : ""
//             }`}
//             src={assets.reviews}
//             alt=""
//           />
//         </div>
//       </div>

//       <div className="consultations">
//         <div className="container">
//           <div className="consultations-info">
//             <span className="students-score">Средний балл учеников 87 🤯</span>
//             <h2 className="consultations-info__title">
//               Обучение в Класстер - самое эффективное на рынке.
//             </h2>
//             <p className="desc">
//               <span>
//                 +1 решенное задание <span className="bold">ЕГЭ</span>
//               </span>{" "}
//               <br />
//               уже после бесплатного урока
//             </p>
//           </div>
//           <div className="consultations-form">
//             <h3 className="consultations-form__title">
//               Попробуйте наши методики на <span>бесплатной</span> консультации
//             </h3>
//             <form>
//               <div className="input-box">
//                 <div className="custom-select">
//                   <div
//                     className="selected-box form-control"
//                     onClick={handleSelectToggle}
//                   >
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Класс"
//                       value={selectedValue}
//                       readOnly
//                     />
//                     <img src={assets.arrowDown} alt="arrow down" />
//                   </div>
//                   <div className={`select-options ${isOpen ? "show" : ""}`}>
//                     <div
//                       className="select-option"
//                       onClick={() => handleOptionClick("Value 1")}
//                     >
//                       Value 1
//                     </div>
//                     <div
//                       className="select-option"
//                       onClick={() => handleOptionClick("Value 2")}
//                     >
//                       Value 2
//                     </div>
//                     <div
//                       className="select-option"
//                       onClick={() => handleOptionClick("Value 3")}
//                     >
//                       Value 3
//                     </div>
//                   </div>
//                 </div>
//                 <input type="text" placeholder="Имя" className="form-control" />
//                 <input
//                   type="tel"
//                   placeholder="Номер телефона"
//                   className="form-control"
//                 />
//               </div>
//               <span className="form-info">
//                 Нажимая на “записаться” вы соглашаетесь с{" "}
//                 <a href="#!">политикой обработки персональных данных</a>
//               </span>
//               <Button label="Записаться" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const FADE_INTERVAL_MS = 1000;
// const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
// const WORDS_TO_ANIMATE = ["крутые преподаватели", "довольные ученики"];

// export const AnimatedText = ({ duration = 1000, delay = 0, onChange }) => {
//   const [index, setIndex] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setIndex((index + 1) % WORDS_TO_ANIMATE.length);
//         setFadeIn(true);
//       }, duration);
//     }, duration + delay);

//     onChange(index, fadeIn);

//     return () => clearInterval(interval);
//   }, [index, duration, delay, onChange]);

//   return (
//     <span
//       className={`animated-text`}
//       style={{
//         opacity: fadeIn ? 1 : 0,
//         transition: `opacity ${duration / 1000}s ease-in-out`,
//       }}
//     >
//       {WORDS_TO_ANIMATE[index]}
//     </span>
//   );
// };
import React, { useEffect, useState } from "react";
import { Button } from "../";
import "./HeroSection.scss";
import assets from "../../assets";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [imgIndex, setImgIndex] = useState(0);
  const [imgFadeIn, setImgFadeIn] = useState(true);
  const duration = 1000;
  const delay = 0;

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleTextChange = (newIndex, fadeIn) => {
    setImgIndex(newIndex);
    setImgFadeIn(fadeIn);
  };

  return (
    <section className="intro">
      <div className="container">
        <div className="intro-content">
          <h1 className="intro-title">
            Класстер - <span>это</span>
          </h1>
          <AnimatedText
            duration={duration}
            delay={delay}
            onChange={handleTextChange}
          />
        </div>
        <div className="intro-img__box">
          <img
            className="intro-img teachers-img"
            src={assets.teachers}
            alt=""
            style={{
              opacity: imgIndex === 0 && imgFadeIn ? 1 : 0,
              transition: `opacity ${duration / 1000}s ease-in-out`,
            }}
          />
          <img
            className="intro-img reviews-img"
            src={assets.reviews}
            alt=""
            style={{
              opacity: imgIndex === 1 && imgFadeIn ? 1 : 0,
              transition: `opacity ${duration / 1000}s ease-in-out`,
            }}
          />
        </div>
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
const WORDS_TO_ANIMATE = ["крутые преподаватели", "довольные ученики"];

export const AnimatedText = ({ duration = 1000, delay = 0, onChange }) => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((index + 1) % WORDS_TO_ANIMATE.length);
        setFadeIn(true);
      }, duration);
    }, duration + delay);

    onChange(index, fadeIn);

    return () => clearInterval(interval);
  }, [index, duration, delay, onChange]);

  return (
    <span
      className={`animated-text`}
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: `opacity ${duration / 1000}s ease-in-out`,
      }}
    >
      {WORDS_TO_ANIMATE[index]}
    </span>
  );
};
