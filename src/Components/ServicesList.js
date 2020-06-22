import React from "react";

const ServicesList = ({ category }) => {
  const serviceItems = category.services.map((service) => {
    return (
      <li className="collection-item" key={service._id}>
        <span>{service.name}</span>
        <a className="right">Добавить</a>
        <span className="right">
          {service.price} грн / {service.unit}
        </span>
      </li>
    );
  });

  return <div>{serviceItems}</div>;
};

export default ServicesList;
