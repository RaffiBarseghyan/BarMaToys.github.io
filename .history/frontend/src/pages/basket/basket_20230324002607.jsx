import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./basket.module.scss";
import CountChange, { Subtotal } from "./components/countChange";
import Delete from "./components/Delete";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

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

  const buyClick = () => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;
      setData(persons.data);
      setBasket(persons.basket);
    });
  };
  let Subtotal = 0;

  basket.map((item) => {
    data.map((dataitem) => {
      if (item.toyId == dataitem.id) {
        Subtotal += Number(dataitem.price * item.count);
      }
    });
  });
  return (
    <>
      <table className={`table container mt-5 ${style.table}`}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{t("Item")}</th>
            <th scope="col">{t("Price")}</th>
            <div className="d-flex justify-content-between">
              <th scope="col">{t("Quantity")}</th>
              <th scope="col">{t("Total")}</th>
            </div>

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
                    <div className={style.countChange}>
                      <CountChange
                        id={item.toyId}
                        item={item.count}
                        key={item.toyId}
                        dataitem={dataitem.price}
                        click={click}
                      />
                    </div>

                    <th>
                      <button className={`${style.basketButtonDe} btn  `}>
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
      <div className="container d-flex align-items-end flex-column">
        <div
          className={`${style.subtotal} d-flex align-items-center justify-content-between`}
        >
          <h2>{t("Subtotal")}: </h2>
          <div className="d-flex">
            <h2>{Subtotal}֏</h2>

            <button onClick={buyClick} className={`btn ms-4 ${style.countBtn}`}>
              {t("Count")}
            </button>
          </div>
        </div>
        <div>
          <Link
            className={`nav-link dropdown ${style.checkout}`}
            to="/checkout"
            role="button"
            state={{ from: Subtotal }}
          >
            {t("Confirm")}
          </Link>
        </div>
      </div>

      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>{t("ALSOLIKE")}</h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
