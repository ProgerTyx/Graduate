import React, { useState, useEffect } from "react";
import noUiSlider from "materialize-css/extras/noUiSlider/nouislider.min.js";
import { useHttp } from "../../hooks/http.hook";
import wNumb from "wnumb";
import "./nouislider.css";

const NoUiSlider = (props) => {
  const { request } = useHttp();

  const [price, setPrice] = useState({
    min: 0,
    max: 5000,
  });

  useEffect(() => {
    setPrice(props.price);
  }, [props.price]);

  useEffect(() => {
    const slider = document.getElementById("ctg-price-slider");
    noUiSlider.create(slider, {
      ...props,
      format: wNumb({
        decimals: 0,
      }),
    });

    slider.noUiSlider.on("update", onUpdate);
    slider.noUiSlider.on("end", onEnd);

    return () => {
      slider.noUiSlider.destroy();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const onEnd = (val) => {
    request(`/api/services?min=${val[0]}&max=${val[1]}`, "GET");
  };

  const onUpdate = (val) => {
    setPrice({ min: val[0], max: val[1] });
  };

  return (
    <div className="price-slider center-align">
      <div id="ctg-price-slider"></div>
      <span className="price-slider__layout">
        {price.min} грн – {price.max} грн
      </span>
    </div>
  );
};

export default NoUiSlider;
