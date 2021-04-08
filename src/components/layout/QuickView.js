import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Alert from "../Alert/Alert";
import SizeChart from "./SizeChart";

import {
  addItemToFav,
  addItemToCart,
  removeItemFromFav,
  addItemToBuyNow,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
} from "../../redux/constants/cartConstants";
import CustomSizeChart from "./CustomSizeChart";

import heartfillsvg from "./images/heart-fill-brown.svg";
import heart from "./images/heart.png";

const QuickView = ({ product, setShowModal }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [productSize, setProductSize] = useState({
    size: "",
    error: "",
  });
  const [showSizeChart, setShowSizeChart] = useState("false");
  const [showCustomSizeChart, setShowCustomSizeChart] = useState(false);
  const [productCustomSizeInfo, setproductCustomSizeInfo] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const { favItems } = useSelector((state) => state.fav);

  const { error: favAddError, success: favAddSuccess } = useSelector(
    (state) => state.favAdd
  );
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  function hideQuickView() {
    setShowModal("false");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function swapMainImage(event) {
    const src = event.target.src;
    const mainImage = document.getElementById("quickview-mainimage");
    mainImage.src = src;
  }

  function escFunction(e) {
    if (e.keyCode === 27) hideQuickView();
  }

  function handleClickOutside(e) {
    console.log(e.target.className);

    if (e.target.className === "quickviewmodal") {
      hideQuickView();
    }
  }

  const images = [];
  if (product) {
    product.gallery.main.map((image) => images.push(image.src));
    console.log(images);
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("click", handleClickOutside, true);
    if (document.getElementById("quickviewmodal").display === "flex") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function changeQuantity(type) {
    let count = productQuantity;

    if (type === "increase") {
      count++;
      setProductQuantity(count);
    } else if (type === "decrease") {
      count--;
      if (count < 1) count = 1;
      setProductQuantity(count);
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

  function selectProductSize(e) {
    e.preventDefault();
    console.log(e.target.innerText);

    const name = e.target.innerText.toLowerCase();

    const selectSizeCircles = document.getElementsByClassName(
      "selectsize-circle"
    );

    for (let item of selectSizeCircles) {
      /* console.log(item); */
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    }

    if (name === "custom") {
      openCustomSizeChartModal();
    }

    setProductSize({
      ...productSize,
      size: name,
      error: "",
    });

    document.getElementById(name).classList.add("active");
  }

  function clickBuyNow() {
    if (productSize.size === "") {
      setProductSize({
        ...productSize,
        error: "Please select a size",
      });
    } else if (productSize.size === "custom" && !product.custom) {
      setProductSize({
        ...productSize,
        error: "Please fill custom size form.",
      });
    } else {
      console.log(productSize, productQuantity);
      dispatch(
        addItemToBuyNow(
          product,
          productQuantity,
          productSize.size.toUpperCase(),
          product.custom || {}
        )
      );

      history.push("/express-checkout");
    }
  }

  function addToCart() {
    if (productSize.size === "") {
      setProductSize({
        ...productSize,
        error: "Please Select a size",
      });
    } else {
      console.log(productSize);
      dispatch(addItemToCart(product, productQuantity, productSize.size));
    }
  }

  function openSizeChart() {
    setShowSizeChart("true");
  }

  function openCustomSizeChartModal() {
    setShowCustomSizeChart("true");
  }

  return (
    <div id="quickviewmodal" className="quickviewmodal">
      {console.log(product)}
      {showSizeChart === "true" && (
        <SizeChart setShowSizeChart={setShowSizeChart} />
      )}

      {showCustomSizeChart === "true" && (
        <CustomSizeChart
          setShowCustomSizeChart={setShowCustomSizeChart}
          productCustomSizeInfo={productCustomSizeInfo}
        />
      )}

      {product && (
        <div className="quickviewmodal__content flex">
          <span onClick={hideQuickView} className="quickviewmodal__close">
            &times;
          </span>

          {favAddError && (
            <Alert
              type="danger"
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
              type="danger"
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

          <div className="mobileproductimages">
            <p className="mainheading flex">
              {product.name}
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
            </p>
            <span className="line"></span>
            <p className="productdetailstext">{product.short_description}</p>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={images.length}
            >
              <Slider>
                {images.map((image) => (
                  <Slide index={0}>
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      alt={product.name}
                    />
                  </Slide>
                ))}
              </Slider>
              <DotGroup />
            </CarouselProvider>
          </div>

          <div className="productimages">
            <div className="yellow-box"></div>

            <div className="productimages__thumbs flex">
              {images.map((image) => (
                <div>
                  <img
                    onClick={(e) => {
                      swapMainImage(e);
                    }}
                    src={image}
                    alt={product.name}
                    width="100%"
                    height="100%"
                  />
                </div>
              ))}
            </div>
            <div className="productimages__main">
              <img
                id="quickview-mainimage"
                src={images[0]}
                alt={product.name}
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="productdetails">
            <div className="productdetails__container">
              <p className="mainheading flex">
                {product.name}
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
              </p>

              <span className="line"></span>

              <p className="productdetailstext">{product.short_description}</p>

              <div className="size">
                <div className="size__header flex">
                  <p className="select">Select Size</p>
                  <p onClick={openSizeChart} className="view">
                    View Size Chart
                  </p>
                </div>
                <div className="selectsize flex">
                  {product.available_sizes.map((size) =>
                    size.toLowerCase() !== "c" ? (
                      <div
                        key={size}
                        onClick={selectProductSize}
                        id={size.toLowerCase()}
                        className="selectsize-circle"
                      >
                        <p>{size}</p>
                      </div>
                    ) : (
                      size.toLowerCase() === "c" && (
                        <div
                          onClick={(e) => {
                            console.log(product.set);
                            setproductCustomSizeInfo(product.set);

                            selectProductSize(e);
                          }}
                          id="custom"
                          className="selectsize-circle custom"
                        >
                          <p>CUSTOM</p>
                        </div>
                      )
                    )
                  )}
                </div>

                {productSize.error && (
                  <Alert
                    text={productSize.error}
                    type="danger"
                    background="true"
                  />
                )}
              </div>

              <div className="selectquantity">
                <p className="heading">Select Quantity</p>

                <div className="inputs flex">
                  <div className="input-group">
                    <input
                      type="button"
                      value="-"
                      onClick={() => changeQuantity("decrease")}
                      className="button minus"
                    />
                    <input
                      type="number"
                      step="1"
                      value={productQuantity}
                      name="quantity"
                      className="quantity-field"
                    />
                    <input
                      type="button"
                      value="+"
                      onClick={() => changeQuantity("increase")}
                      className="button plus"
                    />
                  </div>

                  <div className="savingsinfo flex">
                    <p>You are saving ₹{product.discount}</p>
                  </div>
                </div>
              </div>

              <span className="secondline"></span>

              <div className="subtotal flex">
                <p className="subtotal__heading">Subtotal</p>
                <p className="subtotal__price">
                  ₹ <span className="strike"> {product.mrp} </span> ₹{" "}
                  {product.sp}
                </p>
              </div>

              <div className="subtotaldescription">
                <ul className="subtotaldescription__list">
                  {product.free_shipping && (
                    <li className="subtotaldescription__list--item">
                      Free Delivery
                    </li>
                  )}
                  <li className="subtotaldescription__list--item">
                    Inclusive of GST
                  </li>
                </ul>
              </div>

              <div className="cta">
                <button className="checkout btn flex" onClick={clickBuyNow}>
                  Buy Now
                </button>
                <button
                  className="addtocart btn flex"
                  onClick={addToCart}
                  /* onClick={() => {
                    if (
                      favItems &&
                      favItems.find(
                        (favProduct) => favProduct._id === product._id
                      )
                    )
                      removeFromWishlist(product["_id"]);
                    else addToWishlist(product);
                  }}
                  className="addtocart btn flex" */
                >
                  {/* {favItems &&
                  favItems.find((favProduct) => favProduct._id === product._id)
                    ? "Remove from Wishlist"
                    : "add to Wishlist"} */}
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickView;
