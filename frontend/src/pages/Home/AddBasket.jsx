import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [toy, setToy] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/alltoy`).then((res) => {
      const persons = res.data;
      setToy(persons.data);
    });
  }, []);

  // const [name, setname] = useState("");

  // const nameval = (evt) => {
  //   setname(evt.target.value);
  // };

  // const send = () => {
  //   let formData = new FormData();
  //   formData.append("name", name);

  //   axios.post(`http://practikar:127//api/create/alarm`, formData);

  //   setname("");

  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: `Success`,
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

  return (
    <div id="asdasdasd">
      <button onClick={handleShow} className={style.basketButton}>
        {t("AddtoBasket")}
      </button>
      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-5"></div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={style.itemName}>vdsvdbsbdbdsbdb</Modal.Title>
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
    </div>
  );
}
