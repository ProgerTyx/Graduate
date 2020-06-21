import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="reviews-section" className="reviews-section scrollspy">
      <div className="container">
        <h3 className="title">Отзывы</h3>

        <div className="reviews-container">
          <div
            class="card-panel grey lighten-5 z-depth-1 one"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/man_1.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Это лучшие ребята, которых я знаю. Все продумывают до
                    мелочей, идеально, радует то, что они профи своего дело.
                    Ставлю им 5*
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 two"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/man_2.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Команда профессионалов. Сделают ваше мероприятие
                    незабываемым. Отличный подход, веселые ведущие и интересные
                    возможности. Иполнят все ваши фантазии и идеи!
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 three"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/woman_1.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Что тут можно сказать, очень хороший кастумер сервис.
                    Буквально организовали все как хотела и за один день . Без
                    лишних вопросов. Все было во время, без лишних единой
                    проблемы. Люди были уверенными в себе, коллектив выглядит
                    профессионально. Рекомендую этих ребят если вы хотите
                    устроить своему любимому человеку сказку. Явно оценка 5.
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 for"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/man_3.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Команда профессионалов. Сделают ваше мероприятие
                    незабываемым. Отличный подход, веселые ведущие и интересные
                    возможности. Иполнят все ваши фантазии и идеи!
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 five"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/woman_3.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Уже который раз за организацией праздников обращаюсь в Happy
                    event agency и который раз убеждаюсь, что эти ребята лучше!
                    Дети остались очень довольны мероприятием! Спасибо Happy
                    event agency за подаренные эмоции!
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 six"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/woman_2.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Нам провели праздничный корпоратив. Было нереально круто!
                    Воплощенные идеи поражают. Интересно, творчески!
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 seven"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/man_4.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Просто супер! Дети в восторге, сказали ещё придут) Работают
                    профессионалы, это наверное единственные кому бы мы смогли
                    доверить такое количество детей)
                  </blockquote>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-panel grey lighten-5 z-depth-1 eight"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src="/woman_4.svg" alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  <blockquote>
                    Благодарим "Happy event agency" за профессионализм!
                    Проводили корпоративное Новогоднее мероприятие для банка в
                    тематики " Народные гулянья.Новогодняя ярмарка". Хороший
                    сценарий, продуманы детали, веселые аниматоры, остроумный
                    юмор. Умеют создать душевную, теплую атмосферу. Все
                    веселились, были задействованы в развлечениях. Более того,
                    это был уже второй наш проект по сотрудничеству с ребятами и
                    не последний. Всем рекомендую
                  </blockquote>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
