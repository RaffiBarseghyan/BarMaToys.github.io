import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function CategoryList({ filteredPersons }) {
  const [file, setFile] = useState([]);
  const [priceMin, setpriceMin] = useState("");
  const [priceMax, setpriceMax] = useState("");

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} file={file} />
  ));

  const priceMinval = (evt) => {
    setpriceMin(evt.target.value);
  };

  const priceMaxval = (evt) => {
    setpriceMax(evt.target.value);
  };

  return (
    <div
      className={`d-flex align-items-start justify-content-around container ${style.CategoryListbg}`}
    >
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
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
              onChange={priceMaxval}
              name="priceMax"
              value={priceMax}
              placeholder="to"
              type="number"
              min={priceMin}
              onWheel={(e) => e.target.blur()}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Color</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Material</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Goal</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Age</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Rating</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div class="accordion" id="accordionPanelsStayOpenExample">

        

        
        

      
        
        
        
      
      <div className="col-sm-10 d-flex flex-wrap align-items-center justify-content-around ">
        {filtered}{" "}
      </div>
    </div>
  );
}

export default CategoryList;
