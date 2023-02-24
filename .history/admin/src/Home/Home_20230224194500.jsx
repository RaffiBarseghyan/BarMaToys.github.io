import { useEffect } from "react";
import axios from "axios";

function Home() {

    const [name, setname] = useState("");


  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setdata1(persons.data1);
    });
  }, []);
  return <></>;
}
export default Home;
