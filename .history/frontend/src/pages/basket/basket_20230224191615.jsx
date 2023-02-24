import { useTranslation } from "react-i18next";
import style from "./basket.module.scss";

function Basket() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid">
        <div className={style.alsoLikeBg}>
          <h2 className={`${style.h2}`}>
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
