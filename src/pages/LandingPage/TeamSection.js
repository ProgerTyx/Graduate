import React, { useEffect } from "react";

const TeamSection = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    window.M.Carousel.init(elems);
  }, []);

  return (
    <section id="team-section" className="team-section scrollspy">
      <div className="container">
        <h3 className="title white-text">Наша команда</h3>
        <div className="row team-container">
          <div class="col s3">
            <div
              class="card z-depth-2"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div class="card-image">
                <img src="/our-team-1-272x197.jpg" alt="" />
              </div>
              <div class="card-content center-align">
                <p className="card-name">Маша Ринская</p>
                <p className="card-position">Event Manager</p>
                <p className="card-about">
                  Управляет событиями, отвечает за развитие всей системы.
                  Организатор со стажем (более 10-ти лет), неутомимая оптимистка
                  и неисправимый трудоголик.
                </p>
              </div>
            </div>
          </div>

          <div class="col s3">
            <div
              class="card z-depth-2"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div class="card-image">
                <img src="/our-team-2-272x197.jpg" alt="" />
              </div>
              <div class="card-content center-align">
                <p className="card-name">Никита Бодня</p>
                <p className="card-position">Account Manager</p>
                <p className="card-about">
                  Быстрее всех создает любые презентации и сметы,
                  специализируется на всем. В нем отлично сочетаются чувство
                  юмора, высокий интеллект и скорость.
                </p>
              </div>
            </div>
          </div>

          <div class="col s3">
            <div
              class="card z-depth-2"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div class="card-image">
                <img src="/our-team-3-272x197.jpg" alt="" />
              </div>
              <div class="card-content center-align">
                <p className="card-name">Дарья Ермакова</p>
                <p className="card-position">Account Manager</p>
                <p className="card-about">
                  Реальный джедай в юбке, попробуйте только задержать предоплату
                  или опоздать на локацию на минуту. В душе утонченная
                  итальянка, всегда стильная и эмоциональная.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
