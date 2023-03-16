import { Navigate } from "react-router-dom";
import style from "./toy.module.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import NumericInput from "react-numeric-input";
import { useTranslation } from "react-i18next";
import "./star";

function Toy() {
  const [data, setdata] = useState("");
  const [file, setFile] = useState([]);
  const [imgChange, setImgChange] = useState("");
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const { from } = location.state;
  useEffect(() => {
    const fd = new FormData();
    fd.append("id", from);
    axios.post(`http://barmatoys.loc/api/get/confirmget`, fd).then((res) => {
      const persons = res.data;
      setdata(persons.data[0]);
      console.log(persons);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);

  if (!from) return <Navigate to="/" />;

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };

  let x = 0;

  return (
    <>
      <div className={`d-flex ${style.itemName} `}>
        <div className="col-sm-6 d-flex flex-column align-items-center container ps-5 pe-5">
          <h2 className={`mb-4 ${style.name}`}>{data.name}</h2>
          {file.map((items) => {
            if (items.prodId == data.id && imgChange == items.id) {
              return (
                <div className="col-sm-12" key={items.id}>
                  <div
                    className={`${style.boxImageChange} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  ></div>
                </div>
              );
            }
            if (items.prodId == data.id && imgChange == "" && x == 0) {
              x++;
              return (
                <div className="col-sm-12" key={items.id}>
                  <div
                    className={`${style.boxImageChange} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  ></div>
                </div>
              );
            }
          })}

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="col-sm-12 mt-3"
            position={"center"}
            navigation
            slidesPerView={5}
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
            {file.map((items) => {
              if (items.prodId == data.id) {
                return (
                  <SwiperSlide
                    key={items.id}
                    className={`d-flex flex-column align-items-center ${style.boxSize}`}
                  >
                    <div className="col-sm-12">
                      <div
                        className={`${style.box1} container`}
                        style={{
                          backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                        }}
                      >
                        <button
                          value={items.id}
                          onClick={imageChange}
                          className={style.imageChangeBtn}
                        ></button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div
          className={`col-sm-6 ${style.rightBox} d-flex flex-column align-items-start mt-5`}
        >
          <div className="d-flex justify-content-center">
            <p className="me-4">Նյութ - </p>
            {data.item == "item1" || data.item == "item2" ? (
              data.item == "item1" ? (
                <h3>Փայտ</h3>
              ) : (
                <h3>Թուղթ</h3>
              )
            ) : data.item == "item3" ? (
              <h3>Կտոր</h3>
            ) : (
              <h3>Պլաստիկ</h3>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">Տարիք - </p>
            <h3>{data.agemin} -ից </h3>
            <h3 className="ms-2"> {data.agemax}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">Գույն - </p>
            <input
              type="color"
              name={data.color}
              id=""
              value={data.color}
              disabled
            />
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">Նպատակը - </p>
            <div className="d-flex flex-column align-items-start">
              {data.goal1 == "true" ? <h3>Ուշադրության զարգացնող</h3> : ""}
              {data.goal2 == "true" ? <h3>Հիշողության զարգացնող</h3> : ""}
              {data.goal3 == "true" ? <h3>Տրամաբանության զարգացնող</h3> : ""}
              {data.goal4 == "true" ? <h3>Մտածողության զարգացնող</h3> : ""}
              {data.goal5 == "true" ? <h3>Մանր մոտորիկա զարգացնող</h3> : ""}
              {data.goal6 == "true" ? <h3>Մեծ մոտորիկա զարգացնող</h3> : ""}
              {data.goal7 == "true" ? <h3>Ընկալման զարգացնող</h3> : ""}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">Գին - </p>
            <h4>{data.gin} </h4>
          </div>
          <div className="d-flex justify-content-start flex-column">
            <p>Նկարագրություն </p>
            <h3>{data.description} </h3>
          </div>

          <div className="col-sm-12 d-flex justify-content-center mt-5">
            <div className={style.cradlesBigBox}>
              <NumericInput
                mobile
                className={`form-control ${style.cradlesBox}`}
                strict
                value={1}
                min={1}
                max={100}
                editable="true"
                textColor="#B0228C"
                iconstyle={{
                  color: "white",
                  justifycontent: "space-between",
                  alignitems: "center",
                }}
                rightbuttonbackgroundcolor="#eaeaea00"
              />
            </div>
            <div>
              <button className={`${style.saveBasket} btn btn-success ms-2`}>
                {t("Addtobasket")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}

      <div className={`d-flex justify-content-center m-5`}>
        <div className="container-fluid">
          <div className={style.alsoLikeBg}>
            <h2 className={`${style.h2}`}>{t("ALSOLIKE")}</h2>
          </div>
        </div>
      </div>

      {/* Section3 */}

      <div className={`d-flex justify-content-center m-5`}>
        <div className="container-fluid mt-5">
          <div
            className={`d-flex align-items-center flex-column mt-5 ${style.section3Bigbox}`}
          >
            <h2 className={`${style.h2}`}>{t("Reviews")}</h2>

            {/* Toy Stars */}
            <div className={style.stars}>
              <form className={style.rating}>
                <div className={style.rating__stars}>
                  <input
                    id="rating-1"
                    className={`${style.rating__input_1} ${style.rating__input}`}
                    
                    type="radio"
                    name="rating"
                    value="1"
                  />
                  <input
                    id="rating-2"
                    className={`${style.rating__input_2} ${style.rating__input}`}
                    type="radio"
                    name="rating"
                    value="2"
                  />
                  <input
                    id="rating-3"
                    className={`${style.rating__input_3} ${style.rating__input}`}
                    type="radio"
                    name="rating"
                    value="3"
                  />
                  <input
                    id="rating-4"
                    className={`${style.rating__input_4} ${style.rating__input}`}
                    type="radio"
                    name="rating"
                    value="4"
                  />
                  <input
                    id="rating-5"
                    className={`${style.rating__input_5} ${style.rating__input}`}
                    type="radio"
                    name="rating"
                    value="5"
                  />
                  <label className={style.rating__label} for="rating-1">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g transform="translate(16,16)">
                        <circle
                          className={style.rating__star_ring}
                          fill="none"
                          stroke="#000"
                          stroke-width="16"
                          r="8"
                          transform="scale(0)"
                        />
                      </g>
                      <g
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                          <polygon
                            className={style.rating__star_fill}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="#000"
                          />
                        </g>
                        <g
                          transform="translate(16,16)"
                          stroke-dasharray="12 12"
                          stroke-dashoffset="12"
                        >
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(0)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(72)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(144)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(216)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(288)"
                            points="0 4,0 16"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={style.rating__sr}>1 star—Terrible</span>
                  </label>
                  <label className={style.rating__label} for="rating-2">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g transform="translate(16,16)">
                        <circle
                          className={style.rating__star_ring}
                          fill="none"
                          stroke="#000"
                          stroke-width="16"
                          r="8"
                          transform="scale(0)"
                        />
                      </g>
                      <g
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                          <polygon
                            className={style.rating__star_fill}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="#000"
                          />
                        </g>
                        <g
                          transform="translate(16,16)"
                          stroke-dasharray="12 12"
                          stroke-dashoffset="12"
                        >
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(0)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(72)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(144)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(216)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(288)"
                            points="0 4,0 16"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={style.rating__sr}>2 stars—Bad</span>
                  </label>
                  <label className={style.rating__label} for="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g transform="translate(16,16)">
                        <circle
                          className={style.rating__star_ring}
                          fill="none"
                          stroke="#000"
                          stroke-width="16"
                          r="8"
                          transform="scale(0)"
                        />
                      </g>
                      <g
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                          <polygon
                            className={style.rating__star_fill}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="#000"
                          />
                        </g>
                        <g
                          transform="translate(16,16)"
                          stroke-dasharray="12 12"
                          stroke-dashoffset="12"
                        >
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(0)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(72)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(144)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(216)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(288)"
                            points="0 4,0 16"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={style.rating__sr}>3 stars—OK</span>
                  </label>
                  <label className={style.rating__label} for="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g transform="translate(16,16)">
                        <circle
                          className={style.rating__star_ring}
                          fill="none"
                          stroke="#000"
                          stroke-width="16"
                          r="8"
                          transform="scale(0)"
                        />
                      </g>
                      <g
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                          <polygon
                            className={style.rating__star_fill}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="#000"
                          />
                        </g>
                        <g
                          transform="translate(16,16)"
                          stroke-dasharray="12 12"
                          stroke-dashoffset="12"
                        >
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(0)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(72)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(144)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(216)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(288)"
                            points="0 4,0 16"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={style.rating__sr}>4 stars—Good</span>
                  </label>
                  <label className={style.rating__label} for="rating-5">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g transform="translate(16,16)">
                        <circle
                          className={style.rating__star_ring}
                          fill="none"
                          stroke="#000"
                          stroke-width="16"
                          r="8"
                          transform="scale(0)"
                        />
                      </g>
                      <g
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                          <polygon
                            className={style.rating__star_fill}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="#000"
                          />
                        </g>
                        <g
                          transform="translate(16,16)"
                          stroke-dasharray="12 12"
                          stroke-dashoffset="12"
                        >
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(0)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(72)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(144)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(216)"
                            points="0 4,0 16"
                          />
                          <polyline
                            className={style.rating__star_line}
                            transform="rotate(288)"
                            points="0 4,0 16"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className={style.rating__sr}>5 stars—Excellent</span>
                  </label>
                  <p className={style.rating__display} data_rating="1" hidden>
                    Terrible
                  </p>
                  <p className={style.rating__display} data_rating="2" hidden>
                    Bad
                  </p>
                  <p className={style.rating__display} data_rating="3" hidden>
                    OK
                  </p>
                  <p className={style.rating__display} data_rating="4" hidden>
                    Good
                  </p>
                  <p className={style.rating__display} data_rating="5" hidden>
                    Excellent
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toy;
