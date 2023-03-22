import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

function () {
  ("#tab").tabs();
  (".login_button").click(function () {
    var active = $("#tab").tabs("option", "active");
    ("#tab").tabs("option", "active", active + 1);
  });
});

export default function Checkout(id) {
  const { t } = useTranslation();
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
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/jquery.ui.tabs.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/themes/base/jquery-ui.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/themes/base/jquery.ui.tabs.min.css"
      />

      <div class="wizard-navigation" id="tab">
        <div class="progress-with-circle">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="1"
            aria-valuemin="1"
            aria-valuemax="5"
            style="width: 15%;"
          ></div>
        </div>
        <ul>
          <li>
            <a href="#type" data-toggle="tab">
              <div class="icon-circle">
                {" "}
                <i class="ti-direction-alt"></i>{" "}
              </div>
              Type{" "}
            </a>
          </li>
          <li>
            <a href="#plan" data-toggle="tab">
              <div class="icon-circle">
                {" "}
                <i class="ti-map"></i>{" "}
              </div>
              Plan{" "}
            </a>
          </li>
          <li>
            <a href="#date_time" data-toggle="tab">
              <div class="icon-circle">
                {" "}
                <i class="ti-panel"></i>{" "}
              </div>
              Date Time{" "}
            </a>
          </li>
          <li>
            <a href="#details" data-toggle="tab">
              <div class="icon-circle">
                {" "}
                <i class="ti-comments"></i>{" "}
              </div>
              Details{" "}
            </a>
          </li>

          <li>
            <a href="#conform" data-toggle="tab">
              <div class="icon-circle">
                {" "}
                <i class="ti-check-box"></i>{" "}
              </div>
              Conform{" "}
            </a>
          </li>
        </ul>
        <div id="type">Type</div>
        <div id="plan">Plan</div>
        <div id="date_time">Date Time</div>
        <div id="details">Details</div>
        <div id="conform">Conform</div>
      </div>

      <button class="login_button">Switch to next Tab</button>

      <div
        className={style.more}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <header closeButton className={style.button1}>
          <div className="m-4 h2 text-center">Payment</div>
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
          <Button className={style.cancel} variant="secondary">
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
