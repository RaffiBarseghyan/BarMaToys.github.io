import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

export default function Logout(id) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  const logOut = (evt) => {
    window.localStorage.removeItem("loginEmail");
    window.location.reload();
  };

  return (
    <div id="asdasdasd">
      <Link
        className={`nav-link dropdown ${style.cart}`}
        to="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleShow}
      >
        <AiOutlineLogout
          style={{
            width: "40px",
            height: "40px",
            position: "relative",
            color: "#fff",
          }}
        />
      </Link>
      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">{t("logout")}</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={style.itemName}>
            {t("AreYouSureYouWantToLogOff")}
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
          <Button onClick={logOut} className={style.save} variant="primary">
            {t("logout")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
