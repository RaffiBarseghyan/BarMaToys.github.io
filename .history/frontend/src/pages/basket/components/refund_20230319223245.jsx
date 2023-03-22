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
        политику возврата
      </Link>
      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">Правила возврата</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={style.itemName}>
          Պատվերը ենթակա է վերադարձի ստանալու պահից սկսած 14 օրվա <br />
           ընթացքում․ <br />
           
1․ Եթե գտնվում է այնպիսի վիճակում ինչպիսին ստացել եք /առանց <br /> բացառությունների/։
2․ Եթե չի համապատասխանում նկարագրություններին կամ նկարի միջի պատկերված ապրանքին։
3․Եթե հաճախորդի համար հատուկ պատվերով ներմուծվաճ կամ պատրաստված ապրանք չէ։
4․Վերադաձի ենքակա չեն օգտագործված խաղալիքները:
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
          <Button className={style.save} variant="primary">
            Ջնջել
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
