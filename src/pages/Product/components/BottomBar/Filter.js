import React, { useState } from "react";

const Filter = () => {
  const [bottombarfilter, setBottombarfilter] = useState("designer");

  const categoryList = ["Designer", "Occasion", "Season", "Price", "Size"];

  function closebottomfilter() {
    document.getElementsByClassName("filterdiv ")[0].style.display = "none";
  }

  return (
    <div className="filterdiv flex">
      <div className="header">Filter list</div>
      <div className="filterdiv__container">
        <div className="filterdiv__left">
          <ul className="category__list">
            {categoryList.map((category) => (
              <li
                className="category__list--item"
                onClick={() => setBottombarfilter(category.toLowerCase())}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="filterdiv__right">
          {bottombarfilter === "designer" && (
            <ul className="designer__list designer">
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="designer__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
            </ul>
          )}

          {bottombarfilter === "occasion" && (
            <ul className="occasion__list occasion">
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
              <li className="occasion__list--item">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">occasion</label>
              </li>
            </ul>
          )}

          {bottombarfilter === "season" && (
            <ul className="season__list season">
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="season__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="cancelfilterdiv flex">
        <div className="cancelfilter" onClick={closebottomfilter}>
          Cancel
        </div>
        <div className="applyfilter">Apply Filter</div>
      </div>
    </div>
  );
};

export default Filter;
