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
              <Accordion.Header>Price</Accordion.Header>
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
              <Accordion.Header>Color</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex">
                  <label htmlFor="colorid1">
                    black
                    <input type="checkbox" name="" id="colorid1" />
                  </label>
                  <label htmlFor="colorid2">
                    white
                    <input type="checkbox" name="" id="colorid2" />
                  </label>
                  <label htmlFor="colorid3">
                    golden
                    <input type="checkbox" name="" id="colorid3" />
                  </label>
                  <label htmlFor="colorid4">
                    red
                    <input type="checkbox" name="" id="colorid4" />
                  </label>
                  <label htmlFor="colorid5">
                    pink
                    <input type="checkbox" name="" id="colorid5" />
                  </label>
                  <label htmlFor="colorid6">
                    blue
                    <input type="checkbox" name="" id="colorid6" />
                  </label>
                  <label htmlFor="colorid7">
                    green
                    <input type="checkbox" name="" id="colorid7" />
                  </label>
                  <label htmlFor="colorid8">
                    gray
                    <input type="checkbox" name="" id="colorid8" />
                  </label>
                  <label htmlFor="colorid9">
                    Silver
                    <input type="checkbox" name="" id="colorid9" />
                  </label>
                  <label htmlFor="colorid10">
                    yellow
                    <input type="checkbox" name="" id="colorid10" />
                  </label>
                  <label htmlFor="colorid11">
                    Violet
                    <input type="checkbox" name="" id="colorid11" />
                  </label>
                  <label htmlFor="colorid12">
                    Coral
                    <input type="checkbox" name="" id="colorid12" />
                  </label>
                  <label htmlFor="colorid13">
                  Brown
                    <input type="checkbox" name="" id="colorid13" />
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Material</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Goal</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Age</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Rating</Accordion.Header>
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
