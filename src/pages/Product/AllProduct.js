/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";
import {
  addItemToFav,
  removeItemFromFav,
} from "../../redux/actions/cartActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Alert from "../../components/Alert/Alert";

import ProductSlider from "../../components/ProductSlider";
import QuickView from "../../components/layout/QuickView";

import breadcrumbsArrow from "../../assets/images/allproduct/breadcrumbs-arrow.png";
import productimage from "./images/image.png";
import previous from "./images/previous.png";
import next from "./images/next.png";
import heart from "./images/heart.png";
/* import heartfill from "./images/heartfill.png"; */
import heartfillsvg from "./images/heart-fill.svg";

import Loader from "../../components/Loader/Loader";
import BottomBar from "./components/BottomBar/BottomBar";

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
  /* const [sortbyValue, setSortbyValue] = useState("latest"); */
  const [sortValue, setSortValue] = useState(["date", "-1"]);

  const [productdetails, setProductdetails] = useState({});

  const [showModal, setShowModal] = useState("false");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const queryString = query.get("search");

  const dispatch = useDispatch();

  const [productslidervalue, setProductslidervalue] = useState([]);
  const { loading, products, error } = useSelector((state) => state.productGet);
  const { favItems } = useSelector((state) => state.fav);
  const { error: favError, success: favSuccess } = useSelector(
    (state) => state.favAdd
  );

  function clickfilter(e) {
    console.log(e.target.value);
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  function selectSortBy(e) {
    const value = e.target.value;

    if (value === "ltoh") {
      setSortValue(["sp", "1"]);
    } else if (value === "htol") {
      setSortValue(["sp", "-1"]);
    } else if (value === "new") {
      setSortValue(["date", "1"]);
    }
  }

  function addToWishlist(product) {
    /* console.log(product); */
    dispatch(addItemToFav(product));

    // console.log("all product  ");

    // let isPresent = false;

    // console.log(favItems, product);

    // if (favItems.length > 0) {
    //   favItems.forEach((favProduct) => {
    //     if (favProduct._id === product._id) {
    //       isPresent = true;
    //     }
    //   });
    // }

    // if (isPresent) {
    //   console.log(product.name);
    //   alert("present");
    // } else {
    //   alert("sdfs");
    //   console.log("all product add ");
    //   dispatch(addItemToFav(product));
    // }
  }

  function removeFromWishlist(id) {
    dispatch(removeItemFromFav(id));
  }

  function changeMainImageHover(productImages, type, index) {
    const images = [];
    productImages.map((image) => images.push(image.src));
    // console.log(index);

    if (type === "enter") {
      document.getElementById("showcase-img" + index).src = images[1];
    } else if (type === "leave") {
      document.getElementById("showcase-img" + index).src = images[0];
    }
  }

  useEffect(() => {
    dispatch(
      getProducts({
        keyword: queryString,
        min: productslidervalue[0],
        max: productslidervalue[1],
        sort: sortValue,
      })
    );
  }, [productslidervalue, queryString, sortValue]);

  return (
    <section className="content">
      {favError && (
        <Alert
          type="warning"
          popup
          background="true"
          timer="5000"
          text={favError}
        />
      )}

      {favSuccess && (
        <Alert
          type="success"
          popup
          background="true"
          timer="5000"
          text={"Item Successfully added to wishlist"}
        />
      )}
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
                  <label for="polyster">
                    <input
                      type="checkbox"
                      name="polyster"
                      id="polyster"
                      value="polyster"
                      onClick={clickfilter}
                    />
                    Polyster
                  </label>
                </li>
                <li className="material__list--item">
                  <label for="polyster1">
                    <input
                      type="checkbox"
                      name="polyster1"
                      id="polyster1"
                      value="polyster1"
                      onClick={clickfilter}
                    />
                    Polyster
                  </label>
                </li>
                <li className="material__list--item">
                  <label for="polyster2">
                    <input
                      type="checkbox"
                      name="polyster2"
                      id="polyster2"
                      value="polyster2"
                      onClick={clickfilter}
                    />
                    Polyster
                  </label>
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
                  <label for="size1">
                    <input
                      type="checkbox"
                      name="size1"
                      id="size1"
                      value="size1"
                    />
                    size1
                  </label>
                </li>
                <li className="size__list--item">
                  <input
                    type="checkbox"
                    name="size1"
                    id="size1"
                    value="size1"
                  />
                  <label for="size1">size1</label> <br />
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
                Sort By:
                <select onChange={selectSortBy} id="sortby" name="sortby">
                  <option value="latest">Latest</option>
                  <option value="new">New Arrivals</option>
                  <option value="htol">Price High to Low</option>
                  <option value="ltoh">Price Low to High</option>
                  <option value="discount">Disount</option>
                </select>
              </div>
            </div>
          </div>

          {loading && <Loader height={100} />}

          {error && (
            <p
              style={{
                color: "red",
              }}
            >
              error
            </p>
          )}

          {!loading && products.length === 0 && (
            <h1
              style={{
                textAlign: "center",
              }}
            >
              No Products to display
            </h1>
          )}

          {showModal === "true" && (
            <QuickView product={productdetails} setShowModal={setShowModal} />
          )}

          <div className="product-container">
            {products &&
              products.map((product, index) => (
                <div className="product-item">
                  <p
                    className="heart"
                    onClick={() => {
                      if (
                        favItems &&
                        favItems.find(
                          (favProduct) => favProduct._id === product._id
                        )
                      )
                        removeFromWishlist(product["_id"]);
                      else addToWishlist(product);
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      src={
                        favItems &&
                        favItems.find(
                          (favProduct) => favProduct._id === product._id
                        )
                          ? heartfillsvg
                          : heart
                      }
                      alt="heart"
                    />
                  </p>
                  <div
                    className="product-item__image"
                    onMouseEnter={() =>
                      changeMainImageHover(product.gallery.main, "enter", index)
                    }
                    onMouseLeave={() =>
                      changeMainImageHover(product.gallery.main, "leave", index)
                    }
                  >
                    <Link to={`/products/${product._id}`}>
                      <img
                        id={`showcase-img` + index}
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={product.gallery.main[0].src}
                        alt={product.name}
                      />
                    </Link>
                    <div
                      className="quick-view flex"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("clicked");
                        setProductdetails(product);
                        setShowModal("true");

                        /* showQuickView(); */
                      }}
                    >
                      <p className="quick-view__text">Quick View</p>
                    </div>
                  </div>
                  <div className="product-item__details">
                    <Link
                      to={`/products/${product._id}`}
                      className="product-item__details--heading"
                    >
                      {product.name}
                    </Link>
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
          {products.length > 9 && (
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
          )}
        </div>
      </div>
      <div className="allproducts__divider"></div>
      <div
        className="allproducts__popularproducts"
        style={{
          display: "none",
        }}
      >
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
      <BottomBar />
    </section>
  );
}

export default AllProduct;
