import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import style from "./shipping.module.scss";

export default function Shipping() {
  const [address, setaddress] = useState("");
  const [change, setchange] = useState("");

  const addressChange = (e) => {
    setaddress(e.target.value);
  };

  const checkChange = (e) => {
    setchange(e.target.checked);
  };
  return (
    <>
      <div className="container">
        <MDBContainer>
          <MDBCard className="text-black p-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <h2>Customer Info</h2>
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
                      onChange={addressChange}
                      className={`${address ? `${style.has_value}` : ""}`}
                      id="street-address"
                      type="email"
                      value={address}
                      name="street-address"
                      autocomplete="street-address"
                      required
                      enterkeyhint="next"
                    />
                    <label htmlFor="street-address">Street address</label>
                  </div>

                  <div
                    className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                  >
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <input
                      onChange={addressChange}
                      className={`${address ? `${style.has_value}` : ""}`}
                      id="street-address"
                      type="email"
                      value={address}
                      name="street-address"
                      autocomplete="street-address"
                      required
                      enterkeyhint="next"
                    />
                    <label htmlFor="street-address">Street address</label>
                  </div>

                  <div>
                    <label for="postal-code">
                      ZIP or postal code (optional)
                    </label>
                    <input
                      className="postal-code"
                      id="postal-code"
                      name="postal-code"
                      autocomplete="postal-code"
                      enterkeyhint="next"
                    />
                  </div>
                  <div>
                    <label for="city">City</label>
                    <input
                      required
                      type="text"
                      id="city"
                      name="city"
                      autocomplete="address-level2"
                      enterkeyhint="next"
                    />
                  </div>
                 
                  <button
                    // onClick={register}
                    className={`mb-4 ${style.btn_icon}`}
                    size="lg"
                  >
                    Save address
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
