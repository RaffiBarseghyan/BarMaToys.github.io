import React from "react";
import Card from "./Card";
import style from "./search.module.scss";

function CategoryList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} />
  ));
  return (
    <div className={`d-flex flex-column align-items-center ${style.CategoryListbg}`}>{filtered}</div>
  );
}

export default CategoryList;
