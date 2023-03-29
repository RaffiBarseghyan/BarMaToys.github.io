import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";
import axios from "axios";
import error from "../../assets/images/error.png";

function CategoryList({
  filteredPersons,
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
  Goal1,
Goal2,
Goal3,
Goal4
Goal5
Goal6
Goal7
}) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard
      key={person.id}
      person={person}
      file={file}
      colorBlacl={colorBlacl}
      colorWhite={colorWhite}
      colorGolden={colorGolden}
      colorRed={colorRed}
      colorPink={colorPink}
      colorBlue={colorBlue}
      colorGreen={colorGreen}
      colorGray={colorGray}
      colorSilver={colorSilver}
      colorYellow={colorYellow}
      colorViolet={colorViolet}
      colorCoral={colorCoral}
      colorBrown={colorBrown}

      materialTree={materialTree}
      materialPaper={materialPaper}
      materialCloth={materialCloth}
      materialPlastic={materialPlastic}
    />
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
