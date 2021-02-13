import React from "react";

const Sort = () => {
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
            <input type="radio" id="male" name="sort" value="default" />
            <label for="male">Default</label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <input type="radio" id="male" name="sort" value="ltoh" />
            <label for="male">Price Low to High</label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <input type="radio" id="male" name="sort" value="popularity" />
            <label for="male">Popularity</label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <input type="radio" id="male" name="sort" value="new" />
            <label for="male">New Arrival</label>
          </div>
        </li>
        <li className="sort__list--item">
          <div className="form-group">
            <input type="radio" id="male" name="sort" value="discount" />
            <label for="male">Discount</label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
