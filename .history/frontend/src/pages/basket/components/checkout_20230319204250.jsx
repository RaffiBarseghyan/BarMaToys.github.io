import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function Checkout(id) {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div>
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




