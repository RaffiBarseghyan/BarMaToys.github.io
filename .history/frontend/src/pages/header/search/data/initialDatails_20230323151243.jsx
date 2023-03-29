import axios from "axios";
import { useEffect, useState } from "react";

function SearchData() {
  const [Toy1, setToy1] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setToy1(persons.data1);
    });
  }, []);

  return Toy1;
}

export default SearchData;
