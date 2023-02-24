import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [data, setdata] = useState([]);
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setdata(persons.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  return (
    <>
      <div className="d-flex">
        {data.map((item) => {
          let x = 0;
          return (
            <div
              key={item.id}
              className={`d-flex flex-column align-items-center ${style.boxSize}`}
            >
              {file.map((items) => {
                if (items.prodId == item.id && x == 0) {
                  x++;

                  return (
                    <div
                      key={item.id}
                      className={`${style.box} container`}
                      style={{
                        backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                      }}
                    >
                      
                    </div>
                  );
                }
              })}
              <h2 className={style.boxH2}>{item.name}</h2>
              <p className={style.boxP}>
                {item.gin}
                {t("taradram")}
              </p>

              {/* <button className={style.basketButton}>
                  {t("AddtoBasket")}
                </button> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
