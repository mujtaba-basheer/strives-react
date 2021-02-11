import React from "react";

const Sort = () => {
  return (
    <div
      className="sortdiv"
      style={{
        display: "none",
      }}
    >
      <ul className="sort__list">
        <li className="sort__list--item">Default</li>
        <li className="sort__list--item">Price Low to High</li>
        <li className="sort__list--item">Popularity</li>
        <li className="sort__list--item">New Arrival</li>
        <li className="sort__list--item">Discount</li>
      </ul>
    </div>
  );
};

export default Sort;
