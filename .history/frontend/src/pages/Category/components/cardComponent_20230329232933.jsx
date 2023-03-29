import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "../category.module.scss";

function CardComponent(item) {
    {console.log(item)}
  let x = 0;
  const { t } = useTranslation();
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
    >
      
      <div className="d-flex align-items-center">
        {item.file.map((item) => {
          if (item.prodId == item.person.id && x == 0) {
            x++;
            return (
              <div key={item.id}>
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to={`/toy/${item.person.id}`}
                  state={{ from: item.person.id }}
                >
                  <div
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${item.image}")`,
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
        to={`/toy/${item.person.id}`}
        state={{ from: item.person.id }}
      >
        <h2 className={style.boxH2}>{item.person.name}</h2>
        <p className={style.boxP}>
          {item.person.price}
          {t("taradram")}
        </p>
      </Link>
    </div>
  );
}

export default CardComponent;
