import React from "react";
import "./Teachers.scss";
import assets from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button/Button";

import "swiper/css";

export const Teachers = () => {
  return (
    <section className="teacher">
      <div className="container">
        <h2 className="title">Преподаватели</h2>

        <div className="teacher-cards">
          <img className="owl-img" src={assets.owl2} alt="owl 2" />
          <Swiper
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
                    <img src={assets.teacherImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={assets.teacherImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={assets.teacherImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={assets.teacherImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={assets.teacherImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <div className="info-box">
                      Русский язык <br />
                      <span>Кристина Абрамова</span>
                    </div>
                    <div className="info-box">ЕГЭ русский: 100 баллов 🤯 </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
