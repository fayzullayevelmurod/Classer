import React from "react";
import "./Teachers.scss";
import assets from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";

import "swiper/css";

export const Teachers = () => {
  const swiperRef = React.useRef(null);

  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="teacher">
      <div className="container">
        <h2 className="title">Преподаватели</h2>

        <div className="teacher-cards">
          <img className="owl-img" src={assets.owl2} alt="owl 2" />
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".button-prev",
              nextEl: ".button-next",
            }}
            spaceBetween={22}
            slidesPerView={3.3}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              600: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3.3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="teacher-swiper"
          >
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="teacher-img"
                      src={assets.teacherImg}
                      alt="Avatar"
                    />
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium nisi quod repellendus quis placeat ullam, et
                      est reiciendis quam, atque eaque suscipit? Repellat id,
                      iure asperiores veniam sunt recusandae incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="teacher-img"
                      src={assets.teacherImg}
                      alt="Avatar"
                    />
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium nisi quod repellendus quis placeat ullam, et
                      est reiciendis quam, atque eaque suscipit? Repellat id,
                      iure asperiores veniam sunt recusandae incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="teacher-img"
                      src={assets.teacherImg}
                      alt="Avatar"
                    />
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium nisi quod repellendus quis placeat ullam, et
                      est reiciendis quam, atque eaque suscipit? Repellat id,
                      iure asperiores veniam sunt recusandae incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="teacher-img"
                      src={assets.teacherImg}
                      alt="Avatar"
                    />
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium nisi quod repellendus quis placeat ullam, et
                      est reiciendis quam, atque eaque suscipit? Repellat id,
                      iure asperiores veniam sunt recusandae incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="teacher-img"
                      src={assets.teacherImg}
                      alt="Avatar"
                    />
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium nisi quod repellendus quis placeat ullam, et
                      est reiciendis quam, atque eaque suscipit? Repellat id,
                      iure asperiores veniam sunt recusandae incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="button-next swiper-button" onClick={goNext}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#74C0FC"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
          <button className="button-prev swiper-button" onClick={goPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#74C0FC"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
        </div>

        <div className="reviews">
          <h3 className="reviews-title">
            Реальные отзывы от реально крутых ребят и их родителей
          </h3>
          <a className="reviews-btn" href="#!">
            Смотреть отзывы
          </a>
          <div className="reviews-images">
            <img src={assets.vkLogo} alt="" />
            <img src={assets.ovl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
