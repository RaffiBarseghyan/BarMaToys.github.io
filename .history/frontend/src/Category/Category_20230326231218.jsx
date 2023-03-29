import Scroll from "../pages/header/search/Scroll";
import SearchList from "../pages/header/search/SearchList";
const filteredPersons = details().filter((person) => {
  return (
    person.name.toLowerCase().includes(searchField.toLowerCase()) ||
    person.description.toLowerCase().includes(searchField.toLowerCase())
  );
});
function searchList() {
  if (searchShow) {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }
}

function Category() {
  return <>{searchList}</>;
}

export default Category;
