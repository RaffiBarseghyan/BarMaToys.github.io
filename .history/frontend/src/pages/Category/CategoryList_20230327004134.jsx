import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";
import axios from "axios";

function CategoryList({ filteredPersons }) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} file={file} />
  ));
  return (
    <div
      className={`d-flex flex-wrap align-items-center justify-content-around container ${style.CategoryListbg}`}
    >
        <div class="section2_left_page">
                <h2>Categories</h2>
                <h3>All</h3>

                <label for="12">
                    <h3>Fiction & Literature</h3>
                </label>
                <input class="Fiction_Literature_Input" id="12" type="checkbox" />
                <ul class="Fiction_Literature_Ul">
                    <li>Children</li>
                    <li>Science</li>
                    <li>Fiction</li>
                    <li>Fantasy</li>
                    <li>Mystery</li>
                    <li>Romance</li>
                    <li>Horror</li>
                    <li>Poetry</li>
                </ul>
                <label for="13">
                    <h3>Non - Fiction</h3>
                </label>
                <input class="Fiction_Literature_Input1" id="13" type="checkbox" />
                <ul class="Fiction_Literature_Ul1">
                    <li>Comic</li>
                    <li>Cook</li>
                    <li>Psychology</li>
                    <li>Medical</li>
                    <li>Art</li>
                    <li>Photography</li>
                    <li>Law</li>
                    <li>History</li>
                    <li>Busin</li>
                </ul>
                <label for="14">
                    <h3>Other</h3>
                </label>
                <input class="Fiction_Literature_Input2" id="14" type="checkbox" />
                <ul class="Fiction_Literature_Ul2">
                    <li>Baby</li>
                    <li>Sex</li>
                    <li>Travel</li>
                    <li>Sports</li>
                </ul>
            </div>
      {filtered}
    </div>
  );
}

export default CategoryList;
