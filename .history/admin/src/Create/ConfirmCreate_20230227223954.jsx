import axios from "axios";
import { useEffect, useState } from "react";

function ConfirmCreate() {

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
      <div className="row">
        <div className="col-sm-6">
          <div className="col-sm-6">
          {data.map((items) => {
            {file.map((items) => {
              if (items.prodId == id.id && imgChange == items.id) {
                return (
                  <div className="col-sm-7" key={items.id}>
                    <div
                      className={`${style.boxImageChange} container`}
                      style={{
                        backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                      }}
                    ></div>
                  </div>
                );
              }
              if (items.prodId == id.id && imgChange == "" && x == 0) {
                x++;
                return (
                  <div className="col-sm-7" key={items.id}>
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
              className="col-sm-9"
              position={"center"}
              navigation
              slidesPerView={4}
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
                if (items.prodId == id.id) {
                  return (
                    <SwiperSlide
                      key={items.id}
                      className={`d-flex flex-column align-items-center ${style.boxSize}`}
                    >
                      <div className="col-sm-9">
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
              })}
            </Swiper>
          </div>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </>
  );
}

export default ConfirmCreate;
