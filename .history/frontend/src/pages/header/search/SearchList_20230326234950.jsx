import React, { useEffect } from "react";
import Card from "./Card";
import style from "./search.module.scss";

function SearchList({ filteredPersons }) {
  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <Card key={person.id} person={person} />
  ));
  return (
    <div
      className={`d-flex flex-column align-items-center ${style.searchListbg}`}
    >
      {filtered}
    </div>
  );
}

export default SearchList;
