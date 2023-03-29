import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./category.module.scss";

function CategoryCard({ person }) {
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
      to={`/toy/${person.id}`}
      onClick={() =>
        setTimeout(() => {
          window.location.reload();
        }, 0)
      }
      state={{ from: person.id }}
    >
      <div
        style={{ width: "300px", height: "60px" }}
        className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
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
        </div>

        <Link
          className={`navbar-brand ${style.linkStyle}`}
          to={`/toy/${person.id}`}
          state={{ from: person.id }}
        >
          <h2 className={style.boxH2}>{person.name}</h2>
          <p className={style.boxP}>
            {person.price}
            {t("taradram")}
          </p>
        </Link>
      </div>
    </Link>
  );
}

export default CategoryCard;
