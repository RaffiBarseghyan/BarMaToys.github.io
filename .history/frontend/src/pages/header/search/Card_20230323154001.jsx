import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./search.module.scss";
import AddBasket from "../../Home/AddBasket";

function Card({ person }) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  let x = 0;
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 d-flex justify-content-between"
      style={{ width: "400px", height: "100px" }}
    >
      <div className="d-flex">
        {file.map((items) => {
          if (items.prodId == person.id && x == 0) {
            x++;

            return (
              <>
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to="/toy"
                  state={{ from: person.id }}
                >
                  <div
                    key={person.id}
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  ></div>
                </Link>
               
              </>
            );
          }
        })}
        <div>
          <h2>{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </div>
      <div>{person.price}$</div>
    </div>
  );
}

export default Card;
