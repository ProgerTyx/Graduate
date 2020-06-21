import React from "react";

const Category = (props) => {
  return (
    <div className="category">
      <span className="category__title">{props.data.name}</span>
      <ul>
        {props.data.data.map((item, idx) => {
          return (
            <li key={idx} className="category__item">
              <a href="#">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
