import React, { useEffect, useState } from "react";
import style from "./toy.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import NumericInput from "react-numeric-input";
import pencil from "../../assets/images/pencil.png";

export default function Clicks() {
  const [show, setShow] = useState(false);
  const [imgChange, setImgChange] = useState("");
  const [stars, setStars] = useState("");

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("/login");
  };

  const handleShow = (evt) => {
    setShow(true);
  };

  const reviewStar1 = (e) => {
    setStars(e.target.value);
  };
  const reviewStar2 = (e) => {
    setStars(e.target.value);
  };
  const reviewStar3 = (e) => {
    setStars(e.target.value);
  };
  const reviewStar4 = (e) => {
    setStars(e.target.value);
  };
  const reviewStar5 = (e) => {
    setStars(e.target.value);
  };

  return (
    <div id="asd">
      <button onClick={handleShow} className={style.writeReview}>
        <img className="me-2" src={pencil} alt="" /> Write a review
      </button>
      {localStorage.getItem("loginEmail") ? (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
          >
            <Modal.Header closeButton className={style.button1}></Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={`${style.itemName} d-flex flex-column align-items-center`}>
              <h2 className={`${style.h2Rev}`}>{t("Reviews")}</h2>
                {/* Toy Stars */}
                <div className="d-flex justify-content-between">
                    <h3></h3>
                  <div className={style.stars}>
                    <form className={style.rating}>
                      <div className={style.rating__stars}>
                        <input
                          id="rating-1"
                          className={`${style.rating__input_1} ${style.rating__input}`}
                          type="radio"
                          name="rating"
                          value={1}
                          onChange={reviewStar1}
                        />
                        <input
                          id="rating-2"
                          className={`${style.rating__input_2} ${style.rating__input}`}
                          type="radio"
                          name="rating"
                          value={2}
                          onChange={reviewStar2}
                        />
                        <input
                          id="rating-3"
                          className={`${style.rating__input_3} ${style.rating__input}`}
                          type="radio"
                          name="rating"
                          value={3}
                          onChange={reviewStar3}
                        />
                        <input
                          id="rating-4"
                          className={`${style.rating__input_4} ${style.rating__input}`}
                          type="radio"
                          name="rating"
                          value={4}
                          onChange={reviewStar4}
                        />
                        <input
                          id="rating-5"
                          className={`${style.rating__input_5} ${style.rating__input}`}
                          type="radio"
                          name="rating"
                          value={5}
                          onChange={reviewStar5}
                        />
                        <label
                          className={style.rating__label}
                          htmlFor="rating-1"
                        >
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
                                strokeWidth="16"
                                r="8"
                                transform="scale(0)"
                              />
                            </g>
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
                                <polygon
                                  className={style.rating__star_fill}
                                  points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                  fill="#000"
                                />
                              </g>
                              <g
                                transform="translate(16,16)"
                                strokeDasharray="12 12"
                                strokeDashoffset="12"
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
                          <span className={style.rating__sr}>
                            1 star—Terrible
                          </span>
                        </label>
                        <label
                          className={style.rating__label}
                          htmlFor="rating-2"
                        >
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
                                strokeWidth="16"
                                r="8"
                                transform="scale(0)"
                              />
                            </g>
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
                                <polygon
                                  className={style.rating__star_fill}
                                  points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                  fill="#000"
                                />
                              </g>
                              <g
                                transform="translate(16,16)"
                                strokeDasharray="12 12"
                                strokeDashoffset="12"
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
                            <g transform="translate(16,16)">
                              <circle
                                className={style.rating__star_ring}
                                fill="none"
                                stroke="#000"
                                strokeWidth="16"
                                r="8"
                                transform="scale(0)"
                              />
                            </g>
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
                                <polygon
                                  className={style.rating__star_fill}
                                  points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                  fill="#000"
                                />
                              </g>
                              <g
                                transform="translate(16,16)"
                                strokeDasharray="12 12"
                                strokeDashoffset="12"
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
                            <g transform="translate(16,16)">
                              <circle
                                className={style.rating__star_ring}
                                fill="none"
                                stroke="#000"
                                strokeWidth="16"
                                r="8"
                                transform="scale(0)"
                              />
                            </g>
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
                                <polygon
                                  className={style.rating__star_fill}
                                  points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                  fill="#000"
                                />
                              </g>
                              <g
                                transform="translate(16,16)"
                                strokeDasharray="12 12"
                                strokeDashoffset="12"
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
                        <label
                          className={style.rating__label}
                          htmlFor="rating-5"
                        >
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
                                strokeWidth="16"
                                r="8"
                                transform="scale(0)"
                              />
                            </g>
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
                                <polygon
                                  className={style.rating__star_fill}
                                  points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                                  fill="#000"
                                />
                              </g>
                              <g
                                transform="translate(16,16)"
                                strokeDasharray="12 12"
                                strokeDashoffset="12"
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
                          <span className={style.rating__sr}>
                            5 stars—Excellent
                          </span>
                        </label>
                        <p
                          className={style.rating__display}
                          data_rating="1"
                          hidden
                        >
                          Terrible
                        </p>
                        <p
                          className={style.rating__display}
                          data_rating="2"
                          hidden
                        >
                          Bad
                        </p>
                        <p
                          className={style.rating__display}
                          data_rating="3"
                          hidden
                        >
                          OK
                        </p>
                        <p
                          className={style.rating__display}
                          data_rating="4"
                          hidden
                        >
                          Good
                        </p>
                        <p
                          className={style.rating__display}
                          data_rating="5"
                          hidden
                        >
                          Excellent
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">{t("AddtoFavorites")}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <div className="text-center">
                <FaRegUser
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                    color: "#444",
                  }}
                />
              </div>
              <Modal.Title className={style.itemName}>
                {t("PleaseLogin")}
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                {t("Cancel")}
              </Button>
              <Button
                onClick={windowLoc}
                className={style.save}
                variant="primary"
              >
                {t("Login")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
