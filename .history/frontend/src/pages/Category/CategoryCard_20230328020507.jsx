import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./category.module.scss";
import AddBasket from "../Home/AddBasket";

function CategoryCard({ person, file ,color}) {
  const { t } = useTranslation();

  let x = 0;

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
    >
      {person.color == color ? "":""}
      
    </div>
  );
}

export default CategoryCard;
