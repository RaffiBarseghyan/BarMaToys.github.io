import SearchList from "../pages/header/search/SearchList";

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
  return <></>;
}

export default Category;
