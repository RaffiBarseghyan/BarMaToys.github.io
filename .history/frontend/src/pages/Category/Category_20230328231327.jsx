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
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");
  const [colorBlacl, setcolorBlacl] = useState("");

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
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
    }
  };
  const colorBlackval = (evt) => {
    if (evt.target.checked) {
      setcolorBlack(evt.target.value);
    } else {
      setcolorBlack("");
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
                      onChange={colorGoldenVal}
                    />
                    <span> red</span>
                  </label>
                  <label htmlFor="4">
                    <input
                      type="checkbox"
                      name=""
                      id="4"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> pink</span>
                  </label>
                  <label htmlFor="5">
                    <input
                      type="checkbox"
                      name=""
                      id="5"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> blue</span>
                  </label>
                  <label htmlFor="6">
                    <input
                      type="checkbox"
                      name=""
                      id="6"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> green</span>
                  </label>
                  <label htmlFor="colorid8">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid8"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> gray</span>
                  </label>
                  <label htmlFor="colorid9">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid9"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> silver</span>
                  </label>
                  <label htmlFor="colorid10">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid10"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> yellow</span>
                  </label>
                  <label htmlFor="colorid11">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid11"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> violet</span>
                  </label>
                  <label htmlFor="colorid12">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid12"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
                    />
                    <span> coral</span>
                  </label>
                  <label htmlFor="colorid13">
                    <input
                      type="checkbox"
                      name=""
                      id="colorid13"
                      value={"#ffffff"}
                      onChange={colorGoldenVal}
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
          <CategoryList filteredPersons={filteredPersons} />
        </div>
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
