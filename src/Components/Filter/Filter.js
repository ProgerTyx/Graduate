import React from "react";
import NoUiSlider from "../NoUiSlider/NoUiSlider";
import Search from "../Search";
import Categories from "./Categories";

const Filter = ({ price, categories }) => {
  return (
    <div className="filter">
      <div className="row filter__item">
        <div className="col s10 offset-s1">
          <Search />
        </div>
      </div>

      <div className="divider"></div>

      <div className="row filter__item">
        <div className="col s10 offset-s1">
          {price && (
            <NoUiSlider
              price={price}
              start={[price.min, price.max]}
              step={1}
              range={{ min: price.min, max: price.max }}
              connect
            />
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="row filter__item">
        <div className="col s10 offset-s1">
          <div className="category">
            <span className="category__title">Категории</span>
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
