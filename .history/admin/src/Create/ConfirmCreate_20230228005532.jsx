import axios from "axios";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Create.module.scss";
import 'swiper/css';

function ConfirmCreate() {
  const [data, setdata] = useState('');
  const [file, setFile] = useState([]);
  const [imgChange, setImgChange] = useState("");

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/confirmCreate`).then((res) => {
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

  let x = 0;
  return (
    <>
      <div className={`d-flex ${style.itemName} `}>
        
          <div className="col-sm-6 d-flex flex-column align-items-center container ps-5 pe-5">
          <h2 className={`mb-4 ${style.name}`}>{data.name}</h2>
              {file.map((items) => {
                if (items.prodId == data.id && imgChange == items.id) {
                  return (
                    <div className="col-sm-12" key={items.id}>
                      <div
                        className={`${style.boxImageChange} container`}
                        style={{
                          backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                        }}
                      ></div>
                    </div>
                  );
                }
                if (items.prodId == data.id && imgChange == "" && x == 0) {
                  x++;
                  return (
                    <div className="col-sm-12" key={items.id}>
                      <div
                        className={`${style.boxImageChange} container`}
                        style={{
                          backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                        }}
                      ></div>
                    </div>
                  );
                }
              })}
            
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className="col-sm-12 mt-3"
              position={"center"}
              navigation
              slidesPerView={5}
              breakpoints={{
                1200: {
                  spaceBetween: 0,
                  slidesPerView: 4,
                },
                990: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                700: {
                  spaceBetween: 0,
                  slidesPerView: 2,
                },
                200: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              
                  {file.map((items) => {
                    if (items.prodId == data.id) {
                      return (
                        <SwiperSlide
                          key={items.id}
                          className={`d-flex flex-column align-items-center ${style.boxSize}`}
                        >
                          <div className="col-sm-12">
                            <div
                              className={`${style.box1} container`}
                              style={{
                                backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                              }}
                            >
                              <button
                                value={items.id}
                                onClick={imageChange}
                                className={style.imageChangeBtn}
                              ></button>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    }
                  })
                }
             
            </Swiper>
          
        </div>
        <div className="col-sm-6">
                <p>{`'${data.color}'`}</p>
                <input type="color" name={data.color} id="" value={`data.color}"`} />
        </div>
      </div>
    </>
  );
}

export default ConfirmCreate;
