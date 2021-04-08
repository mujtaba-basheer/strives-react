import React, { useState } from "react";
import Rating from "../util/Rating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import carticon from "../../assets/images/homepage/icons/cart.png";
import wishlisticon from "../../assets/images/homepage/icons/heart.png";
import QuickView from "../layout/QuickView";

import {
  addItemToFav,
  removeItemFromFav,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
} from "../../redux/constants/cartConstants";

import { bestSellers } from "./data";

import heartfillsvg from "./images/heartfill.svg";
import heart from "./images/heart.png";

const BestSeller = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState("false");

  const dispatch = useDispatch();


  const { favItems } = useSelector((state) => state.fav);
  const { error: favAddError, success: favAddSuccess } = useSelector(
    (state) => state.favAdd
  );
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  const [productdetails, setProductdetails] = useState({});

  const slide = (type) => {
    switch (type) {
      case "next":
        setCurrent((current + 1) % 8);
        break;
      case "prev":
        if (current === 0) setCurrent(7);
        else setCurrent((current - 1) % 8);
        break;
      default:
        break;
    }
  };

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

  return (
    <>
      {showModal === "true" && (
        <QuickView product={productdetails} setShowModal={setShowModal} />
      )}
      <section className="best-seller">
        <div className="best-seller__title section-title">
          Best Seller Products
        </div>
        <div className="best-seller__section best-seller__mobile">
          <div className="best-seller__nav">
            <span>
              <i
                onClick={(e) => {
                  e.preventDefault();
                  slide("prev");
                }}
                className="best-seller__nav--icon fas fa-angle-left"
              ></i>
            </span>
            <span>
              <i
                onClick={(e) => {
                  e.preventDefault();
                  slide("next");
                }}
                className="best-seller__nav--icon fas fa-angle-right"
              ></i>
            </span>
          </div>
          <div className="best-seller__image">
            <img
              className="best-seller__image--img"
              alt={bestSellers[current].name}
              src={bestSellers[current].gallery.main[0].src}
            />
          </div>
          <div className="best-seller__details">
            <div className="best-seller__details--rating">
              {/* <Rating
                value={bestSellers[current]["rating"]["value"]}
                total={bestSellers[current]["rating"]["total"]}
              /> */}
            </div>
            <div className="best-seller__details--text">
              <h4>{bestSellers[current].name}</h4>
              {bestSellers[current].mrp === bestSellers[current].sp ? (
                <p>₹{bestSellers[current].mrp} per unit</p>
              ) : (
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{bestSellers[current].mrp}
                  </span>{" "}
                  ₹{bestSellers[current].sp} per unit
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="best-seller__section best-seller__desktop">
          {bestSellers.map((product, index) => (
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
                <Link to={`/product/${product._id}`}>
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
                  <p className="product-item__details--price">₹ {product.sp}</p>
                  <p className="product-item__details--price--mrp">
                    ₹ {product.mrp}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSeller;
