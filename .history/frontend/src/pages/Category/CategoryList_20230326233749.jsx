import React from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";

function CategoryList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} />
  ));
  return (
    <div
      className={`d-flex flex align-items-center ${style.CategoryListbg}`}
    >
      {filtered}
    </div>
  );
}

export default CategoryList;
