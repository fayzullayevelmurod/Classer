import React from "react";
import "./Subjects.scss";
import { Tabs } from "../Tabs/Tabs";
import { Button } from "../Button/Button";

const tabItems = [
  "Русский язык",
  "Математика",
  "Английский",
  "Обществознание",
  "Информатика",
];

export const Subjects = () => {
  return (
    <section className="subjects">
      <div className="container">
        <h2 className="title">Выбери предметы</h2>
        <Tabs tabItems={tabItems} />
        <div className="subjects-cards">
          <div className="subjects-card__left">
            <p className="subjects-desc">
              Живые интересные занятия, разбираем абсолютно все задания понятным
              языком с актуальными примерами и полезными ассоциациями.
            </p>
            <p className="subjects-desc">
              Рассмотрим самые сложные задания предыдущих годов и подготовимся к
              ЕГЭ на все 100 самым быстрым способом.
            </p>
            <h4 className="subjects-title">В каждый тариф входит:</h4>
            <p className="subjects-desc">
              ✨️ Живые занятия в группах 5-7 человек два раза в неделю
            </p>
            <p className="subjects-desc">✨️ 8 домашних заданий в месяц</p>
            <p className="subjects-desc">
              ✨️ Консультации преподавателей и поддержка в чате
            </p>
            <p className="subjects-desc">✨️ Видеозапись занятий</p>
          </div>
          <div className="subjects-card__right">
            <h3>Выбери тариф,начни учёбу сейчас</h3>
            <div className="desc-box">
              <ul className="tabs">
                <li className="tab-item">Classic</li>
                <li className="tab-item">Optimus</li>
                <li className="tab-item">Promaster</li>
                <li className="tab-item">Personal</li>
              </ul>
              <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
              <p className="subjects-desc">
                ⭐️ Видеоразбор пробника преподавателем
              </p>
              <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
              <p className="subjects-desc">
                ⭐️ Ежемесячная индивидуальная консультация с преподавателем
              </p>
              <p className="subjects-desc">
                ⭐️ Самые больше бонусы по реферальной программе{" "}
              </p>
              <p className="subjects-desc">
                ⭐️ Эксклюзивные материалы от команды Класстера
              </p>
            </div>
            <div className="card-bottom">
              <Button label="Записаться" />
              <div>
                <span>54.500 ₽/год</span>
                <p>7.120 ₽/мес</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
