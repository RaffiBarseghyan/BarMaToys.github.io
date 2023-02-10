import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "rive-react";
import Swal from "sweetalert2";
import "./LoginFormComponent.css";
import login from "../JSON/login.json"

const STATE_MACHINE_NAME = "Login Machine";
const LOGIN_PASSWORD = "teddy";
const LOGIN_TEXT = "Login";

/**
 * Use case for a simple login experience that incorporates a Rive asset with a
 * state machine to coordinate user interaction with a form
 * @param riveProps
 */
const LoginFormComponent = (riveProps = {}) => {
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
  const [data, setData] = useState([]);

  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const [loginButtonText, setLoginButtonText] = useState(LOGIN_TEXT);
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

  const login = (evt) => {
    evt.preventDefault();
    const fd = new FormData();
    fd.append("email", userValue);
    fd.append("password", passValue);

    axios.post("http://barmatoys.loc/api/login", fd).then((res) => {
      if (res["data"]["status"] === "error") {
        Swal.fire({
          title: "OPPS",
          text: "Error",
          type: "warning",
        });
      } else {
        Swal.fire({
          title: "WOW",
          text: "You have been logged-in successfully",
          type: "success",
        });

        // fetch(login)
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     response.map((item) => {
        //       item.key=1;
        //       item.name = "value2";
        //       item.lastname = "карие";
        //     });
        //   });

        // const json1 = fetch("login.json");

        // const object = JSON.parse(json1);

        // const json2 = JSON.stringify(object);
        // writeFileSync("test.json", json2);
      }
      // this.myFormRef.reset();
    });
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
    setLoginButtonText("Checking...");
    setTimeout(() => {
      setLoginButtonText(LOGIN_TEXT);
      passValue == LOGIN_PASSWORD
        ? trigSuccessInput.fire()
        : trigFailInput.fire();
    }, 1500);
    e.preventDefault();
    return false;
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
              {loginButtonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
