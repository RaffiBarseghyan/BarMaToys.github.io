import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import style from "./paypal.module.scss";
import { useTranslation } from "react-i18next";

export default function Paypal(item) {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)};

  //Peypal
  const PayPalButton = if window.paypal.Buttons.driver("react", {
    React,
    ReactDOM,
  });
  console.log(PayPalButton);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: item.Subtotal,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  //Peypal end

  return (
    <div className="d-flex justify-content-center">
      <button
        className={`nav-link dropdown ${style.checkout}`}
        onClick={handleShow}
      >
        {t("Confirm")}
      </button>
      <Modal
        id="payOnlineModal"
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <Modal.Title className={style.itemName}>Online Payment</Modal.Title>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
