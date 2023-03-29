import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";
import axios from "axios";
import error from "../../assets/images/error.png";

function CategoryList({ filteredPersons, color }) {
  const [file, setFile] = useState([]);
  console.log(filteredPersons);
  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} file={file} />
  ));

  return (
    <div className="col-sm-10 d-flex flex-wrap align-items-center justify-content-around ">
      {filteredPersons == "" ? (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <img style={{ width: "150px", height: "150px" }} src={error} alt="" />
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
