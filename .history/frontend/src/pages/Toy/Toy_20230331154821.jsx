import { Navigate } from "react-router-dom";
import style from "./toy.module.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NumericInput from "react-numeric-input";
import { useTranslation } from "react-i18next";
import Review from "./Review";
import Swal from "sweetalert2";
import SliderGoal from "../Home/components/sliderGoal";

function Toy() {
  const [data, setdata] = useState("");
  const [file, setFile] = useState([]);
  const [user, setUser] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [review, setReview] = useState([]);
  const [imgChange, setImgChange] = useState("");
  const [count, setCount] = useState(1);
  const [update, setUpdate] = useState("");
  const [color, setColor] = useState("#000000");

  const { t } = useTranslation();

  const location = useLocation();
  const { from } = location.state;

  const countChange = (evt) => {
    setCount(evt);
  };

  useEffect(() => {
    const fd = new FormData();
    fd.append("id", from);
    axios.post(`http://barmatoys.loc/api/get/confirmget`, fd).then((res) => {
      const persons = res.data;
      setdata(persons.data[0]);
      setReview(persons.review);
      setUser(persons.user);
      setFile(persons.file);
      setColor(persons.data[0].color);
      setDataAll(persons.dataAll);
    });
  }, []);

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;

      persons.data.map((item) => {
        if (
          item.toyId == from &&
          item.userEmail == localStorage.getItem("loginEmail")
        ) {
          setUpdate("/update");
        }
      });
    });
  }, []);

  const addBasket = () => {
    let formData = new FormData();
    formData.append("toyId", from);
    formData.append("userEmail", localStorage.getItem("loginEmail"));
    formData.append("count", Number(count));

    axios.post(`http://barmatoys.loc/api/add/basket${update}`, formData);
    Swal.fire({
      title: "Success",
      text: "You have been register-in successfully",
      type: "success",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (!from) return <Navigate to="/" />;

  let x = 0;

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };

  let count1 = 0;
  review.map((item) => {
    count1 += Number(item.stars);
  });

  let mid = Math.round(count1 / review.length);

  return (
    <>
      <div className={`d-flex flex-w ${style.itemName} `}>
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
                      bgPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
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
                      bgPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
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
                          bgPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
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
            <p className="me-4">{t("Material")} - </p>
            {data.item == "item1" || data.item == "item2" ? (
              data.item == "item1" ? (
                <h3>{t("Tree")}</h3>
              ) : (
                <h3>{t("Paper")}</h3>
              )
            ) : data.item == "item3" ? (
              <h3>{t("cloth")}</h3>
            ) : (
              <h3>{t("Plastic")}</h3>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">{t("Age")} - </p>
            <h3>
              {data.agemin} -{t("from")}
            </h3>
            <h3 className="ms-2"> {data.agemax}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">{t("Colour")} - </p>
            <input type="color" value={color} disabled />
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">{t("Goal")} - </p>
            <div className="d-flex flex-column align-items-start">
              {data.goal1 == "true" ? <h3>{t("Title1")}</h3> : ""}
              {data.goal2 == "true" ? <h3>{t("Title2")}</h3> : ""}
              {data.goal3 == "true" ? <h3>{t("Title3")}</h3> : ""}
              {data.goal4 == "true" ? <h3>{t("Title4")}</h3> : ""}
              {data.goal5 == "true" ? <h3>{t("Title5")}</h3> : ""}
              {data.goal6 == "true" ? <h3>{t("Title6")}</h3> : ""}
              {data.goal7 == "true" ? <h3>{t("Title7")}</h3> : ""}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-4">{t("Price")} - </p>
            <h4>{data.price} </h4>
          </div>
          <div className="d-flex justify-content-start flex-column">
            <p>{t("Description")} </p>
            <h3>{data.description} </h3>
          </div>

          <div className="col-sm-12 d-flex justify-content-center mt-5 flex-wrap">
            <div className={`${style.cradlesBigBox}  ms-2`}>
              <NumericInput
                mobile
                className={`form-control ${style.cradlesBox}`}
                strict
                value={count}
                min={1}
                max={100}
                editable="true"
                textcolor="#B0228C"
                onChange={countChange}
                iconstyle={{
                  color: "white",
                  justifycontent: "space-between",
                  alignitems: "center",
                }}
                rightbuttonbackgroundcolor="#eaeaea00"
              />
            </div>
            <div>
              <button
                onClick={addBasket}
                className={`${style.saveBasket} btn btn-success ms-2`}
              >
                {t("Addtobasket")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}

      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>{t("ALSOLIKE")}</h2>

          <div className={`container  ${style.bigBox}`}>
            <SliderGoal data={dataAll} file={file} />
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
              className={`d-flex flex-wrap ${
                mid ? "justify-content-between" : "justify-content-center"
              }  ${style.section3Box}`}
            >
              <div className="d-flex flex-wrap">
                <div className="d-flex flex-nowrap">
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
                </div>
                <p className={style.ratingp}>
                  {Number.isInteger(mid) ? mid : "0"} {t("outOf")}
                </p>
              </div>
              <Review id={data.id} />
            </div>

            {/* Reviews */}

            <div>
              <div>
                {review.map((item) => {
                  return (
                    <div className={style.section4BigBox} key={item.id}>
                      <div className="d-flex align-items-center ">
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
                                    className={style.rating__star_strokeToy}
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
                                    className={style.rating__star_strokeToy}
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
                                    className={style.rating__star_strokeToy}
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
                                    className={style.rating__star_strokeToy}
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
                                    className={style.rating__star_strokeToy}
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
                      {user.map((items) => {
                        return (
                          <div
                            className={style.section4BigBoxName}
                            key={items.id}
                          >
                            {items.email == item.userEmail ? items.name : ""}
                          </div>
                        );
                      })}
                      <h4 className={style.section4h4}>{item.review}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toy;
