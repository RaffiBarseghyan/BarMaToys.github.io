import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Slider from "@mui/material/Slider";

import close from "../assets/images/x.png";
import UploadUpd from "./UplodeUpd";
import { useNavigate } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

export default function Update() {
  const location = useLocation();
  const navigate = useNavigate();

  const { from } = location.state;
  const [file, setFile] = useState([]);

  const [name, setname] = useState(from.name);

  const [color, setcolor] = useState(from.color);

  const [item, setitem] = useState(from.item);

  const [goal1, setgoal1] = useState(from.goal1);
  const [goal2, setgoal2] = useState(from.goal2);
  const [goal3, setgoal3] = useState(from.goal3);
  const [goal4, setgoal4] = useState(from.goal4);
  const [goal5, setgoal5] = useState(from.goal5);
  const [goal6, setgoal6] = useState(from.goal6);
  const [goal7, setgoal7] = useState(from.goal7);

  const [agemin, setagemin] = useState(from.agemin);
  const [agemax, setagemax] = useState(from.agemax);

  const [price, setprice] = useState(from.price);
  const [description, setdescription] = useState(from.description);

  const [value, setValue] = useState([agemin, agemax]);
  const [imgChange, setImgChange] = useState("");

  const imageDelete = (evt) => {
    setImgChange(evt.target.value);
    let formData = new FormData();
    formData.append("prodId", evt.target.getAttribute("a-key"));
    axios.post(`http://barmatoys.loc/api/delete/toy`, formData);
    window.location.reload();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setagemin(newValue[0]);
    setagemax(newValue[1]);
  };

  const nameval = (evt) => {
    setname(evt.target.value);
  };
  // color
  const colorval = (evt) => {
    setcolor(evt.target.value);
  };
  //item

  const itemval = (evt) => {
    setitem(evt.target.value);
  };

  // checked

  const goal1val = (evt) => {
    setgoal1(evt.target.checked);
  };
  const goal2val = (evt) => {
    setgoal2(evt.target.checked);
  };
  const goal3val = (evt) => {
    setgoal3(evt.target.checked);
  };
  const goal4val = (evt) => {
    setgoal4(evt.target.checked);
  };
  const goal5val = (evt) => {
    setgoal5(evt.target.checked);
  };
  const goal6val = (evt) => {
    setgoal6(evt.target.checked);
  };
  const goal7val = (evt) => {
    setgoal7(evt.target.checked);
  };

  const priceval = (evt) => {
    setprice(evt.target.value);
  };

  const descriptionval = (evt) => {
    setdescription(evt.target.value);
  };
  function errors(message) {
    return Swal.fire({
      position: "center",
      icon: "error",
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);

  const sendMessage = () => {
    if (name == "") {
      errors("Name Required!");
    } else if (color == "") {
      errors("Color Required!");
    } else if (item == "") {
      errors("Item Required!");
    } else if (agemin == "") {
      setagemin(10);
    } else if (agemax == "") {
      setagemax(28);
    } else if (description == "") {
      errors("Description Required!");
    } else {
      let formData = new FormData();
      formData.append("id", from.id);
      formData.append("name", name);
      formData.append("color", color);
      formData.append("item", item);
      formData.append("goal1", goal1);
      formData.append("goal2", goal2);
      formData.append("goal3", goal3);
      formData.append("goal4", goal4);
      formData.append("goal5", goal5);
      formData.append("goal6", goal6);
      formData.append("goal7", goal7);

      formData.append("agemin", agemin);
      formData.append("agemax", agemax);
      formData.append("price", price);

      formData.append("description", description);

      axios.post(`http://barmatoys.loc/api/update/toy`, formData);

      setname("");
      setcolor("");
      setitem("");
      setagemin("");
      setagemax("");
      setprice("");
      setdescription("");

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(-1);
    }
  };

  return (
    <div
      className={`${style.section10} d-flex flex-column justify-content-center align-items-center`}
    >
      <form
        action=""
        className={`${style.section10box} d-flex flex-column justify-content-center align-items-start container`}
      >
        <div className={`${style.section10_input1_2} ${style.colors} mt-4 `}>
          <h2>Անուն</h2>
          <input
            value={name}
            onChange={nameval}
            name="name"
            className={`${style.section10_input1} ps-3 ms-5`}
            type="text"
            placeholder="Անուն"
          />
        </div>

        <div className={`${style.colors} mt-5`}>
          <h2>Գույն</h2>
          <div className="ms-5">
            <select
              className="form-select"
              value={color}
              onChange={colorval}
              id="colors"
              name="colors"
            >
              <option className="d-none" value={""}></option>
              <option name="color1" style={{ color: "#000000" }} value={"#000000"}>
                Սև
              </option>
              <option name="color2" style={{ color: "#000000" }} value={"#ffffff"}>
                Սպիտակ
              </option>
              <option
                name="color3"
                style={{ color: "#ffd700" }}
                value={"#ffd700"}
              >
                Ոսկեգույն
              </option>
              <option name="color4" style={{ color: "#e00000" }} value={"#e00000"}>
                Կարմիր
              </option>
              <option
                name="color5"
                style={{ color: "#ffc0cb" }}
                value={"#ffc0cb"}
              >
                Վարդագույն
              </option>
              <option name="color6" style={{ color: "#1e00ff" }} value={"#1e00ff"}>
                Կապույտ
              </option>
              <option name="color7" style={{ color: "#50b724" }} value={"#50b724"}>
                Կանաչ
              </option>
              <option name="color8" style={{ color: "#b7b8b7" }} value={"#b7b8b7"}>
                Մոխրագույն
              </option>
              <option
                name="color9"
                style={{ color: "#efefef" }}
                value={"#efefef"}
              >
                Արծաթագույն
              </option>
              <option
                name="color10"
                style={{ color: "#ffff00" }}
                value={"#ffff00"}
              >
                Դեղին
              </option>
              <option
                name="color11"
                style={{ color: "#800080" }}
                value={"#800080"}
              >
                Մանուշակագույն
              </option>
              <option
                name="color12"
                style={{ color: "#ff7f50" }}
                value={"#ff7f50"}
              >
                Կորալագույն
              </option>
              <option
                name="color13"
                style={{ color: "#897058" }}
                value={"#897058"}
              >
                Շագանակագույն
              </option>
            </select>
          </div>
        </div>

        <div className={`${style.colors} mt-5`}>
          <h2>Նյութ</h2>
          <div className="ms-5">
            <select
              className="form-select"
              value={item}
              onChange={itemval}
              id="item"
              name="item"
            >
              <option className="d-none" value="item"></option>
              <option name="item1" value={"item1"}>
                Փայտ
              </option>
              <option name="item2" value={"item2"}>
                Թուղթ
              </option>
              <option name="item3" value={"item3"}>
                Կտոր
              </option>
              <option name="item4" value={"item4"}>
                Պլաստիկ
              </option>
            </select>
          </div>
        </div>

        <div className={`${style.colors} mt-5`}>
          <h2>Նպատակը</h2>
          <div className="ms-5 d-flex flex-wrap">
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal1 == "true" ? (
                <input
                  onChange={goal1val}
                  name="goal1"
                  value={goal1}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label1"
                  checked
                />
              ) : (
                <input
                  onChange={goal1val}
                  name="goal1"
                  value={goal1}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label1"
                />
              )}

              <label htmlFor="label1">
                <p>Ուշադրության զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal2 == "true" ? (
                <input
                  onChange={goal2val}
                  name="goal2"
                  value={goal2}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label2"
                  checked
                />
              ) : (
                <input
                  onChange={goal2val}
                  name="goal2"
                  value={goal2}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label2"
                />
              )}

              <label htmlFor="label2">
                <p>Հիշողության զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal3 == "true" ? (
                <input
                  onChange={goal3val}
                  name="goal3"
                  value={goal3}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label3"
                  checked
                />
              ) : (
                <input
                  onChange={goal3val}
                  name="goal3"
                  value={goal3}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label3"
                />
              )}

              <label htmlFor="label3">
                <p>Տրամաբանության զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal4 == "true" ? (
                <input
                  onChange={goal4val}
                  name="goal4"
                  value={goal4}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label4"
                  checked
                />
              ) : (
                <input
                  onChange={goal4val}
                  name="goal4"
                  value={goal4}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label4"
                />
              )}

              <label htmlFor="label4">
                <p>Մտածողության զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal5 == "true" ? (
                <input
                  onChange={goal5val}
                  name="goal5"
                  value={goal5}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label5"
                  checked
                />
              ) : (
                <input
                  onChange={goal5val}
                  name="goal5"
                  value={goal5}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label5"
                />
              )}

              <label htmlFor="label5">
                <p>Մանր մոտորիկա զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal6 == "true" ? (
                <input
                  onChange={goal6val}
                  name="goal6"
                  value={goal6}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label6"
                  checked
                />
              ) : (
                <input
                  onChange={goal6val}
                  name="goal6"
                  value={goal6}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label6"
                />
              )}

              <label htmlFor="label6">
                <p>Մեծ մոտորիկա զարգացնող</p>
              </label>
            </div>
            <div
              style={{ height: "30px" }}
              className={`d-flex align-items-center justify-content-center ${style.goals}`}
            >
              {goal7 == "true" ? (
                <input
                  onChange={goal7val}
                  name="goal7"
                  value={goal7}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label7"
                  checked
                />
              ) : (
                <input
                  onChange={goal7val}
                  name="goal7"
                  value={goal7}
                  className="ms-4 me-2 mb-3 form-check-input"
                  type="checkbox"
                  id="label7"
                />
              )}

              <label htmlFor="label7">
                <p>Ընկալման զարգացնող</p>
              </label>
            </div>
          </div>
        </div>

        <div className={`${style.age} mt-5 `}>
          <h2>Տարիք</h2>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            className="ms-5"
          />
        </div>

        <div className={`${style.colors} mt-5 mb-5`}>
          <h2>Գին</h2>
          <div className="ms-5 d-flex flex-wrap">
            <input
              onChange={priceval}
              name="price"
              value={price}
              placeholder="Գին"
              type="number"
            />
          </div>
        </div>

        <div className={`${style.colors}`}>
          <h2>Նկար</h2>

          <div className="d-flex flex-wrap mb-5 ms-4">
            {file.map((items) => {
              if (items.prodId == from.id) {
                return (
                  <div
                    key={items.id}
                    className={`${style.box} mt-4`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  >
                    <img
                      onClick={imageDelete}
                      a-key={items.id}
                      src={close}
                      alt=""
                      className={style.close}
                    />
                  </div>
                );
              }
            })}
          </div>

          <UploadUpd id={from.id} />
        </div>
        <textarea
          value={description}
          onChange={descriptionval}
          name="description"
          className={`${style.section10_textarea} mt-4 ps-3 pt-1 text-center`}
          placeholder="Նկարագրություն"
        ></textarea>
        <button
          onClick={sendMessage}
          type="button"
          className={`${style.section10_button} btn mt-4`}
        >
          Թարմացնել
        </button>
      </form>
    </div>
  );
}
