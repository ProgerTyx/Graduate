import React, { useState, useEffect } from "react";
import Filter from "./Filter/Filter";
import Services from "./Services";
import { useHttp } from "../hooks/http.hook";

const PriceList = () => {
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);

  const { request } = useHttp();

  useEffect(() => {
    const res = request("/api/services", "GET");
    res.then((data) => {
      setPrice(data.price);
      setCategories(data.categories);
    });
  }, [request]);

  return (
    <div className="row">
      <div className="col s3 z-depth-2">
        <Filter price={price} categories={categories} />
      </div>
      <div className="col s8 offset-s1">
        <Services categories={categories} />
      </div>
    </div>
  );
};

export default PriceList;
