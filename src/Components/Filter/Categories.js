import React, { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";

const Categories = (props) => {
  const [names, setNames] = useState([]);
  const { request } = useHttp();

  useEffect(() => {
    request(`/api/services?${names.join("&")}`, "GET");
  }, [names, request]);

  const onChange = (event) => {
    const { name } = event.target;

    if (names.includes(name)) {
      return setNames(() => names.filter((i) => i !== name));
    } else {
      setNames(() => [...names, name]);
    }
  };

  return (
    <ul>
      {props.categories &&
        props.categories.map((category) => {
          return (
            <li key={category.id} className="category__item">
              <a>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      name={category.name}
                      onChange={onChange}
                    />
                    <span>{category.name}</span>
                  </label>
                </p>
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default Categories;
