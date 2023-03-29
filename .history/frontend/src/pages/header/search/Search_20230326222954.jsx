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

  const handleChange = (e) => {
    setSearchField(e.target.value);

    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      window.location.replace("https://Bar");
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
          onKeyDown={_handleKeyDown}
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
