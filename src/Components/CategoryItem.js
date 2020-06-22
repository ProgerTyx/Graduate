import React from "react";

const CategoryItem = ({ category, children }) => {
  return (
    <ul className="collection z-depth-2" key={category.id}>
      <li className="collection-item collection__header center-align">
        {category.name}
      </li>
      {children}
    </ul>
  );
};

export default CategoryItem;
