import axios from "axios";
import { useEffect, useState } from "react";


export default function initialDetails() {
  const [Toy1, setToy1] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/toy`).then((res) => {
      const persons = res.data;
      setToy1(persons.data1);
    });
  }, []);

  return Toy1;
}


