import { memo } from "react";




function Greeting() {

    useEffect(() => {
        const fd = new FormData();
        fd.append("userEmail", localStorage.getItem("loginEmail"));
        axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
          const persons = res.data;
          setData(persons.data);
          setFile(persons.file);
          setBasket(persons.basket);
          
        });
      }, []);


  const Greeting = memo(function Greeting({ count, id }) {
    return basket.map((basketItem) => {
      if (id == basketItem.toyId) {
        return count;
      }
    });
  });
}

export default Greeting;
