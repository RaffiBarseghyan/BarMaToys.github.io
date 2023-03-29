import axios from "axios";
import { useEffect, useState } from "react";

function SearchData() {
  const [Toy, setToy] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setToy(persons.data);
    });
  }, []);

  return Toy1;
}

export default SearchData;
