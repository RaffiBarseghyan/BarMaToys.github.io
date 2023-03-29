import Scroll from "../pages/header/search/Scroll";
import SearchList from "../pages/header/search/SearchList";
import initialDetails from "./search/data/initialDatails";

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

function Category() {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  return <>{searchList}</>;
}

export default Category;
