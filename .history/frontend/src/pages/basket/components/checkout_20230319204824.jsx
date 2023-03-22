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
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>

                {activeStep + 1 == 1}


                {activeStep + 1 == 2 ? (
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
                          ապրանքների առկա չլինելը ուշ հրապարակվեն կայքում:{" "}
                          <br />
                          Ունենք վճարման հետևյալ եղանակները՝ <br />
                          1․ <b>Կանխիկ՝</b> վճարելով անմիջապե մեր առաքիչին։{" "}
                          <br />
                          2․ <b>Փոխանցում հաշվեհամարին՝</b> 0000 0000 0000 0000{" "}
                          <br />
                          (ստացող՝ Anun Azganun) <br />
                          3․ <b>Փոխանցում քարտին՝</b> Inecobank 0000 0000 0000
                          0000 <br />
                          4․ <b>Իդրամ էլ․ դրամապանակով՝</b> նշեք պարզապես <br />
                          հեռախոսահամարը՝{" "}
                          <samp className={style.underline}>
                            +374 99 999999
                          </samp>{" "}
                          <br />
                          5. <b>Արագ դրամական փոխանցումն՝</b> Ուղարկելով
                          գումարը, <br />
                          ստացողը դաշտում նշեք մեր աշխատակցի անուն- <br />
                          Ազգանունը՝{" "}
                          <samp className={style.underline}>
                            Անուն Ազգանուն/Anun Azganun
                          </samp>{" "}
                          ։ <br />
                          Ուշադրություն, առցանց վճարման դեպքում պարտադիր <br />
                          նամակի տեսքով ուղարկեք մեզ փոխանցումը հաստատող <br />
                          փաստաթղթի նկարը, որպեզի կարողանանք ավելի օպերատիվ{" "}
                          <br />
                          կազմակերպել առաքումը։
                        </p>
                      </title>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}
