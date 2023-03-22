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
        size="xl"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">Payment</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={`${style.itemName} d-flex just`}>
            <p className="ps-5 pe-5">
              ՈՒՇԱԴՐՈՒԹՅՈՒՆ, վճարումներ կատարելուց առաջ <br />
              նախապես կապ հաստատեք մեր օպերատորների հետ, <br />
              ապրանքի առկայությունը ստուգելու համար, <br />
              ծանրաբեռնվածության պատճառով հնարավոր են որոշ <br />
              ապրանքների առկա չլինելը ուշ հրապարակվեն կայքում: <br />
              Ունենք վճարման հետևյալ եղանակները՝ <br />
              1․ Կանխիկ՝ վճարելով անմիջապե մեր առաքիչին։ <br />
              2․․Փոխանցում հաշվեհամարին՝ 2052 0614 1975 7001 <br />
              (ստացող՝ Milena Ghazaryan) <br />
              3․Փոխանցում քարտին՝ Inecobank 4578 8900 0059 0669 <br />
              4․Իդրամ էլ․ դրամապանակով՝ նշեք պարզապես <br />
              հեռախոսահամարը՝ +374 55 799599 <br />
              5.Արագ դրամական փոխանցումն՝ Ուղարկելով գումարը, <br />
              ստացողը դաշտում նշեք մեր աշխատակցի անուն- <br />
              Ազգանունը՝ Սվետլանա Ղազարյան /Svetlana Ghazaryan։ <br />
              Ուշադրություն, առցանց վճարման դեպքում պարտադիր <br />
              նամակի տեսքով ուղարկեք մեզ փոխանցումը հաստատող <br />
              փաստաթղթի նկարը, որպեզի կարողանանք ավելի օպերատիվ <br />
              կազմակերպել առաքումը։
            </p>
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
