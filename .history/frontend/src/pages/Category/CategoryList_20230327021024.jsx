import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import error from "../../assets/images/error.png";

function CategoryList({ filteredPersons }) {
  const [file, setFile] = useState([]);
  const [priceMin, setpriceMin] = useState("");
  const [priceMax, setpriceMax] = useState("");

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} file={file} />
  ));

  const priceMinval = (evt) => {
    setpriceMin(evt.target.value);
  };

  const priceMaxval = (evt) => {
    setpriceMax(evt.target.value);
  };

  return (
    

      <div className="col-sm-10 d-flex flex-wrap align-items-center justify-content-around ">
        {filteredPersons == "" ? (
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <img
              style={{ width: "150px", height: "150px" }}
              src={error}
              alt=""
            />
            <p className={style.boxH2}>Items not found</p>
          </div>
        ) : (
          ""
        )}
        {filtered}
      </div>
    
  );
}

export default CategoryList;
