import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import closeicon from "../../../assets/images/navbar/close.png";

const Search = ({ setCurrentSidebarScreen, closeSideMenu }) => {
  const [searchText, setSearchText] = useState("");

  const history = useHistory();
  function searchProducts(e) {
    e.preventDefault();
    history.push({
      pathname: "/products",
      search: `?search=${searchText}`,
    });

    closeSideMenu();

    setSearchText("");
  }

  return (
    <div className="flex sidebar__searchdiv">
      <img
        onClick={() => setCurrentSidebarScreen("home")}
        className="closeIcon"
        src={closeicon}
        alt="closeicon"
      />
      <form>
        <input
          type="text"
          placeholder="Search Items"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="searchIcon">
          <button onClick={searchProducts}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
