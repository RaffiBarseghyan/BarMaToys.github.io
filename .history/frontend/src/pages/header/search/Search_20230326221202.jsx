import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import style from "./search.module.scss";
import { t } from "i18next";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details().filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // const handleChange = (e) => {
  //   setSearchField(e.target.value);

  //   if (e.target.value === "") {
  //     setSearchShow(false);
  //   } else {
  //     setSearchShow(true);
  //   }
  // };


  const enter = (e) => {
    e.preventDefault();
    let name = this.state.itemName;
    this.setState ({
        storedItemName:this.state.itemName
    }, function() {
        alert(this.state.storedItemName); // Shows the right value!
    }
  };
  

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className={`garamond ${style.searchHid}`}>
      <div>
        <input
          className={style.search}
          type="search"
          placeholder={t("Search")}
          // onChange={handleChange}
          onDragEnter={enter}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
