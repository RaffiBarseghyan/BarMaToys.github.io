import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./search.module.scss";

function Card({ person }) {
  const [file, setFile] = useState([]);
  const { t } = useTranslation();


  let x = 0;

  return (
    <Link
      className={`navbar-brand ${style.linkStyle}`}
      to={`/toy/${person.id}`}
      onClick={() =>
        setTimeout(() => {
          window.location.reload();
        }, 0)
      }
      state={{ from: person.id }}
    >
      <div
        className="dib br3 pa1 grow shadow-5 d-flex justify-content-between"
        style={{ width: "300px", height: "60px" }}
      >
        <div className="d-flex align-items-center">
          {file.map((items) => {
            if (items.prodId == person.id && x == 0) {
              x++;

              return (
                <div
                  key={items.id}
                  className={`${style.box} container`}
                  style={{
                    backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                  }}
                ></div>
              );
            }
          })}
          <div
            className={`d-flex flex-column align-items-start justify-content-end ${style.substr}`}
          >
            <h2>{person.name}</h2>
            <p>{person.description}</p>
          </div>
        </div>
        <div className={style.searchPrice}>
          {person.price}
          {t("taradram")}
        </div>
      </div>
    </Link>
  );
}

export default Card;
