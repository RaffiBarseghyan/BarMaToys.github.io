import React, { useEffect, useState } from "react";
import style from "../basket.module.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { MDBCol, MDBIcon } from "mdb-react-ui-kit";
import PhoneInput from "react-phone-input-2";
import Refund from "./refund";
import Swal from "sweetalert2";
import Paypal from "../PayPal/payPal";
import { useLocation } from "react-router-dom";

export default function Checkout(id) {
  const { t } = useTranslation();

  const [address, setaddress] = useState(null);
  const [country, setcountry] = useState(null);
  const [city, setcity] = useState(null);
  const [postal, setpostal] = useState(null);
  const [phone, setphone] = useState(null);
  const [checkboxVal, setcheckboxVal] = useState("");

  const [addressErr, setaddressErr] = useState("");
  const [countryErr, setcountryErr] = useState("");
  const [cityErr, setcityErr] = useState("");
  const [postalErr, setpostalErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");

  const [data, setData] = useState([]);

  const location = useLocation();
  const { from } = location.state;

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
  const checkboxClick = (e) => {
    setcheckboxVal(e.target.checked);
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

  const handleComplete = () => {
    if (address != "") {
      setaddressErr("border-secondary");
    } else {
      setaddressErr("border-danger");
    }
    if (country != "") {
      setcountryErr("border-secondary");
    } else {
      setcountryErr("border-danger");
    }
    if (city != "") {
      setcityErr("border-secondary");
    } else {
      setcityErr("border-danger");
    }
    if (postal != "") {
      setpostalErr("border-secondary");
    } else {
      setpostalErr("border-danger");
    }
    if (phone != "") {
      setphoneErr("border-secondary");
    } else {
      setphoneErr("border-danger");
    }

    if (address == "") {
      errors("Address Required!");
    } else if (country == "") {
      errors("Country Required!");
    } else if (city == "") {
      errors("City Required!");
    } else if (postal == "") {
      errors("Postal Required!");
    } else if (phone == "") {
      errors("Phone Required!");
    } else if (checkboxVal == false) {
      errors("Checkbox Required!");
    } else {
      let formData = new FormData();
      formData.append("email", localStorage.getItem("loginEmail"));
      formData.append("address", address);
      formData.append("country", country);
      formData.append("city", city);
      formData.append("postal", postal);
      formData.append("phone", phone);

      axios.post(`http://barmatoys.loc/api/update/user`, formData);
    }
    return <Paypal Subtotal={from} />;

  };

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/checkout`, fd).then((res) => {
      const persons = res.data;
      setData(persons.data);
      setaddress(persons.data[0].address);
      setcountry(persons.data[0].country);
      setcity(persons.data[0].city);
      setpostal(persons.data[0].postal);
      setphone(persons.data[0].phone);
    });
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <div>
          <MDBCol className=" d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <div
                  className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1} ${style.md_textbox2}`}
                >
                  <MDBIcon fas icon="envelope" size="lg" />
                  <input
                    onChange={addressChange}
                    className={`${
                      address ? `${style.has_value}` : ""
                    } ${addressErr} `}
                    id="street-address"
                    type="email"
                    value={address}
                    name="street-address"
                    autoComplete="street-address"
                    required
                    enterKeyHint="next"
                  />
                  <label htmlFor="street-address">{t("StreetAddress")}*</label>
                </div>

                <div
                  className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                >
                  <MDBIcon fas icon="envelope " size="lg" />
                  <select
                    onChange={countryChange}
                    className={`${
                      country ? `${style.has_value}` : ""
                    } ${countryErr}`}
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
                  <label htmlFor="country">{t("CountryOrRegion")}*</label>
                </div>

                <div
                  className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                >
                  <MDBIcon fas icon="envelope " size="lg" />
                  <input
                    onChange={cityChange}
                    className={`${city ? `${style.has_value}` : ""} ${cityErr}`}
                    id="city"
                    type="text"
                    value={city}
                    name="city"
                    autoComplete="address-level2"
                    required
                    enterKeyHint="next"
                  />
                  <label htmlFor="city">{t("City")}*</label>
                </div>

                <div
                  className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
                >
                  <MDBIcon fas icon="envelope " size="lg" />
                  <input
                    onChange={postalChange}
                    className={`${
                      postal ? `${style.has_value}` : ""
                    } ${postalErr}`}
                    id="postal-code"
                    type="text"
                    value={postal}
                    name="postal-code"
                    autoComplete="postal-code"
                    required
                    enterKeyHint="next"
                  />
                  <label htmlFor="postal-code">{t("ZIPOrPostalCode")}*</label>
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
                  value={phone}
                />

                <label htmlFor="checkbox" className="d-flex mt-4">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="me-2 form-check-input"
                    value={checkboxVal}
                    onChange={checkboxClick}
                  />
                  {t("IAccept")} <Refund />
                </label>
                
                <button onClick={handleComplete}>click</button>

              </div>
            </div>
          </MDBCol>
        </div>
      </Box>
    </div>
  );
}
