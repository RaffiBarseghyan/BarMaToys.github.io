import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./basket.module.scss";

function Basket() {
  const { t } = useTranslation();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fd = new FormData();
    fd.append("userEmail", from);
    axios.post(`http://barmatoys.loc/api/get/confirmget`, fd).then((res) => {
      const persons = res.data;
      setBasket(persons.data);
    });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>
            {t("ALSOLIKE")}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
