import { MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import style from "./shipping.module.scss";

export default function Shipping() {
  const [email, setemail] = useState("");
  const [change, setchange] = useState("");


  const emailChange = (e) => {
    setemail(e.target.value);
  };

  const checkChange = (e) => {
    setchange(e.target.checked);
  };
  return (
    <>
      <div className="container">
        <h2>Customer Info</h2>
        <MDBContainer>
          <MDBCard className="text-black p-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
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
                 

                  <button
                    // onClick={register}
                    className={`mb-4 ${style.btn_icon}`}
                    size="lg"
                  >
                    Register
                  </button>
                </MDBCol>

               
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        ;
      </div>
    </>
  );
}
