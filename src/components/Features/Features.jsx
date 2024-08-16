import React from "react";
import "./Features.scss";
import assets from "../../assets";
import { Tabs } from "../";

const tabItems = [
  "Живые занятия",
  "Геймификация",
  "Обратная связь",
  "Методики",
  "Отслеживание результата",
];

export const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="title">Наши фишки</h2>
        <Tabs tabItems={tabItems} />
        <div className="features-content">
          <div className="features-card">
            <h3 className="features-card__title">
              Прощайте записанные вебинары без вовлечения учеников!
            </h3>
            <p className="features-card__desc">
              Забудьте о скучных вебинарах! Участвуйте в живых занятиях в
              небольших группах (5-7 человек) два раза в неделю. Преподаватель
              объяснит материал онлайн и ответит на ваши вопросы, уделяя
              внимание каждому ученику.
            </p>
          </div>
          <img
            className="teacher-owl"
            src={assets.owl1}
            alt="teacher owl img"
          />
        </div>
      </div>
    </section>
  );
};
