import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const [imgChange, setImgChange] = useState("");

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  const handleShow = (evt) => {
    setShow(true);
  };

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };
  let x = 0;
  return (
    <div id="asdasdasd">
      <button
        onClick={handleShow}
        className={style.basketButtonBasket}
      ></button>

      {localStorage.getItem("loginEmail") ? (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className={`col-sm-5 ${style.prodName}`}>{id.name}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={style.itemName}>
                <div className="col-sm-6">
                  {id.file.map((items) => {
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
                    {id.file.map((items) => {
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

                <div className="col-sm-6">
                  <div className="qtyButtonWrapper">
                    <div className="qty-selector input-group js-qty-selector ">
                      <span className="input-group-btn">
                        <button className="btn js-qty-selector-minus" type="button">
                          <span
                            className="glyphicon glyphicon-minus"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </span>
                      <input
                        type="text"
                        maxlength="3"
                        className="form-control js-qty-selector-input"
                        size="1"
                        value="1"
                        data-max="FORCE_IN_STOCK"
                        data-min="1"
                        name="qty"
                        id="qty"
                      />
                      <span className="input-group-btn">
                        <button className="btn js-qty-selector-plus" type="button">
                          <span
                            className="glyphicon glyphicon-plus"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </span>
                    </div>
                    <button
                      style="display: block;"
                      id="addToCartButton"
                      productcode="547228"
                      objectid="8846566981633"
                      type="submit"
                      className="hideDelivery homeDelivery btn btn-primary btn-block js-enable-btn"
                    >
                      <p className="popAdd">Add to Basket</p>
                    </button>
                    <button
                      style="display: none;"
                      productcode="547228"
                      objectid="8846566981633"
                      className="col-sm-12 col-md-6 col-lg-6 hideDelivery collectDelivery btn btn-default js-pickup-in-store-button "
                      id="product_547228"
                      type="submit"
                      data-productavailable="true"
                      data-productcart="£6.00"
                      data-availableinselectedstore=""
                      data-sessionpos=""
                      data-addtocarturl="/store-pickup/cart/add"
                      data-productcart-variants="{
                                            
                                        }"
                      data-img='<img loading="lazy" src="/medias/547228-Primary-96Wx96H?context=bWFzdGVyfGltYWdlc3w1MzM2fGltYWdlL2pwZWd8aW1hZ2VzL2g0YS9oZWUvOTI2MDMyOTgyODM4Mi5qcGd8YWMxN2FmNzMwNDM0NTBmYzNlNDg3OTFhZjcwMDQwMjgzMmZlYjI5ODA1OGYyN2ZlZDUyNGEyZmU0YjlmMzc3Mg" alt="547228-(1).jpg" title="547228-(1).jpg"></button>
            		'
                      data-productname="Disney The Lion King Retro Game"
                      data-productcode="547228"
                      data-cartpage="false"
                      data-entrynumber="0"
                      data-actionurl="/store-pickup/547228/pointOfServices"
                      data-value="1"
                    >
                      Pick Up in Store
                    </button>
                  </div>
                </div>
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
