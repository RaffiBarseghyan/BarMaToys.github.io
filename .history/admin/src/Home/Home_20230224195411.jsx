import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [data, setdata] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setdata(persons.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  return <></>;
}
export default Home;
