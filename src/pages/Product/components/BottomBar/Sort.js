import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../../../../redux/actions/productActions";

const Sort = ({ handleClickOutside }) => {
  const dispatch = useDispatch();

  const [sortValue, setSortValue] = useState(["date", "-1"]);
  const [sortbyName, setSortbyName] = useState("latest");

  useEffect(() => {
    dispatch(
      getProducts({
        sort: sortValue,
      })
    );
  }, [sortValue]);

  function selectSortBy(e) {
    const value = e.target.value;

    console.log(value);

    document.getElementsByClassName("sort__background")[0].style.display =
      "none";

    if (value === "ltoh") {
      setSortValue(["sp", "1"]);
      setSortbyName("ltoh");
    } else if (value === "htol") {
      setSortValue(["sp", "-1"]);
      setSortbyName("htol");
    } else if (value === "new") {
      setSortValue(["date", "1"]);
      setSortbyName("new");
    } else if (value === "latest") {
      setSortValue(["date", "1"]);
      setSortbyName("latest");
    } else if (value === "discount") {
      setSortValue(["date", "1"]);
      setSortbyName("discount");
    }
  }

  return (
    <div
      className="sort__background"
      style={{
        display: "none",
      }}
    >
      <ul className="sort__list">
        <li className="sort__list--item">
          <div className="form-group">
            <label for="latest">
              <input
                className="sort__radio"
                onClick={selectSortBy}
                checked={sortbyName === "latest"}
                type="radio"
                id="latest"
                name="latest"
                value="latest"
              />
              Latest
            </label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <label for="ltoh">
              <input
                className="sort__radio"
                onClick={selectSortBy}
                checked={sortbyName === "ltoh"}
                type="radio"
                id="ltoh"
                name="ltoh"
                value="ltoh"
              />
              Price Low to High
            </label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <label for="htol">
              <input
                className="sort__radio"
                onClick={selectSortBy}
                checked={sortbyName === "htol"}
                type="radio"
                id="htol"
                name="sort"
                value="htol"
              />
              Price High to Low
            </label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <label for="new">
              <input
                className="sort__radio"
                onClick={selectSortBy}
                checked={sortbyName === "new"}
                type="radio"
                id="new"
                name="sort"
                value="new"
              />
              New Arrival
            </label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <input
              className="sort__radio"
              onClick={selectSortBy}
              checked={sortbyName === "discount"}
              type="radio"
              id="male"
              name="sort"
              value="discount"
            />
            <label for="male">Discount</label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
