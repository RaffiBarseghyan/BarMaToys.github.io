import React, { useEffect } from "react";
import style from "./Create.module.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

function valuetext(value) {
  return `${value}°C`;
}

export default function Create() {
  const [name, setname] = useState("");

  const [color, setcolor] = useState("");

  const [item, setitem] = useState("");

  const [goal1, setgoal1] = useState(false);
  const [goal2, setgoal2] = useState(false);
  const [goal3, setgoal3] = useState(false);
  const [goal4, setgoal4] = useState(false);
  const [goal5, setgoal5] = useState(false);
  const [goal6, setgoal6] = useState(false);
  const [goal7, setgoal7] = useState(false);

  const [agemin, setagemin] = useState(10);
  const [agemax, setagemax] = useState(28);

  const [gin, setgin] = useState("");
  const [description, setdescription] = useState("");

  const [value, setValue] = useState([10, 28]);

  const [files, setFiles] = useState([]);
  const [filesid, setFilesId] = useState([0]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/alltoy`).then((res) => {
      const persons = res.data;
      setFilesId(persons.file.id);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setagemin(newValue[0]);
    setagemax(newValue[1]);
  };
  const LocationPath = useNavigate();

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

  const ginval = (evt) => {
    setgin(evt.target.value);
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

  let filesSend = 0;

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
      formData.append("gin", gin);

      formData.append("description", description);

      axios.post(`http://barmatoys.loc/api/create/toy`, formData);

      filesSend++
      setname("");
      setcolor("");
      setitem("");
      setagemin("");
      setagemax("");
      setgin("");
      setdescription("");

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.replace('/confirmcreate');
      }, 1500);
    }
  };

  return (
    <>
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
              className={`${style.section10_input1} ms-5 ps-3`}
              type="text"
              placeholder="Անուն"
            />
          </div>

          <div className={`${style.colors} mt-5`}>
            <h2>Գույն</h2>
            <div className="ms-5">
              <select
                value={color}
                onChange={colorval}
                id="colors"
                name="colors"
              >
                <option className="d-none" value={""}></option>
                <option
                  name="color1"
                  style={{ color: "e00000" }}
                  value={"e00000"}
                >
                  Սև
                </option>
                <option
                  name="color2"
                  style={{ color: "#000" }}
                  value={"#000"}
                >
                  Սպիտակ
                </option>
                <option
                  name="color3"
                  style={{ color: "#ffd700" }}
                  value={"#ffd700"}
                >
                  Ոսկեգույն
                </option>
                <option
                  name="color4"
                  style={{ color: "#e00000" }}
                  value={"#e00000"}
                >
                  Կարմիր
                </option>
                <option
                  name="color5"
                  style={{ color: "#ffc0cb" }}
                  value={"#ffc0cb"}
                >
                  Վարդագույն
                </option>
                <option
                  name="color6"
                  style={{ color: "#00c" }}
                  value={"#00c"}
                >
                  Կապույտ
                </option>
                <option
                  name="color7"
                  style={{ color: "#0c0" }}
                  value={"#0c0"}
                >
                  Կանաչ
                </option>
                <option
                  name="color8"
                  style={{ color: "#ccc" }}
                  value={"#ccc"}
                >
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
              <select value={item} onChange={itemval} id="item" name="item">
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
                <input
                  onChange={goal1val}
                  name="goal1"
                  value={goal1}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label1"
                />
                <label htmlFor="label1">
                  <p>Ուշադրության զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal2val}
                  name="goal2"
                  value={goal2}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label2"
                />
                <label htmlFor="label2">
                  <p>Հիշողության զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal3val}
                  name="goal3"
                  value={goal3}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label3"
                />
                <label htmlFor="label3">
                  <p>Տրամաբանության զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal4val}
                  name="goal4"
                  value={goal4}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label4"
                />
                <label htmlFor="label4">
                  <p>Մտածողության զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal5val}
                  name="goal5"
                  value={goal5}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label5"
                />
                <label htmlFor="label5">
                  <p>Մանր մոտորիկա զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal6val}
                  name="goal6"
                  value={goal6}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label6"
                />
                <label htmlFor="label6">
                  <p>Մեծ մոտորիկա զարգացնող</p>
                </label>
              </div>
              <div
                style={{ height: "30px" }}
                className={`d-flex align-items-center justify-content-center ${style.goals}`}
              >
                <input
                  onChange={goal7val}
                  name="goal7"
                  value={goal7}
                  className="ms-4 me-2 mb-3"
                  type="checkbox"
                  id="label7"
                />
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
                onChange={ginval}
                name="gin"
                value={gin}
                placeholder="Գին"
                type="number"
              />
            </div>
          </div>

          <div className={`${style.colors}`}>
            <h2>Նկար</h2>
            <div className="App">
              <FilePond
                className={style.filePond}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={9}
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                server={`http://barmatoys.loc/api/send-files/${filesid}`}
              />
            </div>
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
            Ավելացնել
          </button>
        </form>
      </div>
    </>
  );
}
