import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Checkout(id) {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const del = () => {
    let formData = new FormData();
    formData.append("id", Object.values(id)[0]);
    axios.post(
      `http://barmatoys.loc/api/delete/${Object.values(id)[1]}`,
      formData
    );

    window.location.reload();
  };

  return (
    <div id="asdasdasd">
      <Link
        className={`nav-link dropdown ${style.checkout}`}
        to="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleShow}
      >
        Check out
      </Link>

      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">ՈՒՇԱԴՐՈՒԹՅՈՒՆ</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={style.itemName}>
            ՈՒՇԱԴՐՈՒԹՅՈՒՆ, վճարումներ կատարելուց առաջ նախապես կապ հաստատեք մեր
            օպերատորների հետ, ապրանքի առկայությունը ստուգելու համար,
            ծանրաբեռնվածության պատճառով հնարավոր են որոշ ապրանքների առկա չլինելը
            ուշ հրապարակվեն կայքում: Ունենք վճարման հետևյալ եղանակները՝ 1․
            Կանխիկ՝ վճարելով անմիջապե մեր առաքիչին։ 2․․Փոխանցում հաշվեհամարին՝
            2052 0614 1975 7001 (ստացող՝ Milena Ghazaryan) 3․Փոխանցում քարտին՝
            Inecobank 4578 8900 0059 0669 4․Իդրամ էլ․ դրամապանակով՝ նշեք
            պարզապես հեռախոսահամարը՝ +374 55 799599 5.Արագ դրամական փոխանցումն՝
            Ուղարկելով գումարը, ստացողը դաշտում նշեք մեր աշխատակցի անուն-
            Ազգանունը՝ Սվետլանա Ղազարյան /Svetlana Ghazaryan։ Ուշադրություն,
            առցանց վճարման դեպքում պարտադիր նամակի տեսքով ուղարկեք մեզ
            փոխանցումը հաստատող փաստաթղթի նկարը, որպեզի կարողանանք ավելի
            օպերատիվ կազմակերպել առաքումը։
          </Modal.Title>
        </Modal.Body>
        <Modal.Footer className={style.footer}>
          <Button
            className={style.cancel}
            variant="secondary"
            onClick={handleClose}
          >
            Չեղարկել
          </Button>
          <Button onClick={del} className={style.save} variant="primary">
            Ջնջել
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}