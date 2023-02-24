import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [toy, setToy] = useState([]);
  const [toy1, setToy1] = useState([]);
  const [toy2, setToy2] = useState([]);
  const [toy3, setToy3] = useState([]);
  const [toy4, setToy4] = useState([]);
  const [toy5, setToy5] = useState([]);
  const [toy6, setToy6] = useState([]);
  const [toy7, setToy7] = useState([]);
  const [file, setFile] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setToy(persons.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  // const [name, setname] = useState("");

  // const nameval = (evt) => {
  //   setname(evt.target.value);
  // };

  // const send = () => {
  //   let formData = new FormData();
  //   formData.append("name", name);

  //   axios.post(`http://practikar:127//api/create/alarm`, formData);

  //   setname("");

  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: `Success`,
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

  return (
    <div id="asdasdasd">
      <button onClick={handleShow} className={style.basketButton}>
        {t("AddtoBasket")}
      </button>

      {localStorage.getItem("loginEmail") ? (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">Զամբյուղի մեջ</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={style.itemName}>
                Խնդրում ենք մուտք գործեք կամ գրանցվեք, որպեսզի կարողանաք
                ավելացնել զամբյուղի մեջ:
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className={style.save} variant="primary">
                Save
              </Button>
            </Modal.Footer>
          </Modal>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            position={"center"}
            navigation
            slidesPerView={1}
          >
            <div className="d-flex">
              {data.map((item) => {
                let x = 0;
                return (
                  <SwiperSlide
                    className={`d-flex flex-column align-items-center ${style.boxSize}`}
                  >
                    {file.map((items) => {
                      if (items.prodId == item.id && x == 0) {
                        x++;
                        return (
                          <div
                            key={item.prodId}
                            className={`${style.box} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        );
                      }
                    })}
                    <h2 className={style.boxH2}>{item.name}</h2>
                    <p className={style.boxP}>
                      {item.gin}
                      {t("taradram")}
                    </p>
                    <button className={style.boxButton}>
                      <AddBasket data={item.id} />
                    </button>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </>
      ) : (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">{t("AddtoFavorites")}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <div className="text-center">
                <FaRegUser
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                    color: "#444",
                  }}
                />
              </div>
              <Modal.Title className={style.itemName}>
                {t("PleaseLogin")}
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                {t("Cancel")}
              </Button>
              <Button
                onClick={windowLoc}
                className={style.save}
                variant="primary"
              >
                {t("Login")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
