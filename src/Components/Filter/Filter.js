import React, { useState } from "react";
import NoUiSlider from "../NoUiSlider/NoUiSlider";
import Category from "./Category";

const Filter = () => {
  const [categories] = useState([
    {
      name: "Категории",
      data: ["Декорирование", "Питание", "Дополнительно"],
    },
  ]);

  const categoriesItems = categories.map((item, idx) => {
    return <Category key={idx} data={item} />;
  });

  return (
    <div className="filter">
      <div className="row filter__item">
        <div className="col s10 offset-s1">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="search"
              type="text"
              className="validate"
              placeholder="Поиск"
            />
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="row filter__item">
        <div className="col s10 offset-s1">
          <NoUiSlider
            start={[0, 500]}
            step={1}
            range={{ min: 0, max: 500 }}
            connect
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="row filter__item">
        <div className="col s10 offset-s1">{categoriesItems}</div>
      </div>
    </div>
  );
};

export default Filter;
