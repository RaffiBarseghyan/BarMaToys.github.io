import React, { useEffect, useState } from "react";
import style from ".";
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


  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("/login");
  };

  const handleShow = (evt) => {
    setShow(true);
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
            <Modal.Header closeButton className={style.button1}>
            
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={`${style.itemName} d-flex`}>
                
                
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
