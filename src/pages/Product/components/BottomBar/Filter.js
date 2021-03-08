import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../../../../redux/actions/productActions";

import ProductSlider from "../../../../components/ProductSlider";

const Filter = () => {
  const dispatch = useDispatch();

  const [bottombarfilter, setBottombarfilter] = useState("designer");

  const categoryList = ["Designer", "Occasion", "Season", "Price", "Size"];

  const [productslidervalue, setProductslidervalue] = useState([]);

  function closebottomfilter() {
    document.getElementsByClassName("filterdiv ")[0].style.display = "none";
  }

  useEffect(() => {
    console.log(productslidervalue);
    dispatch(
      getProducts({
        min: productslidervalue[0],
        max: productslidervalue[1],
      })
    );
  }, [productslidervalue]);

  return (
    <div
      className="filterdiv flex"
      style={{
        display: "none",
      }}
    >
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
            <ul className="sortsub__list designer">
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Designer</label>
              </li>
            </ul>
          )}

          {bottombarfilter === "occasion" && (
            <ul className="sortsub__list occasion">
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
              <li className="sortsub__list--item">
                <div className="input-group">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">occasion</label>
                </div>
              </li>
            </ul>
          )}

          {bottombarfilter === "season" && (
            <ul className="sortsub__list season">
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
              <li className="sortsub__list--item">
                <input type="checkbox" name="" id=" " />
                <label htmlFor="">Season</label>
              </li>
            </ul>
          )}

          {bottombarfilter === "price" && (
            <ul className="sortsub__list season">
              <li className="sortsub__list--item">
                <ProductSlider setProductslidervalue={setProductslidervalue} />
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
