import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";

const BottomBar = () => {
  return (
    <div className="allproducts__bottombar">
      <div className="sort flex">Sort</div>

      <Sort />
      <div className="filter flex">Filter</div>

      <Filter />
    </div>
  );
};

export default BottomBar;
