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
                    to={`/toy/${item.id}`}
                    state={{ from: item.id }}
                  >
                    <div
                      className={`${style.box} container`}
                      style={{
                        backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                      }}
                    ></div>
                  </Link>
                  <div
                    className={`d-flex justify-content-center ${style.buttonCenter}`}
                    style={{ width: "100%" }}
                  >
                    <AddBasket
                      id={item.id}
                      name={item.name}
                      color={item.color}
                      item={item.item}
                      goal1={item.goal1}
                      goal2={item.goal2}
                      goal3={item.goal3}
                      goal4={item.goal4}
                      goal5={item.goal5}
                      goal6={item.goal6}
                      goal7={item.goal7}
                      agemin={item.agemin}
                      agemax={item.agemax}
                      price={item.price}
                      description={item.description}
                      prodId={items.prodId}
                      image={items.image}
                      file={file}
                    />
                  </div>
                </div>
                // <div
                //   key={items.id}
                //   className={`${style.box} container`}
                //   style={{
                //     backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                //   }}
                // ></div>
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
