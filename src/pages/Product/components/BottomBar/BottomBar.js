import React, { useEffect } from "react";
import Sort from "./Sort";
import Filter from "./Filter";

const BottomBar = () => {
  function handleClickOutside(e) {
    /* console.log(e.target.className); */

    if (e.target.className === "sort__background") {
      document.getElementsByClassName("sort__background")[0].style.display =
        "none";
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function showSort() {
    document.getElementsByClassName("sort__background")[0].style.display =
      "block";
  }

  function showFilter() {
    document.getElementsByClassName("filterdiv ")[0].style.display = "flex";
  }

  return (
    <div className="allproducts__bottombar">
      <div className="sort flex" onClick={showSort}>
        Sort
      </div>
      <Sort />
      <div className="filter flex" onClick={showFilter}>
        Filter
      </div>
      <Filter />
    </div>
  );
};

export default BottomBar;
