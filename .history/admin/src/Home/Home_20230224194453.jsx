import { useEffect } from "react";

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
