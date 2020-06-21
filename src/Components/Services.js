import React, { useEffect, useState } from "react";

const Services = () => {
  const [data, setData] = useState([
    {
      name: "Декорирование",
      data: [
        {
          name: "Декорирование шариками",
          unit: "час",
          price: 120,
        },
      ],
    },
    {
      name: "Для свадьбы",
      data: [
        {
          name: "Торт на заказ",
          unit: "шт",
          price: 3000,
        },
        {
          name: "Подбор платья",
          unit: "услуга",
          price: 1300,
        },
      ],
    },
  ]);

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    window.M.Collapsible.init(elems);
  });

  const servicesItems = data.map((item, idx) => {
    return (
      <ul class="collection z-depth-2" key={idx}>
        <li class="collection-item collection__header center-align">
          {item.name}
        </li>
        {item.data.map((item, idx) => {
          return (
            <li class="collection-item" key={idx}>
              <span>{item.name}</span>
              <a href="#" className="right">
                Добавить
              </a>
              <span className="right">
                {item.price} грн / {item.unit}
              </span>
            </li>
          );
        })}
      </ul>
    );
  });

  return <div>{servicesItems}</div>;
};

export default Services;
