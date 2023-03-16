import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./basket.module.scss";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;
      setData(persons.data);
      setFile(persons.file);
      setBasket(persons.basket);

      console.log(persons.data);
    });
  }, []);
  const newArr = data.concat(collection2)[...data, ...basket];
  
  console.log(newArr);
  return (
    <>
      <table className={`table container  ${style.table}`}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {newArr.map((item) => {
            let x = 0;
            return (
              <tr key={item.toyId}>
                {file.map((items) => {
                  if (items.prodId == item.toyId && x == 0) {
                    x++;
                    return (
                      <>
                        <td scope="col">
                          <Link
                            className={`navbar-brand ${style.linkStyle}`}
                            to="/toy"
                            state={{ from: item.id }}
                          >
                            <div
                              className={`${style.box} container`}
                              style={{
                                backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                              }}
                            ></div>
                          </Link>
                        </td>
                      </>
                    );
                  }
                })}
                <td scope="row">{item.name}</td>
                <td scope="row">{item.price}</td>
                <td scope="row">{item.count}</td>

                <td scope="row">{item.count * item.price}</td>

                {/* <th>
                  <button className={`${style.basketButtonDe} btn btn-danger `}>
                    <Delete id={item.id} req="user" />
                  </button>
                </th> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>{t("ALSOLIKE")}</h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
