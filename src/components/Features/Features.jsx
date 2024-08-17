// Features.jsx (unchanged, but structured similarly if needed)
import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "Прощайте записанные вебинары без вовлечения учеников!",
      desc: "Забудьте о скучных вебинарах! Участвуйте в живых занятиях в небольших группах (5-7 человек) два раза в неделю. Преподаватель объяснит материал онлайн и ответит на ваши вопросы, уделяя внимание каждому ученику.",
      img: assets.owl1,
    },
    {
      title: "Геймификация процесса обучения",
      desc: "Обучение превращается в игру, где ученики получают баллы и достижения за успешное выполнение заданий.",
      img: assets.owl1,
    },
    {
      title: "Обратная связь от преподавателей",
      desc: "Регулярные комментарии и поддержка от преподавателей помогут вам достигать новых высот в учебе.",
      img: assets.owl1,
    },
    {
      title: "Методики",
      desc: "Регулярные комментарии и поддержка от преподавателей помогут вам достигать новых высот в учебе.",
      img: assets.owl1,
    },
    {
      title: "Отслеживание результата",
      desc: "Регулярные комментарии и поддержка от преподавателей помогут вам достигать новых высот в учебе.",
      img: assets.owl1,
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="title">Наши фишки</h2>
        <Tabs
          tabItems={tabItems}
          onTabClick={setActiveTab}
          activeIndex={activeTab}
        />
        <div className="features-content tab-content">
          <div className="features-card">
            <h3 className="features-card__title">
              {tabContent[activeTab]?.title}
            </h3>
            <p className="features-card__desc">{tabContent[activeTab]?.desc}</p>
            <img
              className="teacher-owl media-block"
              src={tabContent[activeTab]?.img}
              alt="teacher owl img"
            />
          </div>
          <img
            className="teacher-owl"
            src={tabContent[activeTab]?.img}
            alt="teacher owl img"
          />
        </div>
      </div>
    </section>
  );
};
