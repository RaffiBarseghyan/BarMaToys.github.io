import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from ""
import AddBasket from "../AddBasket";
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
        <img
          className="br-100 h3 w3 dib"
          alt={person.name}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s"
        />
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
                <AddBasket
                  id={person.id}
                  name={person.name}
                  color={person.color}
                  item={person.item}
                  goal1={person.goal1}
                  goal2={person.goal2}
                  goal3={person.goal3}
                  goal4={person.goal4}
                  goal5={person.goal5}
                  goal6={person.goal6}
                  goal7={person.goal7}
                  agemin={person.agemin}
                  agemax={person.agemax}
                  price={person.price}
                  description={person.description}
                  prodId={items.prodId}
                  image={items.image}
                  file={file}
                />
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
