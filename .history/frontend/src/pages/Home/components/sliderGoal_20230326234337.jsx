import style from "../home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";
import AddBasket from "../AddBasket";
import { useState } from "react";
import { Link } from "react-router-dom";

function SliderGoal({ data, file, text }) {
  const { t } = useTranslation();
  const [prodId, setprodId] = useState([]);
  const [image, setimage] = useState([]);

  return (
    <>
      <h2 className={style.swiperTitle}>{t(text)}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        position={"center"}
        navigation
        slidesPerView={4}
        breakpoints={{
          1200: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          990: {
            spaceBetween: 0,
            slidesPerView: 3,
          },
          700: {
            spaceBetween: 0,
            slidesPerView: 2,
          },
          200: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        <div className="d-flex">
          {data.map((item) => {
            let x = 0;
            return (
              <SwiperSlide
                key={item.id}
                className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
              >
                {file.map((items) => {
                  if (items.prodId == item.id && x == 0) {
                    x++;

                    return (
                      <div key={items.id}>
                        <Link
                          className={`navbar-brand ${style.linkStyle}`}
                          to={`/toy/${item.id}`}
                          state={{ from: item.id }}
                        >
                          <div
                            className={`${style.box} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </Link>
                        
                      </div>
                    );
                  }
                })}
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to={`/toy/${item.id}`}
                  state={{ from: item.id }}
                >
                  <h2 className={style.boxH2}>{item.name}</h2>
                  <p className={style.boxP}>
                    {item.price}
                    {t("taradram")}
                  </p>
                </Link>

                {/* <button className={style.basketButton}>
                  {t("AddtoBasket")}
                </button> */}
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}

export default SliderGoal;
