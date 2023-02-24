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
  return (<>
  
  <div className="d-flex">
          {data.map((item) => {
            let x = 0;
            return (
              <SwiperSlide
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
                          gin={item.gin}
                          description={item.description}
                          prodId={items.prodId}
                          image={items.image}
                          file={file}
                        />
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
              </SwiperSlide>
            );
          })}
        </div>
  </>);
}
export default Home;
