import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "../category.module.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CardComponentGolal(item) {
  console.log(item.person.id);

  let x = 0;
  const { t } = useTranslation();

  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  return (
    
  );
}

export default CardComponentChange;
