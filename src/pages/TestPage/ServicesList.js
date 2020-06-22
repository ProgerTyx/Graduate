import React from "react";

const ServicesList = (props) => {
  return (
    <>
      {props.data.services.map((item) => {
        return (
          <li className="collection-item" key={item._id}>
            <span className="name">{item.name}</span>
            <span className="price right">
              {item.price} грн / {item.unit}
            </span>
          </li>
        );
      })}
    </>
  );
};

export default ServicesList;
