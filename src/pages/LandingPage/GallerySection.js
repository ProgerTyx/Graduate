import React, { useEffect } from "react";

const GallerySection = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".materialboxed");
    window.M.Materialbox.init(elems);
  }, []);

  return (
    <section id="gallery-section" className="gallery-section scrollspy">
      <h3 className="title">Галлерея</h3>
      <div className="gallery">
        <div className="row">
          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-RYGOyYlc/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2019/10/IMG_7276.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">AGRISTAR</h3>
                  <p className="gallery__subtitle">Грандиозное открытие</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-ivX04Q5D/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2020/03/IMG_33.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">ATB-MARKET</h3>
                  <p className="gallery__subtitle">Масленица</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-UaUerDmp/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2019/07/HSP-406.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">UBG</h3>
                  <p className="gallery__subtitle">Корпоративная вечеринка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-mwiEq-He/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2019/02/IMG_7287.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">KINDERGARTEN</h3>
                  <p className="gallery__subtitle">День рождения</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-eZnPK15c/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2019/03/GlobalBilgi-56.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">global bilgi</h3>
                  <p className="gallery__subtitle">Тимбилдинг</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div
              className="gallery__item materialboxed"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                class="materialboxed"
                src="https://mljq8c6dlyfo.i.optimole.com/oQxwn_8-pJLH5YhX/w:auto/h:auto/q:auto/https://salty.events/wp-content/uploads/2019/06/Агромат-77.jpg"
                alt="party"
              />
              <div className="gallery__capture">
                <div className="center-align white-text">
                  <h3 className="gallery__title">AGROMAT</h3>
                  <p className="gallery__subtitle">Открытие</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
