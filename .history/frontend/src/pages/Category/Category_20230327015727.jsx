import { useState } from "react";
import { useParams } from "react-router-dom";
import initialDetails from "../header/search/data/initialDatails";
import CategoryList from "./CategoryList";
import style from "./category.module.scss";

function Category() {
  const params = useParams();
  const prodId = params.search;
  const [searchField, setSearchField] = useState(prodId);
  const [searchShow, setSearchShow] = useState(false);
  let count = 0;
  const filteredPersons = initialDetails().filter((person) => {
    count++;
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
        {count == 0 ? (
          <p>Items not found</p>
        ) : (
          
        )}
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
