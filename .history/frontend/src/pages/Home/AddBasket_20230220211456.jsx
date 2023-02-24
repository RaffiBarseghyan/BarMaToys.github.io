import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBeer2, FaMinus } from "react-icons/fa";
import { FaBeer3, FaPlus } from "react-icons/fa";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import NumericInput from "react-numeric-input";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const [imgChange, setImgChange] = useState("");
  const [max, setMax] = useState(100);

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  const handleShow = (evt) => {
    setShow(true);
  };

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };
  let x = 0;
  return (
    <div id="asdasdasd">
      <button
        onClick={handleShow}
        className={style.basketButtonBasket}
      ></button>

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
            <Modal.Header closeButton className={style.button1}>
              <div className={`col-sm-5 ${style.prodName}`}>{id.name}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={`${style.itemName} d-flex`}>
                <div className="col-sm-6">
                  {id.file.map((items) => {
                    if (items.prodId == id.id && imgChange == items.id) {
                      return (
                        <div className="col-sm-7" key={items.id}>
                          <div
                            className={`${style.boxImageChange} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </div>
                      );
                    }
                    if (items.prodId == id.id && imgChange == "" && x == 0) {
                      x++;
                      return (
                        <div className="col-sm-7" key={items.id}>
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
                    className="col-sm-9"
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
                    {id.file.map((items) => {
                      if (items.prodId == id.id) {
                        return (
                          <SwiperSlide
                            key={items.id}
                            className={`d-flex flex-column align-items-center ${style.boxSize}`}
                          >
                            <div className="col-sm-9">
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
                <div className="col-sm-6 d-flex justify-content-center">
                  <div className={style.cradlesBigBox}>
                    <NumericInput
                      mobile
                      className={`form-control ${style.cradlesBox}`}
                      strict
                      value={1}
                      min={1}
                      max={max}
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
                    <Button className={style.saveBasket} variant="primary">
                      {t("Addtobasket")}
                    </Button>
                    <button className={style.add-to-cart}>
                      <div className={style.cart">
                        <svg viewBox="0 0 24 19">
                          <path
                            d="M11.25 17C11.25 17.6904 10.6904 18.25 10 18.25C9.30964 18.25 8.75 17.6904 8.75 17C8.75 16.3096 9.30964 15.75 10 15.75C10.6904 15.75 11.25 16.3096 11.25 17Z"
                            stroke-width="1.5 "
                          />
                          <path
                            d="M19.25 17C19.25 17.6904 18.6904 18.25 18 18.25C17.3096 18.25 16.75 17.6904 16.75 17C16.75 16.3096 17.3096 15.75 18 15.75C18.6904 15.75 19.25 16.3096 19.25 17Z"
                            stroke-width="1.5 "
                          />
                          <path
                            d="M1 1H5L5.91304 4M5.91304 4L8.06853 11.0823C8.32483 11.9245 9.10161 12.5 9.98188 12.5H18.585C19.4329 12.5 20.1887 11.9653 20.471 11.1656L23 4H5.91304Z"
                            stroke-width="2"
                          />
                        </svg>
                        <img srcset="https://assets.codepen.io/165585/alge.png 1x, https://assets.codepen.io/165585/alge@2x.png 2x" />
                      </div>
                      <span>Add to cart</span>
                      <div className={style.check">
                        <svg viewBox="0 0 10 10">
                          <path d="M2 5L4 7L8 3" />
                        </svg>
                      </div>
                      <svg className={style.background" viewBox="0 0 142 46">
                        <path d="M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 4 72.5547 4C82.6251 4 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z" />
                      </svg>
                    </button>
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
