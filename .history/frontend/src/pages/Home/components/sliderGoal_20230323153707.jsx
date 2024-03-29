import style from "../home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";
let x = 0;
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
                className={`d-flex flex-column align-items-center ${style.boxSize}`}
              >
                {file.map((items) => {
                  if (items.prodId == item.id && x == 0) {
                    x++;

                    return (
                      <>
                        <Link
                          className={`navbar-brand ${style.linkStyle}`}
                          to="/toy"
                          state={{ from: item.id }}
                        >
                          <div
                            key={item.id}
                            className={`${style.box} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </Link>
                        <AddBasket
                          id={item.id}
                          name={item.name}
                          color={item.color}
                          item={item.item}
                          goal1={item.goal1}
                          goal2={item.goal2}
                          goal3={item.goal3}
                          goal4={item.goal4}
                          goal5={item.goal5}
                          goal6={item.goal6}
                          goal7={item.goal7}
                          agemin={item.agemin}
                          agemax={item.agemax}
                          price={item.price}
                          description={item.description}
                          prodId={items.prodId}
                          image={items.image}
                          file={file}
                        />
                      </>
                    );
                  }
                })}
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to="/toy"
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
