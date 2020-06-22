import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text contact__title">Контакты:</h5>
            <ul className="contact">
              <li className="contact__item">
                <p className="contact__text">
                  <i className="contact__icon material-icons">call</i>
                  +38(099)511-51-51
                </p>
              </li>
              <li className="contact__item">
                <p className="contact__text">
                  <i className="contact__icon material-icons">
                    local_post_office
                  </i>
                  office.happyevent@gmail.com
                </p>
              </li>
              <li className="contact__item">
                <p className="contact__text">
                  <i className="contact__icon material-icons">location_on</i>
                  Донецьке шосе / 135 / Дніпро / 49000
                </p>
              </li>
            </ul>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul className="social-network">
              <li className="z-depth-2">
                <object
                  data="/vk.svg"
                  type="image/svg+xml"
                  width="50px"
                  className="social-network__icon"
                >
                  Social Network Icons
                </object>
              </li>
              <li className="z-depth-2">
                <object
                  data="/facebook.svg"
                  type="image/svg+xml"
                  width="50px"
                  className="social-network__icon"
                >
                  Social Network Icon
                </object>
              </li>
              <li className="z-depth-2">
                <object
                  data="/network.svg"
                  type="image/svg+xml"
                  width="50px"
                  className="social-network__icon"
                >
                  Social Network Icon
                </object>
              </li>
              <li className="z-depth-2">
                <object
                  data="/telegram.svg"
                  type="image/svg+xml"
                  width="50px"
                  className="social-network__icon"
                >
                  Social Network Icon
                </object>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center-align">© 2020 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
