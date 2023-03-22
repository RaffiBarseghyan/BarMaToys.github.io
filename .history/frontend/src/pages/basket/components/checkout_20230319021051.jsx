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
    <div>
      <div
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <header closeButton className={style.button1}>
          <div className="col-sm-10 h2 text-center">Payment</div>
        </header>

        <div className={`${style.moreBody} container`}>
          <title className={`${style.itemName} d-flex justify-content-center`}>
            <p className="ps-5 pe-5">
              ՈՒՇԱԴՐՈՒԹՅՈՒՆ, վճարումներ կատարելուց առաջ <br />
              նախապես կապ հաստատեք մեր օպերատորների հետ, <br />
              ապրանքի առկայությունը ստուգելու համար, <br />
              ծանրաբեռնվածության պատճառով հնարավոր են որոշ <br />
              ապրանքների առկա չլինելը ուշ հրապարակվեն կայքում: <br />
              Ունենք վճարման հետևյալ եղանակները՝ <br />
              1․ <b>Կանխիկ՝</b> վճարելով անմիջապե մեր առաքիչին։ <br />
              2․ <b>Փոխանցում հաշվեհամարին՝</b> 0000 0000 0000 0000 <br />
              (ստացող՝ Anun Azganun) <br />
              3․ <b>Փոխանցում քարտին՝</b> Inecobank 0000 0000 0000 0000 <br />
              4․ <b>Իդրամ էլ․ դրամապանակով՝</b> նշեք պարզապես <br />
              հեռախոսահամարը՝{" "}
              <samp className={style.underline}>+374 99 999999</samp> <br />
              5. <b>Արագ դրամական փոխանցումն՝</b> Ուղարկելով գումարը, <br />
              ստացողը դաշտում նշեք մեր աշխատակցի անուն- <br />
              Ազգանունը՝{" "}
              <samp className={style.underline}>
                Անուն Ազգանուն/Anun Azganun
              </samp>{" "}
              ։ <br />
              Ուշադրություն, առցանց վճարման դեպքում պարտադիր <br />
              նամակի տեսքով ուղարկեք մեզ փոխանցումը հաստատող <br />
              փաստաթղթի նկարը, որպեզի կարողանանք ավելի օպերատիվ <br />
              կազմակերպել առաքումը։
            </p>
          </title>
        </div>
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
      </div>
    </div>
  );
}
