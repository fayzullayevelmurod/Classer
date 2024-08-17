import React from "react";
import "./Methodologies.scss";
import assets from "../../assets";

export const Methodologies = () => {
  return (
    <section className="methodologies" id="methodologies">
      <div className="container">
        <h2 className="title">Методики</h2>
        <div className="methodologies-boxes">
          <div className="methodologies-cards">
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Класстер</h3>
                <img src={assets.simle} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Составляем ассоциативно-связанные блок-схемы с применением
                рисунков.
              </p>
            </div>
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Мнемотехники</h3>
                <img src={assets.note} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Создание визуальной и звуковой ассоциации, где мы ограничены
                лишь твоей фантазией!
              </p>
            </div>
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Карточки</h3>
                <img src={assets.folder} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Используем двухсторонние карточки для запоминания и проверки
                знаний.
              </p>
            </div>
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Свитч</h3>
                <img src={assets.teacher} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Смена ролей! В конце занятия ученик объясняет тему, а
                преподаватель задает вопросы.
              </p>
            </div>
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Летучка</h3>
                <img src={assets.fly} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Прокачиваем навык решения простых заданий до автоматизма.
              </p>
            </div>
            <div className="methodologies-card">
              <div className="top-box">
                <h3 className="methodologies-card__title">Практикум</h3>
                <img src={assets.statistiks} alt="" />
              </div>
              <p className="methodologies-card__desc">
                Система тестирования для закрепления усвоенных знаний на высоком
                уровне.
              </p>
            </div>
          </div>
          <div className="methodologies-right">
            <div className="methodologies-card">
              <div>
                <h3 className="methodologies-card__title">
                  Наш подход <span>научно-обоснован</span>
                </h3>
                <p className="methodologies-card__desc">
                  Система тестирования для закрепления усвоенных знаний на
                  высоком уровне.
                </p>
              </div>
              <img
                className="certificate-img"
                src={assets.certificate}
                alt="certificate"
              />
              <a className="blue-btn" href="#!">
                Наша методология
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
