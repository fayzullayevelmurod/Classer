import React, { useState } from "react";
import "./Subjects.scss";
import { Tabs } from "../Tabs/Tabs";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

const tabItems = [
  { label: "Русский язык", className: "russian" },
  { label: "Математика", className: "mathematics" },
  { label: "Английский", className: "english" },
  { label: "Обществознание", className: "social-science" },
  { label: "Информатика", className: "informatics" },
];

const pricingTabItems = [
  { label: "Classic", priceYear: "54.500 ₽/год", priceMonth: "7.120 ₽/мес" },
  { label: "Optimus", priceYear: "55.000 ₽/год", priceMonth: "7.500 ₽/мес" },
  { label: "Promaster", priceYear: "60.000 ₽/год", priceMonth: "8.000 ₽/мес" },
  { label: "Personal", priceYear: "58.000 ₽/год", priceMonth: "7.700 ₽/мес" },
];

const tabContent = [
  {
    left: (
      <>
        <p className="subjects-desc">
          Живые интересные занятия, разбираем абсолютно все задания понятным
          языком с актуальными примерами и полезными ассоциациями.
        </p>
        <p className="subjects-desc">
          Рассмотрим самые сложные задания предыдущих годов и подготовимся к ЕГЭ
          на все 100 самым быстрым способом.
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
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
  {
    left: (
      <>
        <p className="subjects-desc">
          На наших занятиях по математике вы узнаете секреты успешной сдачи ЕГЭ.
          Мы объясним сложные задания простыми словами и поможем найти
          оптимальные пути решения задач.
        </p>
        <p className="subjects-desc">
          Регулярные занятия с практическими заданиями помогут закрепить знания
          и добиться высоких результатов.
        </p>
        <h4 className="subjects-title">В каждый тариф входит:</h4>
        <p className="subjects-desc">
          ✨️ Индивидуальные консультации по сложным темам
        </p>
        <p className="subjects-desc">✨️ Практические задания каждую неделю</p>
        <p className="subjects-desc">✨️ Поддержка преподавателей в чате</p>
        <p className="subjects-desc">✨️ Доступ к онлайн-материалам</p>
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
  {
    left: (
      <>
        <p className="subjects-desc">
          Живые интересные занятия, разбираем абсолютно все задания понятным
          языком с актуальными примерами и полезными ассоциациями.
        </p>
        <p className="subjects-desc">
          Рассмотрим самые сложные задания предыдущих годов и подготовимся к ЕГЭ
          на все 100 самым быстрым способом.
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
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
  {
    left: (
      <>
        <p className="subjects-desc">
          На наших занятиях по математике вы узнаете секреты успешной сдачи ЕГЭ.
          Мы объясним сложные задания простыми словами и поможем найти
          оптимальные пути решения задач.
        </p>
        <p className="subjects-desc">
          Регулярные занятия с практическими заданиями помогут закрепить знания
          и добиться высоких результатов.
        </p>
        <h4 className="subjects-title">В каждый тариф входит:</h4>
        <p className="subjects-desc">
          ✨️ Индивидуальные консультации по сложным темам
        </p>
        <p className="subjects-desc">✨️ Практические задания каждую неделю</p>
        <p className="subjects-desc">✨️ Поддержка преподавателей в чате</p>
        <p className="subjects-desc">✨️ Доступ к онлайн-материалам</p>
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
  {
    left: (
      <>
        <p className="subjects-desc">
          Живые интересные занятия, разбираем абсолютно все задания понятным
          языком с актуальными примерами и полезными ассоциациями.
        </p>
        <p className="subjects-desc">
          Рассмотрим самые сложные задания предыдущих годов и подготовимся к ЕГЭ
          на все 100 самым быстрым способом.
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
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
  {
    left: (
      <>
        <p className="subjects-desc">
          На наших занятиях по математике вы узнаете секреты успешной сдачи ЕГЭ.
          Мы объясним сложные задания простыми словами и поможем найти
          оптимальные пути решения задач.
        </p>
        <p className="subjects-desc">
          Регулярные занятия с практическими заданиями помогут закрепить знания
          и добиться высоких результатов.
        </p>
        <h4 className="subjects-title">В каждый тариф входит:</h4>
        <p className="subjects-desc">
          ✨️ Индивидуальные консультации по сложным темам
        </p>
        <p className="subjects-desc">✨️ Практические задания каждую неделю</p>
        <p className="subjects-desc">✨️ Поддержка преподавателей в чате</p>
        <p className="subjects-desc">✨️ Доступ к онлайн-материалам</p>
      </>
    ),
    right: [
      <>
        <p className="subjects-desc">⭐️ Пробники каждый месяц</p>
        <p className="subjects-desc">⭐️ Видеоразбор пробника преподавателем</p>
        <p className="subjects-desc">⭐️ Наличие ментора из Вуза мечты</p>
        <p className="subjects-desc line-through">
          ⭐️ Ежемесячная индивидуальная консультация с преподавателем
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Самые больше бонусы по реферальной программе
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Дополнительные материалы по высшей математике
        </p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
        <p className="subjects-desc">⭐️ Практические тесты каждую неделю</p>
        <p className="subjects-desc">
          ⭐️ Поддержка преподавателей через чат и видеосвязь
        </p>
        <p className="subjects-desc line-through">
          ⭐️ Эксклюзивные материалы от команды Класстера
        </p>
      </>,
      <>
        <p className="subjects-desc line-through">
          ⭐️ Ежедневные разговорные сессии
        </p>
        <p className="subjects-desc">⭐️ Подготовка к TOEFL и IELTS</p>
        <p className="subjects-desc">⭐️ Доступ к эксклюзивным материалам</p>
        <p className="subjects-desc">
          ⭐️ Индивидуальные сессии с преподавателем
        </p>
      </>,
      <>
        <p className="subjects-desc">
          ⭐️ Эксклюзивные материалы по обществознанию
        </p>
        <p className="subjects-desc">⭐️ Индивидуальные консультации</p>
        <p className="subjects-desc">⭐️ Доступ к онлайн-лекциям</p>
        <p className="subjects-desc line-through">
          ⭐️ Практические задания каждую неделю
        </p>
      </>,
    ],
  },
];

export const Subjects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePricingTab, setActivePricingTab] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <Modal handleToggleModal={handleToggleModal} showModal={showModal} />
      <section className="subjects">
        <div className="container">
          <h2 className="title">Выбери предметы</h2>
          <Tabs
            tabItems={tabItems}
            onTabClick={setActiveTab}
            activeIndex={activeTab}
            getClassName={(item) => item.className}
          />
          <div className="subjects-cards">
            <div className="subjects-card__left">
              {tabContent[activeTab]?.left}
            </div>
            <div className="subjects-card__right">
              <h3>Выбери тариф, начни учёбу сейчас</h3>
              <div className="desc-box">
                <Tabs
                  tabItems={pricingTabItems.map((item) => item.label)}
                  onTabClick={setActivePricingTab}
                  activeIndex={activePricingTab}
                />
                {tabContent[activeTab]?.right[activePricingTab]}
              </div>
              <div className="card-bottom">
                <Button label="Записаться" onClick={handleToggleModal} />
                <div>
                  <span>{pricingTabItems[activePricingTab].priceYear}</span>
                  <p>{pricingTabItems[activePricingTab].priceMonth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
