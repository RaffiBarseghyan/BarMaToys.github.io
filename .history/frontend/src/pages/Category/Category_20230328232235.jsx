import { useState } from "react";
import { useParams } from "react-router-dom";
import initialDetails from "../header/search/data/initialDatails";
import CategoryList from "./CategoryList";
import style from "./category.module.scss";
import Accordion from "react-bootstrap/Accordion";

function Category() {
  const params = useParams();
  const prodId = params.search;
  const [searchField, setSearchField] = useState(prodId);
  const [priceMin, setpriceMin] = useState("");
  const [priceMax, setpriceMax] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
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
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
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
                Price
              </Accordion.Header>
              <Accordion.Body>
                <div className={`${style.price} d-flex`}>
                  <input
                    onChange={priceMinval}
                    name="priceMin"
                    value={priceMin}
                    placeholder="from"
                    type="number"
                    min={1}
                    onWheel={(e) => e.target.blur()}
                  />
                  <input
                    className="ms-2"
                    onChange={priceMaxval}
                    name="priceMax"
                    value={priceMax}
                    placeholder="to"
                    type="number"
                    min={priceMin}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={style.accordionHeader}>
                Color
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
                    <span> black</span>
                  </label>
                  <label htmlFor="1">
                    <input
                      type="checkbox"
                      name=""
                      id="1"
                      value={"#ffffff"}
                      onChange={colorWhiteVal}
                    />
                    <span> white</span>
                  </label>
                  <label htmlFor="2">
                    <input
                      type="checkbox"
                      name=""
                      id="2"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> golden</span>
                  </label>
                  <label htmlFor="3">
                    <input
                      type="checkbox"
                      name=""
                      id="3"
                      value={"#ffffff"}
                      onChange={colorRedVal}
                    />
                    <span> red</span>
                  </label>
                  <label htmlFor="4">
                    <input
                      type="checkbox"
                      name=""
                      id="4"
                      value={"#ffffff"}
                      onChange={colorPinkVal}
                    />
                    <span> pink</span>
                  </label>
                  <label htmlFor="5">
                    <input
                      type="checkbox"
                      name=""
                      id="5"
                      value={"#ffffff"}
                      onChange={colorBlueVal}
                    />
                    <span> blue</span>
                  </label>
                  <label htmlFor="6">
                    <input
                      type="checkbox"
                      name=""
                      id="6"
                      value={"#ffffff"}
                      onChange={colorGreenVal}
                    />
                    <span> green</span>
                  </label>
                  <label htmlFor="7">
                    <input
                      type="checkbox"
                      name=""
                      id="7"
                      value={"#ffffff"}
                      onChange={colorGrayVal}
                    />
                    <span> gray</span>
                  </label>
                  <label htmlFor="8">
                    <input
                      type="checkbox"
                      name=""
                      id="8"
                      value={"#ffffff"}
                      onChange={colorSilverVal}
                    />
                    <span> silver</span>
                  </label>
                  <label htmlFor="9">
                    <input
                      type="checkbox"
                      name=""
                      id="9"
                      value={"#ffffff"}
                      onChange={colorYellowVal}
                    />
                    <span> yellow</span>
                  </label>
                  <label htmlFor="10">
                    <input
                      type="checkbox"
                      name=""
                      id="10"
                      value={"#ffffff"}
                      onChange={colorVioletVal}
                    />
                    <span> violet</span>
                  </label>
                  <label htmlFor="11">
                    <input
                      type="checkbox"
                      name=""
                      id="11"
                      value={"#ffffff"}
                      onChange={colorCoralVal}
                    />
                    <span> coral</span>
                  </label>
                  <label htmlFor="12">
                    <input
                      type="checkbox"
                      name=""
                      id="12"
                      value={"#ffffff"}
                      onChange={colorBrownVal}
                    />
                    <span> brown</span>
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className={style.accordionHeader}>
                Material
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className={style.accordionHeader}>
                Goal
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className={style.accordionHeader}>
                Age
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className={style.accordionHeader}>
                Rating
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
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
            colorCoral={colorCoral}
          />
          , ,  , , , ,
          ,    , colorBrown,
        </div>
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
