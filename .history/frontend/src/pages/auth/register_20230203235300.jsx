import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";

import style from "./register.module.scss";
import ButtonIcon from "../../components/button/button";
import Swal from "sweetalert2";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRep, setpasswordRep] = useState("");

  const [nameErr, setnameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");
  const [passwordRepErr, setpasswordRepErr] = useState("");

  const [change, setchange] = useState("");

  const handleChange = (e) => {
    setname(e.target.value);
  };
  const emailChange = (e) => {
    setemail(e.target.value);
  };
  const passwordChange = (e) => {
    setpassword(e.target.value);
  };
  const passwordRepChange = (e) => {
    setpasswordRep(e.target.value);
  };
  const checkChange = (e) => {
    setchange(e.target.checked);
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

  const register = () => {
    if (name != "") {
      setnameErr("border-secondary");
    }
    if (email != "") {
      setemailErr("border-secondary");
    }
    if (password != "") {
      setpasswordErr("border-secondary");
    }
    if (passwordRep != "") {
      setpasswordRepErr("border-secondary");
    }

    if (name == "") {
      errors("Name Required!");
      setnameErr("border-danger");
    } else if (email == "") {
      errors("Email Required!");
      setemailErr("border-secondary");

    } else if (password == "" || password != passwordRep) {
      errors("Password Required!");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("change", change);

      axios.post(`http://barmatoys.loc/api/create/user`, formData);

      setname("");
      setemail("");
      setpassword("");
      setpasswordRep("");
      setchange("");
      window.location.replace("http://localhost:3000/shipping");
    }
  };
  return (
    <MDBContainer>
      <MDBCard className="text-black p-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div
                className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox}`}
              >
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <input
                  onChange={handleChange}
                  className={`${name ? `${style.has_value}` : ""} ${nameErr}`}
                  id="textbox1"
                  type="email"
                  value={name}
                />
                <label htmlFor="textbox1">Your Name</label>
              </div>

              <div
                className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
              >
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <input
                  onChange={emailChange}
                  className={`${email ? `${style.has_value}` : ""}`}
                  id="textbox2"
                  type="email"
                  value={email}
                />
                <label htmlFor="textbox2">Your Email</label>
              </div>

              <div
                className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox2}`}
              >
                <MDBIcon fas icon="lock me-3" size="lg" />
                <input
                  onChange={passwordChange}
                  className={`${password ? `${style.has_value}` : ""}`}
                  label="Password"
                  id="textbox3"
                  type="password"
                  value={password}
                />
                <label htmlFor="textbox3">Your Password</label>
              </div>

              <div
                className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox3}`}
              >
                <MDBIcon fas icon="key me-3" size="lg" />
                <input
                  onChange={passwordRepChange}
                  className={`${passwordRep ? `${style.has_value}` : ""}`}
                  label="Repeat your password"
                  id="textbox4"
                  type="password"
                  value={passwordRep}
                />
                <label htmlFor="textbox4">Repeat your password</label>
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value={change}
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                  onChange={checkChange}
                />
              </div>

              <button
                onClick={register}
                className={`mb-4 ${style.btn_icon}`}
                size="lg"
              >
                Register
              </button>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
