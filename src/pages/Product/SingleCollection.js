/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";
import {
  addItemToFav,
  removeItemFromFav,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
} from "../../redux/constants/cartConstants";

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

import { materials, sizes, colours } from "./data";

const SingleCollection = () => {
  return (
    <>
      <Navbar />
      <SingleCollectionArea />
      <Footer />
    </>
  );
};

function SingleCollectionArea() {
  /* const [sortbyValue, setSortbyValue] = useState("latest"); */
  const [sortValue, setSortValue] = useState(["date", "-1"]);

  const [productdetails, setProductdetails] = useState({});

  const [showModal, setShowModal] = useState("false");

  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState({
    material: [],
    colour: [],
    size: [],
  });

  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const queryString = query.get("search");

  let { id } = useParams();

  console.log(id);

  const dispatch = useDispatch();

  const [productslidervalue, setProductslidervalue] = useState([]);
  const { loading, products, error } = useSelector((state) => state.productGet);
  const { page: maxPages } = useSelector((state) => state.productPages);
  const { favItems } = useSelector((state) => state.fav);
  const { error: favAddError, success: favAddSuccess } = useSelector(
    (state) => state.favAdd
  );
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  function clickfilter(type, data) {
    /* console.log(e.target.value); */
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
      filterObj[type].pop(data);
      setFilter(filterObj);
    }
  }

  function clearAll() {
    setFilter({
      material: [],
      colour: [],
      size: [],
    });

    var elements = ["material", "size", "colour"];

    elements.forEach((element) => {
      var ele = document.getElementsByName(element);

      for (var i = 0; i < ele.length; i++) {
        if (ele[i].type === "checkbox") ele[i].checked = false;
      }
    });
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
    dispatch(addItemToFav(product));
    setTimeout(() => dispatch({ type: FAV_ADD_RESET }), 3000);
  }

  function removeFromWishlist(id) {
    dispatch(removeItemFromFav(id));
    setTimeout(() => dispatch({ type: FAV_REMOVE_RESET }), 3000);
  }

  function changeMainImageHover(productImages, type, index) {
    const images = [];
    productImages.map((image) => images.push(image.src));

    if (type === "enter") {
      document.getElementById("showcase-img" + index).src = images[1];
    } else if (type === "leave") {
      document.getElementById("showcase-img" + index).src = images[0];
    }
  }

  function changeNavigation(value) {
    let currentPageValue = parseInt(currentPage);
    if (value === "previous") {
      if (currentPage === 1) {
        setCurrentPage(1);
      } else {
        currentPageValue = currentPageValue - 1;
        setCurrentPage(currentPageValue);
      }
    } else if (value === "next") {
      if (currentPage === maxPages) {
        setCurrentPage(maxPages);
      } else {
        currentPageValue = currentPageValue + 1;
        setCurrentPage(currentPageValue);
      }
    }
  }

  useEffect(() => {
    const queryObj = {
      collection: id,
      min: productslidervalue[0],
      max: productslidervalue[1],
      sort: sortValue,
      material: filter["material"],
      color: filter["color"],
      size: filter["size"],
      page: currentPage,
    };
    dispatch(getProducts(queryObj));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productslidervalue, id, sortValue, currentPage, filter, dispatch]);

  return (
    <section className="content">
      {favAddError && (
        <Alert
          type="warning"
          popup
          background="true"
          timer="5000"
          text={favAddError}
        />
      )}
      {favAddSuccess && (
        <Alert
          type="success"
          popup
          background="true"
          timer="5000"
          text={"Added to wishlist"}
        />
      )}
      {favRemoveError && (
        <Alert
          type="warning"
          popup
          background="true"
          timer="5000"
          text={favRemoveError}
        />
      )}
      {favRemoveSuccess && (
        <Alert
          type="secondary"
          popup
          background="true"
          timer="5000"
          text={"Removed from wishlist"}
        />
      )}

      <div className="allproducts-breadcrumbs flex">
        {/* <p className="category">fashion</p>
        <img src={breadcrumbsArrow} alt="arrow" />
        <p className="classification">t-shirt</p> */}
      </div>
      <div className="allproducts-content flex">
        <div className="allproducts__filtersidebar">
          <p
            className="clear-all"
            onClick={() => {
              clearAll();
            }}
          >
            clear all
          </p>

          <div className="filters">
            <div className="material">
              <p className="material__heading">Material</p>
              <ul className="material__list">
                {materials.map((material) => (
                  <li className="material__list--item" key={material}>
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
              {/* <a href="#" className="see-more">
                See More
              </a> */}
            </div>

            <div className="size">
              <p className="size__heading">Size</p>
              <ul className="size__list">
                {sizes.map((size) => (
                  <li className="size__list--item" key={size}>
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
              {/* <a href="#" className="see-more">
                See More
              </a> */}
            </div>

            {/* <div className="designer">
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
            </div> */}

            <div className="colour">
              <p className="colour__heading">Colour</p>
              <ul className="colour__list">
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
            </div>

            <div className="price">
              <p className="price__heading">Price</p>
              <ProductSlider setProductslidervalue={setProductslidervalue} />
            </div>
          </div>
        </div>

        <div className="allproducts__products">
          <div className="header flex">
            <p className="header__heading">Collection</p>
            <div className="header__right">
              <p className="header__right--display-results">
                {`Displaying  ${currentPage} out of ${maxPages} pages`}
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
                <div className="product-item" key={product._id}>
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
              <button
                className={
                  currentPage < 2
                    ? "navigation__button previous disabled"
                    : "navigation__button previous"
                }
                onClick={() => {
                  changeNavigation("previous");
                }}
              >
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
              </button>
              <button
                className={
                  currentPage === maxPages
                    ? "navigation__button next disabled"
                    : "navigation__button next"
                }
                disabled={currentPage === maxPages}
                onClick={() => {
                  changeNavigation("next");
                }}
              >
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
              </button>
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
              <img src={productimage} alt="product-item" />
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
              <img src={productimage} alt="product-item" />
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
              <img src={productimage} alt="product-item" />
            </div>
            <div className="product-item__details">
              <p className="product-item__details--heading">Colar T-shirt</p>
              <p className="product-item__details--price">$190</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item__image">
              <img src={productimage} alt="product-item" />
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

export default SingleCollection;
