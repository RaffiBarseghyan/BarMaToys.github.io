import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import Swiper, { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export default function Clicks(item) {
  const [show, setShow] = useState(false);
  const [data1, setdata1] = useState("");
  // const [file, setFile] = useState([]);

  const handleClose = () => setShow(false);

  const { t } = useTranslation();
  // useEffect(() => {
  //   axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
  //     const persons = res.data;
  //     setdata1(persons.data1);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
  //     const persons = res.data;
  //     setFile(persons.file);
  //   });
  // }, []);

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  const handleShow = (evt) => {
    setdata1(item);
    setShow(true);
    console.log(item);
  };

  return (
    <div id="asdasdasd">
      <button onClick={handleShow} className={style.basketButton}>
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
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">Զամբյուղի մեջ</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={style.itemName}>
                {data1.map((item) => {
                  
                    return (
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        position={"center"}
                        navigation
                        slidesPerView={1}
                      >
                        {/*
                        {file.map((items) => {
                          if (items.prodId == item.id) {
                            return (
                              <SwiperSlide
                                className={`d-flex flex-column align-items-center ${style.boxSize}`}
                              >
                                  <div
                                    key={item.prodId}
                                    className={`${style.box} container`}
                                    style={{
                                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                                    }}
                                  ></div>              
                              </SwiperSlide>
                            );
                          }
                        })}*/}
                      </Swiper>
                    );
                  
                })}
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className={style.save} variant="primary">
                Save
              </Button>
            </Modal.Footer>
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
