import Scroll from "../pages/header/search/Scroll";
import SearchList from "../pages/header/search/SearchList";
import initialDetails from "./search/data/initialDatails";



function Category() {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);


  return <>{searchList}</>;
}

export default Category;
