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
  const params = useParams();
  const prodId = params.id;
  function searchList() {
    return (
      <>
        {/* {count} */}
        <p> You searched for "{searchField}"</p>
        <CategoryList filteredPersons={filteredPersons} />
      </>
    );
  }

  return <> {searchList()}</>;
}

export default Category;
