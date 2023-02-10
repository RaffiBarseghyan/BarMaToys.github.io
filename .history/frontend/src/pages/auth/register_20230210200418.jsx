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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [postal, setpostal] = useState("");
  const [phone, setphone] = useState("");

  const addressChange = (e) => {
    setaddress(e.target.value);
  };

  const countryChange = (e) => {
    setcountry(e.target.value);
  };

  const cityChange = (e) => {
    setcity(e.target.value);
  };

  const postalChange = (e) => {
    setpostal(e.target.value);
  };

  const phoneChange = (e) => {
    setphone(e);
  };

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
      setemailErr("border-danger");
    } else if (password == "" || password != passwordRep) {
      errors("Password Required!");
      setpasswordErr("border-danger");
      setpasswordRepErr("border-danger");
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
                  className={`${email ? `${style.has_value}` : ""} ${emailErr}`}
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
                  className={`${
                    password ? `${style.has_value}` : ""
                  } ${passwordErr}`}
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
                  className={`${
                    passwordRep ? `${style.has_value}` : ""
                  } ${passwordRepErr}`}
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
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Customer Info
              </p>
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column justify-content-between">
                  <div
                    className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1} ${style.md_textbox2}`}
                  >
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <input
                      onChange={addressChange}
                      className={`${address ? `${style.has_value}` : ""}`}
                      id="street-address"
                      type="email"
                      value={address}
                      name="street-address"
                      autoComplete="street-address"
                      required
                      enterKeyHint="next"
                    />
                    <label htmlFor="street-address">Street address</label>
                  </div>

                  <div
                    className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                  >
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <select
                      onChange={countryChange}
                      className={`${country ? `${style.has_value}` : ""}`}
                      id="country"
                      type="email"
                      value={country}
                      name="country"
                      autoComplete="country"
                      required
                      enterKeyHint="done"
                    >
                      <option></option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua &amp; Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AC">Ascension Island</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia &amp; Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="BQ">Caribbean Netherlands</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo - Brazzaville</option>
                      <option value="CD">Congo - Kinshasa</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d’Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="SZ">Eswatini</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">
                        Falkland Islands (Islas Malvinas)
                      </option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard &amp; McDonald Islands</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar (Burma)</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="KP">North Korea</option>
                      <option value="MK">North Macedonia</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn Islands</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">São Tomé &amp; Príncipe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia &amp; South Sandwich Islands
                      </option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="BL">St Barthélemy</option>
                      <option value="SH">St Helena</option>
                      <option value="KN">St Kitts &amp; Nevis</option>
                      <option value="LC">St Lucia</option>
                      <option value="MF">St Martin</option>
                      <option value="PM">St Pierre &amp; Miquelon</option>
                      <option value="VC">St Vincent &amp; Grenadines</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard &amp; Jan Mayen</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad &amp; Tobago</option>
                      <option value="TA">Tristan da Cunha</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks &amp; Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="UM">US Outlying Islands</option>
                      <option value="VI">US Virgin Islands</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis &amp; Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <label htmlFor="country">Country or region</label>
                  </div>

                  <div
                    className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                  >
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <input
                      onChange={cityChange}
                      className={`${city ? `${style.has_value}` : ""}`}
                      id="city"
                      type="text"
                      value={city}
                      name="city"
                      autoComplete="address-level2"
                      required
                      enterKeyHint="next"
                    />
                    <label htmlFor="city">City</label>
                  </div>

                  <div
                    className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                  >
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <input
                      onChange={postalChange}
                      className={`${postal ? `${style.has_value}` : ""}`}
                      id="postal-code"
                      type="text"
                      value={postal}
                      name="postal-code"
                      autoComplete="postal-code"
                      required
                      enterKeyHint="next"
                    />
                    <label htmlFor="postal-code">ZIP or postal code</label>
                  </div>

                  <PhoneInput
                    onChange={phoneChange}
                    autoComplete="tel"
                    required
                    enterKeyHint="next"
                    name="phone"
                    id="phone"
                    specialLabel={""}
                    country={"am"}
                    className={style.phone}
                  />
                </div>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow></M>
          <button
            onClick={register}
            className={`mb-4 ${style.btn_icon}`}
            size="lg"
          >
            Register
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
