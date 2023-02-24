import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { FaBeer, BsCart3 } from "react-icons/bs";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { AiOutlineLogout4, AiOutlineLogout } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Logout from "./logOut";
import Flag_of_Armenia from "../../assets/images/Flag_of_Armenia.png";

export default function Header() {
  const { t, i18n } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [toy, setToy] = useState([]);
  const [languages, setLanguages] = useState("");

  
  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
    setLanguages(event.target.value);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark ${style.bgColor}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${style.navbars}`}
            id="navbarSupportedContent"
          >
            <ul
              className={`container navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-centre justify-content-between ${style.headerUl1}`}
            >
              <li className={`nav-item ${style.logos}`}>
                <Link className={`navbar-brand ${style.linkStyle}`} to="/">
                  BarMaToys
                </Link>
              </li>
              <form
                className={`form-inline my-2 my-lg-0 d-flex ${style.search}`}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder={t("Search")}
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  {t("Search")}
                </button>
              </form>

              <div className="d-flex">
                <Link
                  className={`nav-link ${style.cart}`}
                  aria-current="page"
                  to="/basket"
                >
                  <BsCart3
                    style={{
                      width: "40px",
                      height: "40px",
                      position: "relative",
                      color: "#fff",
                    }}
                  />
                </Link>

                <li className="nav-item dropdown">
                  {localStorage.getItem("loginEmail") ? (
                    <>
                      <Logout />
                    </>
                  ) : (
                    <>
                      <Link
                        className={`nav-link dropdown ${style.cart}`}
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaRegUser
                          style={{
                            width: "40px",
                            height: "40px",
                            position: "relative",
                            color: "#fff",
                          }}
                        />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/login">
                            {t("Signin")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/register">
                            {t("Register")}
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </li>

                <select
                  className={`form-select form-select-sm ms-5 ${ languages=="am" ?  style.am : style.ru ,languages=="en" ?  style.en : ""}`}
                  aria-label=".form-select-sm example"
                  name="language"
                  onChange={onChange}
                >
                  <option selected={"am" == i18n.language} value="am">
                    Arm
                  </option>
                  <option selected={"en" == i18n.language} value="en">
                    Eng
                  </option>
                  <option selected={"ru" == i18n.language} value="ru">
                    Rus
                  </option>
                </select>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <nav className={`navbar navbar-expand ${style.bgColor1}`}>
        <div className="container-fluid">
          <div
            className={`collapse navbar-collapse ${style.navbars1}`}
            id="navbarSupportedContent"
          >
            <ul
              className={`container navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-centre justify-content-between ${style.headerUl1}`}
            >
              <li className={`nav-item dropdown ${style.dropdownLi}`}>
                <Link
                  className={`nav-link dropdown-toggle ${style.linkStyle1}`}
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("TypeOfToy")}
                </Link>
                <ul className={`dropdown-menu ${style.dropdownBlock}`}>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title1")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title2")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title3")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title4")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title5")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title6")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {t("Title7")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link active ${style.linkStyle1}`}
                  aria-current="page"
                  to="#"
                >
                  {t("Sales")}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link active ${style.linkStyle1}`}
                  aria-current="page"
                  to="#"
                >
                  {t("ToysUnder")}
                  {t("taradram")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
