import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../../../../redux/actions/productActions";

import ProductSlider from "../../../../components/ProductSlider";

import { materials, sizes, colours } from "../../data";

const Filter = () => {
  const dispatch = useDispatch();

  const [bottombarfilter, setBottombarfilter] = useState("material");

  const categoryList = ["Material", "Size", "Colour", "Price"];

  const [productslidervalue, setProductslidervalue] = useState([]);

  const [filter, setFilter] = useState({
    material: [],
    colour: [],
    size: [],
  });

  useEffect(() => {
    dispatch(
      getProducts({
        min: productslidervalue[0],
        max: productslidervalue[1],
        material: filter["material"],
        color: filter["color"],
        size: filter["size"],
      })
    );
  }, [productslidervalue, filter]);

  function closebottomfilter() {
    document.getElementsByClassName("filterdiv ")[0].style.display = "none";
  }

  /* function applyFilter() {
    document.getElementsByClassName("filterdiv ")[0].style.display = "none";
  } */

  function clickfilter(type, data) {
    let filterObj = {
      ...filter,
    };
    type = type.toLowerCase();
    data = data.toLowerCase();

    let present = "false";
    filterObj[type].forEach((element) => {
      if (element === data) {
        present = "true";
      }
    });

    if (present === "false") {
      filterObj[type].push(data);
      setFilter(filterObj);
    } else if (present === "true") {
      console.log("true");

      filterObj[type].pop(data);
      setFilter(filterObj);
    }
  }

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
          {bottombarfilter === "material" && (
            <ul className="sortsub__list designer">
              {materials.map((material) => (
                <li className="sortsub__list--item" key={material}>
                  <label for={material}>
                    <input
                      type="checkbox"
                      name="material"
                      id={material}
                      value={material}
                      onClick={() => {
                        clickfilter("material", material);
                      }}
                    />
                    {material}
                  </label>
                </li>
              ))}
            </ul>
          )}

          {bottombarfilter === "size" && (
            <ul className="sortsub__list occasion">
              {sizes.map((size) => (
                <li className="sortsub__list--item" key={size}>
                  <label for={size}>
                    <input
                      type="checkbox"
                      name="size"
                      id={size}
                      value={size}
                      onClick={() => {
                        clickfilter("size", size);
                      }}
                    />
                    {size}
                  </label>
                </li>
              ))}
            </ul>
          )}

          {bottombarfilter === "colour" && (
            <ul className="sortsub__list--item">
              {colours.map((colour) => (
                <li className="size__list--item" key={colour}>
                  <label for={colour}>
                    <input
                      type="checkbox"
                      name="colour"
                      id={colour}
                      value={colour}
                      onClick={() => {
                        clickfilter("colour", colour);
                      }}
                    />
                    {colour}
                  </label>
                </li>
              ))}
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
        <div className="applyfilter" onClick={closebottomfilter}>Apply Filter</div>
      </div>
    </div>
  );
};

export default Filter;
