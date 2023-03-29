import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./category.module.scss";
import AddBasket from "../Home/AddBasket";

function CategoryCard({
  person,
  file,
  colorBlacl,
  colorWhite,
  colorGolden,
  colorRed,
  colorPink,
  colorBlue,
  colorGreen,
  colorGray,
  colorSilver,
  colorYellow,
  colorViolet,
  colorCoral,
  colorBrown,
  materialTree,
  materialPaper,
  materialCloth,
  materialPlastic,
  priceMin,
  priceMax,
}) {
  const { t } = useTranslation();

  let x = 0;
  if (
    colorBlacl != "" ||
    colorWhite != "" ||
    colorGolden != "" ||
    colorRed != "" ||
    colorPink != "" ||
    colorBlue != "" ||
    colorGreen != "" ||
    colorGray != "" ||
    colorSilver != "" ||
    colorYellow != "" ||
    colorViolet != "" ||
    colorCoral != "" ||
    colorBrown != ""
  ) {
    if (
      colorBlacl != person.color &&
      colorWhite != person.color &&
      colorGolden != person.color &&
      colorRed != person.color &&
      colorPink != person.color &&
      colorBlue != person.color &&
      colorGreen != person.color &&
      colorGray != person.color &&
      colorSilver != person.color &&
      colorYellow != person.color &&
      colorViolet != person.color &&
      colorCoral != person.color &&
      colorBrown != person.color
    ) {
      return <></>;
    } else {
      if (
        materialTree != "" ||
        materialPaper != "" ||
        materialCloth != "" ||
        materialPlastic != ""
      ) {
        if (
          materialTree != person.item &&
          materialPaper != person.item &&
          materialCloth != person.item &&
          materialPlastic != person.item
        ) {
          return <></>;
        } else {
          if (person.price < priceMin) {
            return <></>;
          } else {
            if (person.price > priceMax) {
              return <></>;
            } else {
              return (
                <div
                  className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
                >
                  <div className="d-flex align-items-center">
                    {file.map((items) => {
                      if (items.prodId == person.id && x == 0) {
                        x++;
                        return (
                          <div key={items.id}>
                            <Link
                              className={`navbar-brand ${style.linkStyle}`}
                              to={`/toy/${person.id}`}
                              state={{ from: person.id }}
                            >
                              <div
                                className={`${style.box} container`}
                                style={{
                                  backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
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
          }
        }
      } else {
        if (person.price < priceMin) {
          return <></>;
        } else {
          if (person.price > priceMax) {
            return <></>;
          } else {
            return (
              <div
                className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
              >
                <div className="d-flex align-items-center">
                  {file.map((items) => {
                    if (items.prodId == person.id && x == 0) {
                      x++;
                      return (
                        <div key={items.id}>
                          <Link
                            className={`navbar-brand ${style.linkStyle}`}
                            to={`/toy/${person.id}`}
                            state={{ from: person.id }}
                          >
                            <div
                              className={`${style.box} container`}
                              style={{
                                backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
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
        }
      }
    }
  } else {
    if (
      materialTree != "" ||
      materialPaper != "" ||
      materialCloth != "" ||
      materialPlastic != ""
    ) {
      if (
        materialTree != person.item &&
        materialPaper != person.item &&
        materialCloth != person.item &&
        materialPlastic != person.item
      ) {
        return <></>;
      } else {
        if (person.price < priceMin) {
          return <></>;
        } else {
          if (person.price > priceMax) {
            return <></>;
          } else {
            return (
              <div
                className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
              >
                <div className="d-flex align-items-center">
                  {file.map((items) => {
                    if (items.prodId == person.id && x == 0) {
                      x++;
                      return (
                        <div key={items.id}>
                          <Link
                            className={`navbar-brand ${style.linkStyle}`}
                            to={`/toy/${person.id}`}
                            state={{ from: person.id }}
                          >
                            <div
                              className={`${style.box} container`}
                              style={{
                                backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
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
        }
      }
    } else {
      if (priceMin != "") {
        if (person.price < priceMin) {
          return <></>;
        } else {
          if (priceMax != "") {
            if (person.price > priceMax) {
              return <></>;
            } else {
              return (
                <div
                  className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
                >
                  <div className="d-flex align-items-center">
                    {file.map((items) => {
                      if (items.prodId == person.id && x == 0) {
                        x++;
                        return (
                          <div key={items.id}>
                            <Link
                              className={`navbar-brand ${style.linkStyle}`}
                              to={`/toy/${person.id}`}
                              state={{ from: person.id }}
                            >
                              <div
                                className={`${style.box} container`}
                                style={{
                                  backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
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
          } else {
            return (
              <div
                className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
              >
                <div className="d-flex align-items-center">
                  {file.map((items) => {
                    if (items.prodId == person.id && x == 0) {
                      x++;
                      return (
                        <div key={items.id}>
                          <Link
                            className={`navbar-brand ${style.linkStyle}`}
                            to={`/toy/${person.id}`}
                            state={{ from: person.id }}
                          >
                            <div
                              className={`${style.box} container`}
                              style={{
                                backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
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
        }
      } else {
        return <></>;
      }
    }
  }
}

export default CategoryCard;
