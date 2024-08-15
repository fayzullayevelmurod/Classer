import React from "react";
import assets from "../../assets";
import { Button } from "../";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <a className="header-logo" href="#!">
          <img src={assets.logo} alt="header logo" width={272} height={52} />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Методики
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Курсы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Вопрос-ответ
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <a className="tel" href="tel:+79154232075">
            +79154232075
          </a>
          <button>
            <img src={assets.cart} alt="cart" />
          </button>
          <a href="#!">
            <Button label="Войти" />
          </a>
        </div>
      </div>
    </header>
  );
};
