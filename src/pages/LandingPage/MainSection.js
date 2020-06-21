import React from "react";
import { useEffect } from "react";

const MainSection = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    window.M.Slider.init(elems);
  }, []);

  return (
    <section id="main-section" className="main-section scrollspy">
      <div class="slider fullscreen ">
        <ul class="slides">
          <li>
            <img
              src="https://media.istockphoto.com/photos/rest-relax-dream-dreamy-concept-portrait-of-nice-stunning-adorable-picture-id1054311864"
              alt=""
            />
            <div class="caption center-align">
              <div className="dimmer">
                <h3>Ивент агенство #1 в Украине!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Нам нравится создавать незабываемые впечатления.
                </h5>
              </div>
            </div>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/photos/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles-picture-id1136810581"
              alt=""
            />
            <div class="caption left-align">
              <div className="dimmer">
                <h3>Организуем мероприятие любой сложности</h3>
                <h5 class="light grey-text text-lighten-3">
                  Креативно, Грамотно, Слажено, Успешно, С удовольствием
                </h5>
              </div>
            </div>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/photos/man-with-sunglasses-dancing-at-studio-shot-picture-id877337294"
              alt=""
            />
            <div class="caption right-align">
              <div className="dimmer">
                <h3>Мы делаем Ваши мечты реальностью!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Создаем уникальный опыт для людей, воздействуя на их чувства.
                </h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainSection;
