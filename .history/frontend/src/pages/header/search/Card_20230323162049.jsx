import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./search.module.scss";

function Card({ person }) {
  const [file, setFile] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  let x = 0;
  return (
    <Link
      className={`navbar-brand ${style.linkStyle}`}
      to="/toy"
      state={{ from: person.id }}
    >
      <div
        className="bg-blue dib br3 pa1 ma2 grow shadow-5 d-flex justify-content-between"
        style={{ width: "300px", height: "100px" }}
      >
        <div className="d-flex">
          {file.map((items) => {
            if (items.prodId == person.id && x == 0) {
              x++;

              return (
                <>
                  <div
                    key={person.id}
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  ></div>
                </>
              );
            }
          })}
          <div className="d-flex flex-column align-items-start">
            <h2>{person.name.substring(0, 10)}</h2>
            <p>{person.description.substring(10,'...')}</p>
          </div>
        </div>
        <div>
          {person.price}
          {t("taradram")}
        </div>
      </div>
    </Link>
  );
}

export default Card;
