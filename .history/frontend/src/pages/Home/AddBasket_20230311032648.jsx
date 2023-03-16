import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import NumericInput from "react-numeric-input";
import Swal from "sweetalert2";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [imgChange, setImgChange] = useState("");
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [basket, setBasket] = useState("");

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = () => {
    window.location.replace("/login");
  };

  const handleShow = () => {
    setShow(true);
  };

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };

  const countChange = (evt) => {
    setCount(evt);
  };

  const addBasket = () => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;
      console.log(persons.data);

      let formData = new FormData();
      formData.append("toyId", id.id);
      formData.append("userEmail", localStorage.getItem("loginEmail"));
      formData.append("count", count);
      console.log(persons.data.ma);
      console.log(id.id);
      console.log(persons.data.toyId == id.id);
      console.log(persons.data.userEmail);
      console.log(localStorage.getItem("loginEmail"));
      console.log(persons.data.userEmail == localStorage.getItem("loginEmail"));
  

      if (
        persons.data.toyId == id.id &&
        persons.data.userEmail == localStorage.getItem("loginEmail")
      ) {
        setBasket("update");
      } else {
        axios.post(`http://barmatoys.loc/api/add/basket`, formData);
      }

      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);

      Swal.fire({
        title: "Success",
        text: "You have been register-in successfully",
        type: "success",
      });
    });
  };

  let x = 0;
  return (
    <div id="asdasdasd">
      <button onClick={handleShow} className={style.basketButtonBasket}>
        {t("AddtoBasket")}
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
                      min={1}
                      max={max}
                      value={count}
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
                    <Button
                      onClick={addBasket}
                      className={style.saveBasket}
                      variant="primary"
                    >
                      {t("Addtobasket")}
                    </Button>
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
