import React from "react";

const WhyWeSection = () => {
  return (
    <section
      id="why-we-section"
      className="why-we-section white-text scrollspy"
    >
      <div className="container">
        <h3 className="title">Почему выбирают нас?</h3>
        <div className="row why-we__container">
          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img className="block__img" src="/fire.svg" alt="fire" />
              <p className="block__text">
                Мы создаем яркие впечатления. Они будут согревать вас в
                безкорпоративные месяцы :)
              </p>
            </div>
          </div>

          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img
                className="block__img"
                src="/employee.svg"
                alt="employee"
                style={{ marginLeft: "20px" }}
              />
              <p className="block__text">
                За вами будет закреплен персональный менеджер, которому можно
                писать, звонить и приходить во сне :)
              </p>
            </div>
          </div>

          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img className="block__img" src="/speed.svg" alt="speed" />
              <p className="block__text">
                Мы можем очень оперативно подготовить предложение и реализовать
                его в кратчайшие сроки!
              </p>
            </div>
          </div>
        </div>

        <div className="row why-we__container">
          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img className="block__img" src="location.svg" alt="location" />
              <p className="block__text">
                Мы работаем там, где вам нужно! Готовы к любым дорогам и
                дистанциям.
              </p>
            </div>
          </div>

          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img className="block__img" src="/vision.svg" alt="vision" />
              <p className="block__text">
                У нас есть третий глаз. Мы предвидим, чувствуем и заглядываем в
                будущее.
              </p>
            </div>
          </div>

          <div className="col s4 block center-align">
            <div
              className="col s10 offset-s1"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <img
                className="block__img"
                src="/technical-support.svg"
                alt="support"
              />
              <p className="block__text">
                Здесь все понятно. Мы просто очень любим свою работу :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeSection;
