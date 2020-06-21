import React, { useState } from "react";
import classNames from "classnames";

const Basket = (props) => {
  return (
    <ul className={classNames("basket", "z-depth-2", { visible: props.show })}>
      <li className="header center-align">
        <p className="header__title">
          Корзина <i className="material-icons header__icon">shopping_cart</i>
        </p>

        <div className="divider"></div>
      </li>
    </ul>
  );
};

export default Basket;
