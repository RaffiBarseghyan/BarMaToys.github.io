import React from "react";
import Card from "./Card";
import style from "./search.module.scss";

function Category({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <Card key={person.id} person={person} />
  ));
  return (
    <div className={`d-flex flex-column align-items-center ${style.Categorybg}`}>{filtered}</div>
  );
}

export default SearchList;
