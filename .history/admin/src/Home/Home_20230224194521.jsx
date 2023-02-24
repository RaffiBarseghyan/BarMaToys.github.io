import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [setdata, setsetdata] = useState("");

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setdata(persons.data1);
    });
  }, []);
  return <></>;
}
export default Home;
