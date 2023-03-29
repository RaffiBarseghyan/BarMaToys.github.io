import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "../category.module.scss";

function CardComponent(item) {
  console.log(item.person);
  const [file, setFile] = useState(item.file);
  const [person, setPerson] = useState(item.person);

  console.log();
  let x = 0;
  const { t } = useTranslation();

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
    >
      <div className="d-flex align-items-center">
        {file.prodId == person.id && x == 0 ? (
          <div key={file.id}>
            <Link
              className={`navbar-brand ${style.linkStyle}`}
              to={`/toy/${person.id}`}
              state={{ from: person.id }}
            >
              <div
                className={`${style.box} container`}
                style={{
                  backgroundImage: `url("http://barmatoys.loc/storage/uploads/${file.image}")`,
                  bgPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </Link>
          </div>
        ) : (
          ""
        )}
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
  );
}

export default CardComponent;
