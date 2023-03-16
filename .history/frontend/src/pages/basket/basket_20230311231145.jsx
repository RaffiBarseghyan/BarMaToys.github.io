import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./basket.module.scss";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;
      setBasket(persons.data);
    });
  }, []);

  return (
    <>

<table className={`table container  ${}`}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item (style number)</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col"></th>

           
          </tr>
        </thead>
        <tbody>
          {/* {user.map((item) => {
            return (
              <tr key={item.prodId}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.email_verified_at}</td>
                <th>{item.address}</th>
                <th>{item.city}</th>
                <th>{item.country}</th>
                <th>{item.postal}</th>
                <th>{item.phone}</th>

                <th>
                  <button className={`${style.basketButtonDe} btn btn-danger `}>
                    <Delete id={item.id} req="user" />
                  </button>
                </th>
                
              </tr>
            );
          })} */}
        </tbody>
      </table>
      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>
            {t("ALSOLIKE")}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
