import React from "react";

import closeicon from "../../../assets/images/navbar/close.png";

const Search = ({ setCurrentSidebarScreen }) => {
  return (
    <div className="flex sidebar__searchdiv">
      <img
        className="closeIcon"
        onClick={() => setCurrentSidebarScreen("home")}
        src={closeicon}
        alt="closeicon"
      />
      <input type="text" placeholder="Search Items" />
    </div>
  );
};

export default Search;
