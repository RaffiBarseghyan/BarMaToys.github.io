import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "../category.module.scss";

function CardComponent(item) {
    console.log(item);

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
    >
      <div className="d-flex align-items-center">
        {item.file.map((items) => {
          if (items.prodId == itemperson.id && x == 0) {
            x++;
            return (
              <div key={items.id}>
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to={`/toy/${itemperson.id}`}
                  state={{ from: itemperson.id }}
                >
                  <div
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                      bgPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </Link>
              </div>
            );
          }
        })}
      </div>

      <Link
        className={`navbar-brand ${style.linkStyle}`}
        to={`/toy/${itemperson.id}`}
        state={{ from: itemperson.id }}
      >
        <h2 className={style.boxH2}>{itemperson.name}</h2>
        <p className={style.boxP}>
          {itemperson.price}
          {t("taradram")}
        </p>
      </Link>
    </div>
  );
}

export default CardComponent;
