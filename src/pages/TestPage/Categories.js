import React from "react";
import ServicesList from "./ServicesList";

const Categories = (props) => {
  return (
    <>
      {props.data &&
        props.data.map((category) => {
          return (
            <ul className="collection with-header" key={category.id}>
              <li className="collection-header center-align white-text">
                <span>{category.name}</span>
              </li>
              <ServicesList data={category} />
            </ul>
          );
        })}
    </>
  );
};

export default Categories;
