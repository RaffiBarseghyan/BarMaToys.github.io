import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./basket.module.scss";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);
  const [file, setFile] = useState([]);

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", localStorage.getItem("loginEmail"));
    axios.post(`http://barmatoys.loc/api/get/basket`, fd).then((res) => {
      const persons = res.data;
      setBasket(persons.data);
      setFile(persons.file);
    });
  }, []);

  return (
    <>
      <table className={`table container  ${style.table}`}>
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
          {basket.map((item) => {
            return (
              <tr key={item.id}>
                {file.map((items) => {
                  if (items.prodId == item.prod && x == 0) {
                    x++;

                    return (
                      <>
                        <Link
                          className={`navbar-brand ${style.linkStyle}`}
                          to="/toy"
                          state={{ from: item.id }}
                        >
                          <div
                            key={item.id}
                            className={`${style.box} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </Link>
                        <AddBasket
                          id={item.id}
                          name={item.name}
                          color={item.color}
                          item={item.item}
                          goal1={item.goal1}
                          goal2={item.goal2}
                          goal3={item.goal3}
                          goal4={item.goal4}
                          goal5={item.goal5}
                          goal6={item.goal6}
                          goal7={item.goal7}
                          agemin={item.agemin}
                          agemax={item.agemax}
                          price={item.price}
                          description={item.description}
                          prodId={items.prodId}
                          image={items.image}
                          file={file}
                        />
                      </>
                    );
                  }
                })}

                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.email_verified_at}</td>
                <th>{item.address}</th>

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
