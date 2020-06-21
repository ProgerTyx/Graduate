import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Basket from "../../Components/Basket";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    var elems = document.querySelectorAll(".scrollspy");
    window.M.ScrollSpy.init(elems, { scrollOffset: 100 });
  }, []);

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a
                href="#main-section"
                className={classNames("brand-logo", { hidden: showNav })}
              >
                <img src="logo-default-170x54.png" alt="logo" />
              </a>

              <ul className="user-panel right">
                <li
                  className={classNames({
                    hidden: showNav,
                    active: showBasket,
                  })}
                >
                  <a href="!#" onClick={() => setShowBasket(!showBasket)}>
                    <i className="material-icons">shopping_cart</i>
                  </a>
                </li>
                <li
                  className={classNames({
                    active: showNav,
                    hidden: showBasket,
                  })}
                >
                  <a href="!#" onClick={() => setShowNav(!showNav)}>
                    <i className="material-icons">menu</i>
                  </a>
                </li>
              </ul>

              <ul
                id="nav-mobile"
                className={classNames("hide-on-med-and-down", {
                  visible: showNav,
                  left: showNav,
                })}
              >
                <li>
                  <a href="#main-section">Главная</a>
                </li>
                <li>
                  <a href="#price-list-section">Услуги</a>
                </li>
                <li>
                  <a href="#why-we-section">Почему мы?</a>
                </li>
                <li>
                  <a href="#gallery-section">Галлерея</a>
                </li>
                <li>
                  <a href="#team-section">Команда</a>
                </li>
                <li>
                  <a href="#reviews-section">Отзывы</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Basket show={showBasket} />
    </>
  );
};

export default Header;
