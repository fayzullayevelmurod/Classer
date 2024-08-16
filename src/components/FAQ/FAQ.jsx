import React, { useState } from "react";
import "./FAQ.scss";
import assets from "../../assets";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="title">Вопрос-ответ</h2>
        <div className="answers">
          {/* Accordion 1 */}
          <div className={`accordion ${activeIndex === 0 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(0)}
            >
              <h3>Как начать обучение?</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 0 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 0 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div className={`accordion ${activeIndex === 1 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(1)}
            >
              <h3>Как я могу оплатить курс?</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 1 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 1 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>
          {/* Accordion 3 */}
          <div className={`accordion ${activeIndex === 2 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(2)}
            >
              <h3>Расскажите про юридические условия</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 2 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 2 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 4 */}
          <div className={`accordion ${activeIndex === 3 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(3)}
            >
              <h3>Есть ли коммуникация с родителем? </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 3 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 3 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 5 */}
          <div className={`accordion ${activeIndex === 5 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(5)}
            >
              <h3>Можно ли вернуть деньги за курс? </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 5 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 5 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 6 */}
          <div className={`accordion ${activeIndex === 6 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(6)}
            >
              <h3>В чём фишка преподавателей? </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 6 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 6 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>
          {/* Accordion 7 */}
          <div className={`accordion ${activeIndex === 7 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(7)}
            >
              <h3>Что делать, если я вообще ничего не знаю?</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 7 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 7 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 8 */}
          <div className={`accordion ${activeIndex === 8 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(8)}
            >
              <h3>Кто такие Менторы?</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 8 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 8 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 9 */}
          <div className={`accordion ${activeIndex === 9 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(9)}
            >
              <h3>Что делать, если возникли технические проблемы? </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 9 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 9 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 10 */}
          <div className={`accordion ${activeIndex === 10 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(10)}
            >
              <h3>
                Получится ли совмещать подготовку с учебой в школе и личной
                жизнью?
              </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 10 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 10 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>
          {/* Accordion 11 */}
          <div className={`accordion ${activeIndex === 11 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(11)}
            >
              <h3>Что делать, если я пропустил занятие/я?</h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 11 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 11 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>

          {/* Accordion 12 */}
          <div className={`accordion ${activeIndex === 12 ? "active" : ""}`}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(12)}
            >
              <h3>Что делать, если я пропустил набор группы? </h3>
              <img
                src={assets.plusIcon}
                alt="plus"
                className={`icon ${activeIndex === 12 ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === 12 && (
              <div className="accordion-content">
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quod facilis molestiae deleniti adipisci nam, vitae
                  perspiciatis aliquid nemo nostrum molestias consequuntur
                  maiores, omnis exercitationem expedita suscipit quisquam.
                  Voluptatibus, unde!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
