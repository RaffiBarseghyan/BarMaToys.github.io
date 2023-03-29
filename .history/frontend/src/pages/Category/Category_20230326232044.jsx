import { useState } from "react";
import SearchList from "../header/search/SearchList";
import initialDetails from "../header/search/data/initialDatails";

function Category() {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = initialDetails().filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  function searchList() {
    return (
      
        <SearchList filteredPersons={filteredPersons} />
      
    );
  }

  return <> {searchList()}</>;
}

export default Category;
