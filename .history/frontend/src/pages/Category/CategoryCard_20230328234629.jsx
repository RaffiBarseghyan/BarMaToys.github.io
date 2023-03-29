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
}) {
  const { t } = useTranslation();

  let x = 0;
  if (
    colorBlacl != person.color &&
    colorWhite != person.color &&
    colorGolden != person.color
  ) {
    ""
  }else{

  }
}

export default CategoryCard;
