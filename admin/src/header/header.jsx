import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { FaBeer, BsCart3 } from "react-icons/bs";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { FaBeer2, TbTruckDelivery } from "react-icons/tb";

export default function Header() {
  const { t, i18n } = useTranslation();

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };
  return (
    <>
      <nav className={`navbar navbar-expand ${style.bgColor1}`}>
        <div className="container-fluid">
          <div
            className={`collapse navbar-collapse ${style.navbars1}`}
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

              <li className="nav-item">
                <Link
                  className={`nav-link active ${style.linkStyle1}`}
                  aria-current="page"
                  to="/create"
                >
                  {t("Create")}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link active ${style.linkStyle1}`}
                  aria-current="page"
                  to="/users"
                >
                  {t("Users")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
