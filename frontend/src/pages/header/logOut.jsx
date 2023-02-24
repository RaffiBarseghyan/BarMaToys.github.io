import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

export default function Logout(id) {
  const [show, setShow] = useState(false);
  const [toy, setToy] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  const logOut = (evt) => {
    window.localStorage.removeItem("loginEmail");
    window.location.reload();
  };
  //   useEffect(() => {
  //     axios.get(`http://barmatoys.loc/api/get/alltoy`).then((res) => {
  //       const persons = res.data;
  //       setToy(persons.data);
  //     });
  //   }, []);

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
