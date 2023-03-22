import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Tab, TabPanel, Tabs } from "react-tabs";
import { Box } from "@mui/material";
export default function Checkout(id) {
  const [value, setValue] = useState("");
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

  const handleChange =(())

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

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
