import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "rive-react";
import Swal from "sweetalert2";
import "./LoginFormComponent.css";
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'

const STATE_MACHINE_NAME = "Login Machine";
const LOGIN_PASSWORD = "teddy";
const LOGIN_TEXT = "Login";
const salt = bcrypt.genSaltSync(10)
/**
 * Use case for a simple login experience that incorporates a Rive asset with a
 * state machine to coordinate user interaction with a form
 * @param riveProps
 */
const LoginFormComponent = (riveProps = {}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  const { rive: riveInstance, RiveComponent } = useRive({
    src: "2244-4437-animated-login-screen.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
  });
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const [loginButtonText, setLoginButtonText] = useState(userValue);
  const inputRef = useRef(null);

  const isCheckingInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isChecking"
  );
  const numLookInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "numLook"
  );
  const trigSuccessInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigSuccess"
  );
  const trigFailInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigFail"
  );
  const isHandsUpInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isHandsUp"
  );

  useEffect(() => {
    if (inputRef?.current && !inputLookMultiplier) {
      setInputLookMultiplier(inputRef.current.offsetWidth / 100);
    }
  }, [inputRef]);

  const onUsernameChange = (e) => {
    const newVal = e.target.value;
    setUserValue(newVal);
    if (!isCheckingInput.value) {
      isCheckingInput.value = true;
    }
    const numChars = newVal.length;
    numLookInput.value = numChars * inputLookMultiplier;
  };

  const onUsernameFocus = () => {
    isCheckingInput.value = true;
    if (numLookInput.value !== userValue.length * inputLookMultiplier) {
      numLookInput.value = userValue.length * inputLookMultiplier;
    }
  };

  function errors(message) {
    return Swal.fire({
      position: "center",
      icon: "error",
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const onSubmit = (e) => {
    // setLoginButtonText("Checking...");
    // setTimeout(() => {
    //   setLoginButtonText(userValue);
    //   passValue == passValue ? trigSuccessInput.fire() : trigFailInput.fire();
    // }, 1500);
    // e.preventDefault();
    // return false;
  };

  const login = (evt) => {
    evt.preventDefault();
    const fd = new FormData();
    fd.append("email", userValue);
    fd.append("password", passValue);

    axios.post("http://barmatoys.loc/api/login", fd).then((res) => {
      if (res["data"]["status"] === "error") {
        setLoginButtonText("Checking...");
        setTimeout(() => {
          setLoginButtonText('');
          passValue == undefined ? trigSuccessInput.fire() : trigFailInput.fire();
        }, 1500);
        evt.preventDefault();
        return false;
      } else {
        window.localStorage.setItem("loginEmail", userValue);
        const hashedPassword = bcrypt.hashSync(passValue, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        window.localStorage.setItem("password", hashedPassword);
        setLoginButtonText("Checking...");
        setTimeout(() => {
          setLoginButtonText(userValue);
          passValue == passValue ? trigSuccessInput.fire() : trigFailInput.fire();
        }, 1500);
        setTimeout(() => {
          navigate('/', {replace: true})
          window.location.reload();
        }, 2500);
        evt.preventDefault();
        return false;
       
      }
      // this.myFormRef.reset();
    });
  };

  return (
    <div className="login-form-component-root">
      <div className="login-form-wrapper">
        <div className="rive-wrapper">
          <RiveComponent className="rive-container" />
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <label>
              <input
                type="text"
                className="form-username"
                name="username"
                placeholder="Email"
                onFocus={onUsernameFocus}
                value={userValue}
                onChange={onUsernameChange}
                onBlur={() => (isCheckingInput.value = false)}
                ref={inputRef}
              />
            </label>
            <label>
              <input
                type="password"
                className="form-pass"
                name="password"
                placeholder="Password (shh.. it's 'teddy')"
                value={passValue}
                onFocus={() => (isHandsUpInput.value = true)}
                onBlur={() => (isHandsUpInput.value = false)}
                onChange={(e) => setPassValue(e.target.value)}
              />
            </label>
            <button onClick={login} className="login-btn">
              {t("Signin")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
