import { useState } from "react";
import Scroll from "../pages/header/search/Scroll";
import SearchList from "../pages/header/search/SearchList";

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
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return <>{searchList}</>;
}

export default Category;
