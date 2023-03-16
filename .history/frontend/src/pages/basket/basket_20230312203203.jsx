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

      
    });
  }, []);
  console.log(basket);
  console.log(data);




  function merge(){
    var result = [];
    
    Array.prototype.forEach.call(arguments, function(arr){ // Проходимся по переданным агрументам, функция принимает неограниченное количество аргументов
      if(Array.isArray(arr)){
        for(e in arr){ // Проходимся по всем
          e = arr[e];  // переданным объектам
          var tmp = {}, isAdd = true;
        
          result.some(function(i){
            if(i.id == e.id){
              tmp = i;       // Если в массиве уже был объект с данным id, то берём его
              isAdd = false; // и запрещаем добавлять его в результат
              return true;
            }
          });
        
          for(prop in e){
            tmp[prop] = e[prop]; // Изменяем/добавляем свойства из переданного объекта
          }
        
          if(isAdd)
            result.push(tmp);
        }
      }
    });
    
    return result;
  }


  var res = merge(data, basket);


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
          {basket.map((item) => {
            let x = 0;
            return data.map((dataitem) => {
              return (
                <tr key={item.id}>
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
                                key={item.id}
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
                  {dataitem.id == item.toyId ? (
                    <td scope="row">{dataitem.name}</td>
                  ) : (
                    ""
                  )}
                  {dataitem.id == item.toyId ? (
                    <td scope="row">{dataitem.price}</td>
                  ) : (
                    ""
                  )}
                  {dataitem.id == item.toyId ? (
                    <td scope="row">{item.count}</td>
                  ) : (
                    ""
                  )}
                  {dataitem.id == item.toyId ? (
                    <td scope="row">{item.count * dataitem.price}</td>
                  ) : (
                    ""
                  )}

                  {/* <th>
                  <button className={`${style.basketButtonDe} btn btn-danger `}>
                    <Delete id={item.id} req="user" />
                  </button>
                </th> */}
                </tr>
              );
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
