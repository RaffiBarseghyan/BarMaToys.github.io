import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SliderGoal from "../Home/components/sliderGoal";
import style from "./basket.module.scss";
import CountChange, { Subtotal } from "./components/countChange";
import Delete from "./components/Delete";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [dataAll, setDataAll] = useState([]);

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

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setDataAll(persons.data);
    });
  }, []);

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
      {basket.length == 0 ? (
        <div className="d-flex flex-column align-items-center text-center ">
          <h2 className={` mt-5 ${style.emptyStyle}`}>{t("emptyBasket")}</h2>
          <p>
            {t("TakeProducts")} <br />
            {t("orFindSearch")}
          </p>
          <Link to={"/"} className={`nav-link dropdown ${style.checkout}`}>
            {t("GoMain")}
          </Link>
        </div>
      ) : (
        <table className={`table container mt-5 ${style.table}`}>
          <thead>
            <tr className={style.itemshid}>
              <th scope="col"></th>
              <th scope="col">{t("Item")}</th>
              <th scope="col">{t("Price")}</th>
              <th className="d-flex justify-content-between">
                <div scope="col">{t("Quantity")}</div>
                <div scope="col">{t("Total")}</div>
              </th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => {
              let x = 0;

              return data.map((dataitem) => {
                if (item.toyId == dataitem.id) {
                  return (
                    <tr key={item.id} className={style.allFlex}>
                      {file.map((items) => {
                        if (items.prodId == item.toyId && x == 0) {
                          x++;
                          return (
                            <td scope="col" className={style.imagePos} key={items.id}>
                              <Link
                                className={`navbar-brand ${style.linkStyle}`}
                                to={`/toy/${item.dataitem}`}
                                state={{ from: item.dataitem }}
                              >
                                <div
                                  className={`${style.box} container`}
                                  style={{
                                    backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                                    bgPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                ></div>
                              </Link>
                            </td>
                          );
                        }
                      })}
                      <td scope="row">
                        <Link
                          className={`navbar-brand ${style.linkStyle}`}
                          to={`/toy/${item.id}`}
                          state={{ from: item.id }}
                        >
                          {dataitem.name}
                        </Link>
                      </td>
                      <td scope="row" className="text-danger">
                        {dataitem.price}
                        {t("taradram")}
                      </td>
                      <td className={style.countChange}>
                        <CountChange
                          id={item.toyId}
                          item={item.count}
                          key={item.toyId}
                          dataitem={dataitem.price}
                          click={click}
                        />
                      </td>

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
      )}
      {basket.length == 0 ? (
        ""
      ) : (
        <div className="container d-flex align-items-end flex-column">
          <div
            className={`${style.subtotal} d-flex align-items-center justify-content-between`}
          >
            <h2>{t("Subtotal")}: </h2>
            <div className="d-flex">
              <h2>{Subtotal}֏</h2>

              <button
                onClick={buyClick}
                className={`btn ms-4 ${style.countBtn}`}
              >
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
      )}
      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>{t("ALSOLIKE")}</h2>

          <div className={`container  ${style.bigBox}`}>
            <SliderGoal data={dataAll} file={file} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
