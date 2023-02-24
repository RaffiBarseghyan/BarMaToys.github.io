import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setdata(persons.data);
    });
    console.log(data);
  }, []);
  return <></>;
}
export default Home;
