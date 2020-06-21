import React from "react";
import Filter from "../../Components/Filter/Filter";
import Services from "../../Components/Services";

const PriceListSection = () => {
  return (
    <section id="price-list-section" className="price-list-section scrollspy">
      <div className="container">
        <h3 className="title">Услуги</h3>
        <div className="row">
          <div className="col s3 z-depth-2">
            <Filter />
          </div>
          <div className="col s8 offset-s1">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
