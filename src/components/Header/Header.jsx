import React, { useState } from "react";
import assets from "../../assets";
import { Button } from "../";
import "./Header.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <header>
      <div className="container">
        <a className="header-logo" href="#!">
          <img src={assets.logo} alt="header logo" width={272} height={52} />
        </a>
        <a className="header-media__logo" href="#!">
          <img src={assets.headerMediaLogo} alt="header logo" />
        </a>
        <nav className={`nav ${showMenu ? "show" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#methodologies">
                Методики
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Курсы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
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
          <Button label="Войти" />
          <button className="menu-bars" onClick={handleToggleMenu}>
            <img
              className={`${!showMenu ? "show" : ""} show-menu`}
              src={assets.menuBars}
              alt=""
            />
            <svg
              className={`close-menu ${showMenu ? "show" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#143d81"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
