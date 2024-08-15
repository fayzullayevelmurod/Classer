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
          <Button label="Войти" />
          <button className="menu-bars" onClick={handleToggleMenu}>
            <img src={assets.menuBars} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};
