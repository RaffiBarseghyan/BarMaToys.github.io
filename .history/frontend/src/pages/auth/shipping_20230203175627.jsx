import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import style from "./shipping.module.scss";

export default function Shipping() {
  const [email, setemail] = useState("");


  const emailChange = (e) => {
    setemail(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>Customer Info</h2>
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
      </div>
    </>
  );
}

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
            className={`${name ? `${style.has_value}` : ""}`}
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