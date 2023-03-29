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

  const priceMinval = (evt) => {
    setpriceMin(evt.target.value);
  };

  const priceMaxval = (evt) => {
    setpriceMax(evt.target.value);
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
        {/* {count} */}
        <p className={style.boxH2}> You searched for "{prodId}"</p>
        <div
          className={`d-flex align-items-start justify-content-around container ${style.CategoryListbg}`}
        >
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            style={{ minWidth: "350px", marginTop: "50px" }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className={style.accordionHea}>Price</Accordion.Header>
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
              <Accordion.Header className={style.accordionHea}>Color</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column">
                  <label htmlFor="colorid1">
                    <input type="checkbox" name="" id="colorid1" />
                    black
                  </label>
                  <label htmlFor="colorid2">
                    <input type="checkbox" name="" id="colorid2" />
                    white
                  </label>
                  <label htmlFor="colorid3">
                    <input type="checkbox" name="" id="colorid3" />
                    golden
                  </label>
                  <label htmlFor="colorid4">
                    <input type="checkbox" name="" id="colorid4" />
                    red
                  </label>
                  <label htmlFor="colorid5">
                    <input type="checkbox" name="" id="colorid5" />
                    pink
                  </label>
                  <label htmlFor="colorid6">
                    <input type="checkbox" name="" id="colorid6" />
                    blue
                  </label>
                  <label htmlFor="colorid7">
                    <input type="checkbox" name="" id="colorid7" />
                    green
                  </label>
                  <label htmlFor="colorid8">
                    <input type="checkbox" name="" id="colorid8" />
                    gray
                  </label>
                  <label htmlFor="colorid9">
                    <input type="checkbox" name="" id="colorid9" />
                    silver
                  </label>
                  <label htmlFor="colorid10">
                    <input type="checkbox" name="" id="colorid10" />
                    yellow
                  </label>
                  <label htmlFor="colorid11">
                    <input type="checkbox" name="" id="colorid11" />
                    violet
                  </label>
                  <label htmlFor="colorid12">
                    <input type="checkbox" name="" id="colorid12" />
                    coral
                  </label>
                  <label htmlFor="colorid13">
                    <input type="checkbox" name="" id="colorid13" />
                    brown
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className={style.accordionHea}>Material</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className={style.accordionHea}>Goal</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className={style.accordionHea}>Age</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className={style.accordionHea}>Rating</Accordion.Header>
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
