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
import pencil from "../../assets/images/pencil.png";
import Review from "./Review";

function Toy() {
  const [data, setdata] = useState("");
  const [file, setFile] = useState([]);
  const [user, setUser] = useState([]);
  const [review, setReview] = useState([]);
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
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);

  useEffect(() => {
    const fd = new FormData();
    fd.append("id", from);
    axios.post(`http://barmatoys.loc/api/get/reviewget`, fd).then((res) => {
      const persons = res.data;
      setReview(persons.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/user`).then((res) => {
      const persons = res.data;
      setUser(persons.user);
    });
  }, []);

  if (!from) return <Navigate to="/" />;

  let x = 0;

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };

  let count = 0;
  review.map((item) => {
    count += Number(item.stars);
  });

  let mid = Math.round(count / review.length);

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
            <h4>{data.price} </h4>
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
                textcolor="#B0228C"
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
            <h2 className={`${style.h2re} mb-5`}>{t("Reviews")}</h2>
            <div
              className={`d-flex ${
                mid ? "justify-content-between" : "justify-content-center"
              }  ${style.section3Box}`}
            >
              <div className="d-flex">
                {mid >= 1 ? (
                  <label className={style.rating__label} htmlFor="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_strokeToy}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                ) : (
                  <label className={style.rating__label} htmlFor="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                )}

                {mid >= 2 ? (
                  <label className={style.rating__label} htmlFor="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_strokeToy}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                ) : (
                  <label className={style.rating__label} htmlFor="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                )}
                {mid >= 3 ? (
                  <label className={style.rating__label} htmlFor="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_strokeToy}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                ) : (
                  <label className={style.rating__label} htmlFor="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                )}
                {mid >= 4 ? (
                  <label className={style.rating__label} htmlFor="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_strokeToy}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                ) : (
                  <label className={style.rating__label} htmlFor="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                )}
                {mid >= 5 ? (
                  <label className={style.rating__label} htmlFor="rating-4">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_strokeToy}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                ) : (
                  <label className={style.rating__label} htmlFor="rating-3">
                    <svg
                      className={style.rating__star}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <g
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g transform="translate(16,16) rotate(180)">
                          <polygon
                            className={style.rating__star_stroke}
                            points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                            fill="none"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                )}

                <p className={style.ratingp}>{mid} out of 5</p>
              </div>
              <Review id={data.id} />
            </div>

            {/* Reviews */}

            <div>
              {user.map((items) => {
                let xx = 0;
                return (
                  <div key={items.id}>
                    {review.map((item) => {
                      return (
                        <>
                          <div className={style.section4BigBox} key={item.id}>
                            <div className="d-flex align-items-center">
                              {item.stars >= 1 ? (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-4"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={
                                            style.rating__star_strokeToy
                                          }
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              ) : (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-3"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={style.rating__star_stroke}
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              )}

                              {item.stars >= 2 ? (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-4"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={
                                            style.rating__star_strokeToy
                                          }
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              ) : (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-3"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={style.rating__star_stroke}
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              )}
                              {item.stars >= 3 ? (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-4"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={
                                            style.rating__star_strokeToy
                                          }
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              ) : (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-3"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={style.rating__star_stroke}
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              )}
                              {item.stars >= 4 ? (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-4"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={
                                            style.rating__star_strokeToy
                                          }
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              ) : (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-3"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={style.rating__star_stroke}
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              )}
                              {item.stars >= 5 ? (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-4"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={
                                            style.rating__star_strokeToy
                                          }
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              ) : (
                                <label
                                  className={style.rating__label}
                                  htmlFor="rating-3"
                                >
                                  <svg
                                    className={style.rating__star}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                  >
                                    <g
                                      stroke="#000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <g transform="translate(16,16) rotate(180)">
                                        <polygon
                                          className={style.rating__star_stroke}
                                          points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                          fill="none"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </label>
                              )}
                              <p className={style.section4BigBoxP}>
                                {item.created_at.substring(0, 10)}
                              </p>
                            </div>
                            <div>
                              {items.email == item.userEmail ? item.name :""}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toy;
