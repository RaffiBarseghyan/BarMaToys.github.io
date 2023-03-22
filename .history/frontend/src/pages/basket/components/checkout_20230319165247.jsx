import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Checkout(id) {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          className="d-flex justify-content-center"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
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
        <div className="d-flex justify-content-center">
          <TabPanel {x==0 ?  : } value={value} index={0}>
            Item One
          </TabPanel>


          <TabPanel value={value} index={1}>
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
                <title
                  className={`${style.itemName} d-flex justify-content-center`}
                >
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
                    3․ <b>Փոխանցում քարտին՝</b> Inecobank 0000 0000 0000 0000{" "}
                    <br />
                    4․ <b>Իդրամ էլ․ դրամապանակով՝</b> նշեք պարզապես <br />
                    հեռախոսահամարը՝{" "}
                    <samp className={style.underline}>+374 99 999999</samp>{" "}
                    <br />
                    5. <b>Արագ դրամական փոխանցումն՝</b> Ուղարկելով գումարը,{" "}
                    <br />
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
                <Button className={style.save} variant="primary">
                  Continue
                </Button>
              </Modal.Footer>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}
