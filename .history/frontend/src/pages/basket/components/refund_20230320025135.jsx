import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Refund() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="asdasdasd">
      <Link
        className={`nav-link dropdown ms-2 ${style.cart} ${style.underline}`}
        to="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleShow}
      >
        {t("refundPolicy")}
      </Link>
      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">{t("RefundPolicy1")}</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={`${style.itemNameref} `}>
            <p>
              {t("RefundPolicyText")} <br />
              {t("RefundPolicyText1")} <br />
              {t("RefundPolicyText2")} <br />
              {t("RefundPolicyText3")} <br />
              {t("RefundPolicyText4")} <br />
            </p>
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
        </Modal.Footer>
      </Modal>
    </div>
  );
}
