import axios from "axios";
import { memo } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NumericInput from "react-numeric-input";
import { Link } from "react-router-dom";
import style from "./basket.module.scss";
import CountChange from "./components/countChange";
import Delete from "./components/Delete";

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
    });
  }, []);




  return (
    <>
      <table className={`table container mt-5 ${style.table}`}>
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
          {basket.map((item) => {
            let x = 0;

            return data.map((dataitem) => {
              if (item.toyId == dataitem.id) {
                return (
                  <tr key={item.id}>
                    {file.map((items) => {
                      if (items.prodId == item.toyId && x == 0) {
                        x++;
                        return (
                          <>
                            <td scope="col" className="col-sm-2">
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

                    <td scope="row">{dataitem.name}</td>

                    <td scope="row" className="text-danger">
                      {dataitem.price}
                      {t("taradram")}
                    </td>

                    
                      <CountChange item={item.count} key={item.toyId} dataitem={dataitem.p}/>
                    
                    <td scope="row">{item.count * dataitem.price}</td>

                    <th>
                      <button
                        className={`${style.basketButtonDe} btn btn-danger `}
                      >
                        <Delete id={item.id} req="basket" />
                      </button>
                    </th>
                  </tr>
                );
              }
            });
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
