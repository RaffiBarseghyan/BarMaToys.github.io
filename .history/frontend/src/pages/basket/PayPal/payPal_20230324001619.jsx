import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import style from "./paypal.module.scss";
import { useTranslation } from "react-i18next";

export default function Paypal(item) {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  console.log(item);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    let formData = new FormData();
    formData.append("email", localStorage.getItem("loginEmail"));
    formData.append("address", address);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("postal", postal);
    formData.append("phone", phone);

    axios.post(`http://barmatoys.loc/api/update/user`, formData);
  };

  //Peypal
  const PayPalButton = window.paypal.Buttons.driver("react", {
    React,
    ReactDOM,
  });
  console.log();
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
    // return actions.order.capture();
    return actions.order.capture().then(function (details) {
      console.log(details);
    });
  };
  //Peypal end
  let x = 0;
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
        <Modal.Header closeButton className={style.button2}>
          <Modal.Title className={style.itemName1}>Online Payment</Modal.Title>
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
