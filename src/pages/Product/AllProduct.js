/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ProductSlider from "../../components/ProductSlider";

import breadcrumbsArrow from "../../assets/images/allproduct/breadcrumbs-arrow.png";
import productimage from "./images/image.png";
import previous from "./images/previous.png";
import next from "./images/next.png";

const AllProduct = () => {
  return (
    <>
      <Navbar />
      <AllProductArea />
      <Footer />
    </>
  );
};

function AllProductArea() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const queryString = query.get("search");

  console.log(queryString);

  const dispatch = useDispatch();

  const [productslidervalue, setProductslidervalue] = useState([]);
  const { loading, products, error } = useSelector((state) => state.productGet);

  function clickfilter(e) {
    console.log(e.target.value);
  }

  function handleChange(event) {
    console.log(event);
  }

  useEffect(() => {
    console.log(productslidervalue);
    dispatch(
      getProducts({
        keyword: queryString,
        min: productslidervalue[0],
        max: productslidervalue[1],
      })
    );
  }, [productslidervalue, queryString]);

  return (
    <section className="content">
      <div className="allproducts-breadcrumbs flex">
        <p className="category">fashion</p>
        <img src={breadcrumbsArrow} alt="arrow" />
        <p className="classification">t-shirt</p>
      </div>

      <div className="allproducts-content flex">
        <div className="allproducts__filtersidebar">
          <a href="#" className="clear-all">
            clear all
          </a>

          <div className="filters">
            <div className="material">
              <p className="material__heading">Material</p>
              <ul className="material__list">
                <li className="material__list--item">
                  <input
                    type="checkbox"
                    name="material1"
                    id="material1"
                    value="polyster"
                    onClick={clickfilter}
                  />
                  <label for="material1">Polyster</label> <br />
                </li>
                <li className="material__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster1"
                    onChange={handleChange}
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
                <li className="material__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
              </ul>
              <a href="#" className="see-more">
                See More
              </a>
            </div>

            <div className="size">
              <p className="size__heading">Size</p>
              <ul className="size__list">
                <li className="size__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
                <li className="size__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
                <li className="size__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
              </ul>
              <a href="#" className="see-more">
                See More
              </a>
            </div>

            <div className="designer">
              <p className="designer__heading">Designer</p>
              <ul className="designer__list">
                <li className="designer__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
                <li className="designer__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
                <li className="designer__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Polyster</label> <br />
                </li>
              </ul>
              <a href="#" className="see-more">
                See More
              </a>
            </div>

            <div className="price">
              <p className="price__heading">Price</p>

              <ProductSlider setProductslidervalue={setProductslidervalue} />
            </div>

            <div className="colour">
              <p className="colour__heading">colour</p>
              <ul className="colour__list">
                <li className="colour__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Red</label> <br />
                </li>
                <li className="colour__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Blue</label> <br />
                </li>
                <li className="colour__list--item">
                  <input
                    type="checkbox"
                    name="material2"
                    id="material2"
                    value="polyster"
                  />
                  <label for="material2">Green</label> <br />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="allproducts__products">
          <div className="header flex">
            <p className="header__heading">Anarkalis</p>
            <div className="header__right">
              <p className="header__right--display-results">
                Displaying 6 out of 20 results
              </p>
              <div className="header__right--dropdown">
                <select id="sortby" name="sortby">
                  <option value="latest">Sort By: Latest</option>
                  <option value="latest">Sort By: Latest</option>
                  <option value="latest">Sort By: Latest</option>
                  <option value="latest">Sort By: Latest</option>
                  <option value="latest">Sort By: Latest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="product-container">
            {products &&
              products.map((product) => (
                <div className="product-item">
                  <div className="product-item__image">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      src={product.gallery.main[0].src}
                      alt={product.name}
                    />
                    <div className="quick-view flex">
                      <p className="quick-view__text">Quick View</p>
                    </div>
                  </div>
                  <div className="product-item__details">
                    <a className="product-item__details--heading">
                      {product.name}
                    </a>
                    <span className="flex">
                      <p className="product-item__details--price">
                        ₹ {product.sp}
                      </p>
                      <p className="product-item__details--price--mrp">
                        ₹ {product.mrp}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="navigation flex">
            <a className="navigation__button previous">
              <img
                style={{
                  height: "10px",
                  width: "6px",
                  marginRight: "8px",
                }}
                src={previous}
                alt="previous"
              />{" "}
              previous
            </a>
            <a className="navigation__button next">
              next{" "}
              <img
                style={{
                  height: "10px",
                  width: "6px",
                  marginLeft: "8px",
                }}
                src={next}
                alt="next"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="allproducts__divider"></div>
      <div className="allproducts__popularproducts">
        <p className="heading">Propular Products</p>
        <div className="product-container">
          <div className="product-item">
            <div className="product-item__image">
              <img src={productimage} alt="image" />
              <div className="quick-view flex">
                <p className="quick-view__text">Quick View</p>
              </div>
            </div>
            <div className="product-item__details">
              <p className="product-item__details--heading">Colar T-shirt</p>
              <p className="product-item__details--price">$190</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item__image">
              <img src={productimage} alt="image" />
              <div className="quick-view flex">
                <p className="quick-view__text">Quick View</p>
              </div>
            </div>
            <div className="product-item__details">
              <p className="product-item__details--heading">Colar T-shirt</p>
              <p className="product-item__details--price">$190</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item__image">
              <img src={productimage} alt="image" />
            </div>
            <div className="product-item__details">
              <p className="product-item__details--heading">Colar T-shirt</p>
              <p className="product-item__details--price">$190</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item__image">
              <img src={productimage} alt="image" />
            </div>
            <div className="product-item__details">
              <p className="product-item__details--heading">Colar T-shirt</p>
              <p className="product-item__details--price">$190</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProduct;
