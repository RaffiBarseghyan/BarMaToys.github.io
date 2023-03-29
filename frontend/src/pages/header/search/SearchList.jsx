import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./search.module.scss";

function SearchList({ filteredPersons }) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <Card key={person.id} person={person} file={file}/>
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
