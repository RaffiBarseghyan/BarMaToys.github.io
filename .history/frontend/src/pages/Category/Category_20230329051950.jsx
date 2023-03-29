import { useState } from "react";
import { useParams } from "react-router-dom";
import initialDetails from "../header/search/data/initialDatails";
import CategoryList from "./CategoryList";
import style from "./category.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function Category() {
  const { t } = useTranslation();

  const params = useParams();
  const prodId = params.search;
  const [searchField, setSearchField] = useState(prodId);
  const [priceMin, setpriceMin] = useState("");
  const [priceMax, setpriceMax] = useState(priceMin);
  const [colorBlacl, setcolorBlack] = useState("");
  const [colorWhite, setcolorWhite] = useState("");
  const [colorGolden, setcolorGolden] = useState("");
  const [colorRed, setcolorRed] = useState("");
  const [colorPink, setcolorPink] = useState("");
  const [colorBlue, setcolorBlue] = useState("");
  const [colorGreen, setcolorGreen] = useState("");
  const [colorGray, setcolorGray] = useState("");
  const [colorSilver, setcolorSilver] = useState("");
  const [colorYellow, setcolorYellow] = useState("");
  const [colorViolet, setcolorViolet] = useState("");
  const [colorCoral, setcolorCoral] = useState("");
  const [colorBrown, setcolorBrown] = useState("");

  const [materialTree, setmaterialTree] = useState("");
  const [materialPaper, setmaterialPaper] = useState("");
  const [materialCloth, setmaterialCloth] = useState("");
  const [materialPlastic, setmaterialPlastic] = useState("");

  const [Goal1, setGoal1] = useState("");
  const [Goal2, setGoal2] = useState("");
  const [Goal3, setGoal3] = useState("");
  const [Goal4, setGoal4] = useState("");
  const [Goal5, setGoal5] = useState("");
  const [Goal6, setGoal6] = useState("");
  const [Goal7, setGoal7] = useState("");

  const priceMinval = (evt) => {
    setpriceMin(evt.target.value);
  };

  const priceMaxval = (evt) => {
    setpriceMax(evt.target.value);
  };
  const colorBlackVal = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };

  const colorWhiteVal = (evt) => {
    if (evt.target.checked) {
      setcolorWhite(evt.target.value);
    } else {
      setcolorWhite("");
    }
  };
  const colorGoldenVal = (evt) => {
    if (evt.target.checked) {
      setcolorGolden(evt.target.value);
    } else {
      setcolorGolden("");
    }
  };
  const colorRedVal = (evt) => {
    if (evt.target.checked) {
      setcolorRed(evt.target.value);
    } else {
      setcolorRed("");
    }
  };
  const colorPinkVal = (evt) => {
    if (evt.target.checked) {
      setcolorPink(evt.target.value);
    } else {
      setcolorPink("");
    }
  };
  const colorBlueVal = (evt) => {
    if (evt.target.checked) {
      setcolorBlue(evt.target.value);
    } else {
      setcolorBlue("");
    }
  };
  const colorGreenVal = (evt) => {
    if (evt.target.checked) {
      setcolorGreen(evt.target.value);
    } else {
      setcolorGreen("");
    }
  };
  const colorGrayVal = (evt) => {
    if (evt.target.checked) {
      setcolorGray(evt.target.value);
    } else {
      setcolorGray("");
    }
  };
  const colorSilverVal = (evt) => {
    if (evt.target.checked) {
      setcolorSilver(evt.target.value);
    } else {
      setcolorSilver("");
    }
  };

  const colorYellowVal = (evt) => {
    if (evt.target.checked) {
      setcolorYellow(evt.target.value);
    } else {
      setcolorYellow("");
    }
  };

  const colorVioletVal = (evt) => {
    if (evt.target.checked) {
      setcolorViolet(evt.target.value);
    } else {
      setcolorViolet("");
    }
  };

  const colorCoralVal = (evt) => {
    if (evt.target.checked) {
      setcolorCoral(evt.target.value);
    } else {
      setcolorCoral("");
    }
  };

  const colorBrownVal = (evt) => {
    if (evt.target.checked) {
      setcolorBrown(evt.target.value);
    } else {
      setcolorBrown("");
    }
  };

  const materialTreeVal = (evt) => {
    if (evt.target.checked) {
      setmaterialTree(evt.target.value);
    } else {
      setmaterialTree("");
    }
  };
  const materialPaperVal = (evt) => {
    if (evt.target.checked) {
      setmaterialPaper(evt.target.value);
    } else {
      setmaterialPaper("");
    }
  };
  const materialClothVal = (evt) => {
    if (evt.target.checked) {
      setmaterialCloth(evt.target.value);
    } else {
      setmaterialCloth("");
    }
  };
  const materialPlasticVal = (evt) => {
    if (evt.target.checked) {
      setmaterialPlastic(evt.target.value);
    } else {
      setmaterialPlastic("");
    }
  };

  const goal1Val = (evt) => {
    setGoal1(evt.target.checked);
  };

  const goal2Val = (evt) => {
    setGoal2(evt.target.checked);
  };

  const goal3Val = (evt) => {
    setGoal3(evt.target.checked);
  };

  const goal4Val = (evt) => {
    setGoal4(evt.target.checked);
  };

  const goal5Val = (evt) => {
    setGoal5(evt.target.checked);
  };

  const goal6Val = (evt) => {
    setGoal6(evt.target.checked);
  };

  const goal7Val = (evt) => {
    setGoal7(evt.target.checked);
  };

  const filteredPersons = initialDetails().filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  function searchList() {
    return (
      <>
        <p className={style.boxH2}>
          {" "}
          You searched for "{prodId}" ( {filteredPersons.length} - items)
        </p>
        <div
          className={`d-flex align-items-start justify-content-around container ${style.CategoryListbg}`}
        >
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            style={{ minWidth: "350px", marginTop: "50px" }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className={style.accordionHeader}>
                {t("Price")}
              </Accordion.Header>
              <Accordion.Body>
                <div className={`${style.price} d-flex`}>
                  <input
                    onChange={priceMinval}
                    name="priceMin"
                    value={priceMin}
                    placeholder={t("from")}
                    type="number"
                    min={1}
                    onWheel={(e) => e.target.blur()}
                  />
                  <input
                    className="ms-2"
                    onChange={priceMaxval}
                    name="priceMax"
                    value={priceMax}
                    placeholder={t("to")}
                    type="number"
                    min={priceMin}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={style.accordionHeader}>
                {t("Color")}
              </Accordion.Header>
              <Accordion.Body>
                <div className={`d-flex flex-column ${style.colors}`}>
                  <label htmlFor="0">
                    <input
                      type="checkbox"
                      name=""
                      id="0"
                      value={"#000000"}
                      onChange={colorBlackVal}
                    />
                    <span> {t("black")}</span>
                  </label>
                  <label htmlFor="1">
                    <input
                      type="checkbox"
                      name=""
                      id="1"
                      value={"#ffffff"}
                      onChange={colorWhiteVal}
                    />
                    <span> {t("white")}</span>
                  </label>
                  <label htmlFor="2">
                    <input
                      type="checkbox"
                      name=""
                      id="2"
                      value={"#ffd700"}
                      onChange={colorGoldenVal}
                    />
                    <span> {t("golden")}</span>
                  </label>
                  <label htmlFor="3">
                    <input
                      type="checkbox"
                      name=""
                      id="3"
                      value={"#e00000"}
                      onChange={colorRedVal}
                    />
                    <span> {t("red")}</span>
                  </label>
                  <label htmlFor="4">
                    <input
                      type="checkbox"
                      name=""
                      id="4"
                      value={"#ffc0cb"}
                      onChange={colorPinkVal}
                    />
                    <span> {t("pink")}</span>
                  </label>
                  <label htmlFor="5">
                    <input
                      type="checkbox"
                      name=""
                      id="5"
                      value={"#1e00ff"}
                      onChange={colorBlueVal}
                    />
                    <span> {t("blue")}</span>
                  </label>
                  <label htmlFor="6">
                    <input
                      type="checkbox"
                      name=""
                      id="6"
                      value={"#50b724"}
                      onChange={colorGreenVal}
                    />
                    <span> {t("green")}</span>
                  </label>
                  <label htmlFor="7">
                    <input
                      type="checkbox"
                      name=""
                      id="7"
                      value={"#b7b8b7"}
                      onChange={colorGrayVal}
                    />
                    <span> {t("gray")}</span>
                  </label>
                  <label htmlFor="8">
                    <input
                      type="checkbox"
                      name=""
                      id="8"
                      value={"#efefef"}
                      onChange={colorSilverVal}
                    />
                    <span> {t("silver")}</span>
                  </label>
                  <label htmlFor="9">
                    <input
                      type="checkbox"
                      name=""
                      id="9"
                      value={"#ffff00"}
                      onChange={colorYellowVal}
                    />
                    <span> {t("yellow")}</span>
                  </label>
                  <label htmlFor="10">
                    <input
                      type="checkbox"
                      name=""
                      id="10"
                      value={"#800080"}
                      onChange={colorVioletVal}
                    />
                    <span> {t("violet")}</span>
                  </label>
                  <label htmlFor="11">
                    <input
                      type="checkbox"
                      name=""
                      id="11"
                      value={"#ff7f50"}
                      onChange={colorCoralVal}
                    />
                    <span> coral</span>
                  </label>
                  <label htmlFor="12">
                    <input
                      type="checkbox"
                      name=""
                      id="12"
                      value={"#897058"}
                      onChange={colorBrownVal}
                    />
                    <span> brown</span>
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className={style.accordionHeader}>
                {t("Material")}
              </Accordion.Header>
              <Accordion.Body>
                <div className={`d-flex flex-column ${style.colors}`}>
                  <label htmlFor="material0">
                    <input
                      type="checkbox"
                      name=""
                      id="material0"
                      value={"item1"}
                      onChange={materialTreeVal}
                    />
                    <span> {t("Tree")}</span>
                  </label>
                  <label htmlFor="material1">
                    <input
                      type="checkbox"
                      name=""
                      id="material1"
                      value={"item2"}
                      onChange={materialPaperVal}
                    />
                    <span> {t("Paper")}</span>
                  </label>
                  <label htmlFor="material2">
                    <input
                      type="checkbox"
                      name=""
                      id="material2"
                      value={"item3"}
                      onChange={materialClothVal}
                    />
                    <span> {t("cloth")}</span>
                  </label>
                  <label htmlFor="material3">
                    <input
                      type="checkbox"
                      name=""
                      id="material3"
                      value={"item4"}
                      onChange={materialPlasticVal}
                    />
                    <span> {t("Plastic")}</span>
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className={style.accordionHeader}>
                {t("Goal")}
              </Accordion.Header>
              <Accordion.Body>
                <div className={`d-flex flex-column ${style.colors}`}>
                  <label htmlFor="goal1">
                    <input
                      type="checkbox"
                      name=""
                      id="goal1"
                      value={"goal1"}
                      onChange={goal1Val}
                    />
                    <span> {t("Title1")}</span>
                  </label>
                  <label htmlFor="goal2">
                    <input
                      type="checkbox"
                      name=""
                      id="goal2"
                      value={"goal2"}
                      onChange={goal2Val}
                    />
                    <span> {t("Title2")}</span>
                  </label>
                  <label htmlFor="goal3">
                    <input
                      type="checkbox"
                      name=""
                      id="goal3"
                      value={"goal3"}
                      onChange={goal3Val}
                    />
                    <span> {t("Title3")}</span>
                  </label>
                  <label htmlFor="goal4">
                    <input
                      type="checkbox"
                      name=""
                      id="goal4"
                      value={"goal4"}
                      onChange={goal4Val}
                    />
                    <span> {t("Title4")}</span>
                  </label>
                  <label htmlFor="goal5">
                    <input
                      type="checkbox"
                      name=""
                      id="goal5"
                      value={"goal5"}
                      onChange={goal5Val}
                    />
                    <span> {t("Title5")}</span>
                  </label>
                  <label htmlFor="goal6">
                    <input
                      type="checkbox"
                      name=""
                      id="goal6"
                      value={"goal6"}
                      onChange={goal6Val}
                    />
                    <span> {t("Title6")}</span>
                  </label>
                  <label htmlFor="goal7">
                    <input
                      type="checkbox"
                      name=""
                      id="goal7"
                      value={"goal7"}
                      onChange={goal7Val}
                    />
                    <span> {t("Title7")}</span>
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="4">
              <Accordion.Header className={style.accordionHeader}>
                Age
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
          <CategoryList
            filteredPersons={filteredPersons}
            colorBlacl={colorBlacl}
            colorWhite={colorWhite}
            colorGolden={colorGolden}
            colorRed={colorRed}
            colorPink={colorPink}
            colorBlue={colorBlue}
            colorGreen={colorGreen}
            colorGray={colorGray}
            colorSilver={colorSilver}
            colorYellow={colorYellow}
            colorViolet={colorViolet}
            colorCoral={colorCoral}
            colorBrown={colorBrown}
            materialTree={materialTree}
            materialPaper={materialPaper}
            materialCloth={materialCloth}
            materialPlastic={materialPlastic}
            Goal1={Goal1}
            Goal2={Goal2}
            Goal3={Goal3}
            Goal4={Goal4}
            Goal5={Goal5}
            Goal6={Goal6}
            Goal7={Goal7}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </div>
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
