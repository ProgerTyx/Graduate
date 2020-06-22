import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import ServicesList from "./ServicesList";

const Services = ({ categories }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    window.M.Collapsible.init(elems);
  }, []);

  const categoryItems =
    categories &&
    categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category}>
          <ServicesList category={category} />
        </CategoryItem>
      );
    });

  return <div>{categoryItems}</div>;
};

export default Services;
