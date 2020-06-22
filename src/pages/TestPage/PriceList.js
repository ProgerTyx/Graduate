import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import Categories from "./Categories";
import "./pricelist.scss";

const PriceList = () => {
  const { request } = useHttp();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const res = request("/api/services", "GET");
    res.then((data) => {
      setCategories(data.categories);
    });
  }, [request]);

  return (
    <div className="container">
      <div className="row price-list">
        <div className="col s6 right">
          <div className="row">
            <div class="input-field col s6">
              <input
                placeholder="Название"
                id="first_name"
                type="text"
                class="validate"
              />
            </div>
          </div>

          <Categories data={categories} />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
