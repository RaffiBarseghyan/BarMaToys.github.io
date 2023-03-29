import { useState } from "react";
import initialDetails from "../header/search/data/initialDatails";
import CategoryList from "./CategoryList";

function Category() {
  const [searchField, setSearchField] = useState("");
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
        {count}
        <CategoryList filteredPersons={filteredPersons} />
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
