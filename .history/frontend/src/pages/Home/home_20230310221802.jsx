import i18next from "i18next";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SliderGoal from "./components/sliderGoal";

function Home() {
  const [toy1, setToy1] = useState([]);
  const [toy2, setToy2] = useState([]);
  const [toy3, setToy3] = useState([]);
  const [toy4, setToy4] = useState([]);
  const [toy5, setToy5] = useState([]);
  const [toy6, setToy6] = useState([]);
  const [toy7, setToy7] = useState([]);
  const [file, setFile] = useState([]);

  const { t, i18n } = useTranslation();

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/toy`).then((res) => {
      const persons = res.data;
      setToy1(persons.data1);
      setToy2(persons.data2);
      setToy3(persons.data3);
      setToy4(persons.data4);
      setToy5(persons.data5);
      setToy6(persons.data6);
      setToy7(persons.data7);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  return (
    <div className={style.bigbigBox}>
      <div className={`container  ${style.bigBox}`}>
        <SliderGoal data={toy1} file={file} text={t("Title1")} />
        <SliderGoal data={toy2} file={file} text={t("Title2")} />
        <SliderGoal data={toy3} file={file} text={t("Title3")} />
        <SliderGoal data={toy4} file={file} text={t("Title4")} />
        <SliderGoal data={toy5} file={file} text={t("Title5")} />
        <SliderGoal data={toy6} file={file} text={t("Title6")} />
        <SliderGoal data={toy7} file={file} text={t("Title7")} />
      </div>
    </div>
  );
}

export default Home;
