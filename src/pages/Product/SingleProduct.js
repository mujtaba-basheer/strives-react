/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getSingleProduct,
  setCustomSize,
} from "../../redux/actions/productActions";
import {
  addItemToFav,
  addItemToCart,
  removeItemFromFav,
  addItemToBuyNow,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
  CART_ADD_RESET,
  CART_REMOVE_RESET,
} from "../../redux/constants/cartConstants";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader/Loader";

import breadcrumbsArrow from "../../assets/images/allproduct/breadcrumbs-arrow.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

import heartfillsvg from "./images/heart-fill-brown.svg";
import heart from "./images/heart.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Alert from "../../components/Alert/Alert";
import SizeChart from "../../components/layout/SizeChart";
import CustomSizeChart from "../../components/layout/CustomSizeChart";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <SingleProductArea />
      <Footer />
    </>
  );
};

function SingleProductArea() {
  const [productQuantity, setProductQuantity] = useState(1);
  const [productSize, setProductSize] = useState({
    size: "",
    error: "",
  });
  const [showSizeChart, setShowSizeChart] = useState("false");
  const [showCustomSizeChart, setShowCustomSizeChart] = useState(false);
  const [productCustomSizeInfo, setproductCustomSizeInfo] = useState([]);

  const [isFbSdkLoaded, setIsFbSdkLoaded] = useState(false);

  const [sizeArray, setSizeArray] = useState([]);

  let { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, product, error } = useSelector(
    (state) => state.productSingleGet
  );
  const { favItems } = useSelector((state) => state.fav);
  const { cartItems } = useSelector((state) => state.cart);

  const { error: cartAddError, success: cartAddSuccess } = useSelector(
    (state) => state.cartAdd
  );

  const { error: cartRemoveError, success: cartRemoveSuccess } = useSelector(
    (state) => state.cartRemove
  );

  const { error: favAddError, success: favAddSuccess } = useSelector(
    (state) => state.favAdd
  );
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  const images = [];

  useEffect(() => {
    dispatch(getSingleProduct(id));
    console.log(product);
    if (product.name) document.title = product.name;

    const AddFbSdkScript = async () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "1056993144823639",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v10.0",
        });
      };

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://connect.facebook.net/en_US/sdk.js`;
      script.async = true;
      script.defer = true;
      script.crossorigin = `anonymous`;
      script.onload = () => setIsFbSdkLoaded(true);

      document.body.appendChild(script);
    };

    if (!window.FB) AddFbSdkScript();
    else setIsFbSdkLoaded(true);
  }, []);

  const onCustomFormSubmit = (formData) => {
    dispatch(setCustomSize(formData));
    document.querySelector(".customsizechart__container").click();
  };

  function swapMainImage(event) {
    const src = event.target.src;
    const mainImage = document.getElementById("quickview-mainimage");
    mainImage.src = src;
  }

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
    /* console.log(e.target.innerText); */

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

    /* console.log(name); */

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

  function openCustomSizeChartModal() {
    setShowCustomSizeChart("true");
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
        addItemToCart(
          product,
          productQuantity,
          productSize.size.toUpperCase(),
          product.custom || {}
        )
      );

      setTimeout(() => dispatch({ type: CART_ADD_RESET }), 3000);
    }
  }

  function openSizeChart() {
    setShowSizeChart("true");
  }

  if (product.gallery)
    product.gallery.main.map((image) => images.push(image.src));

  return (
    <>
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

      {cartAddError && (
        <Alert
          type="danger"
          popup
          background="true"
          timer="5000"
          text={cartAddError}
        />
      )}
      {cartAddSuccess && (
        <Alert
          type="success"
          popup
          background="true"
          timer="5000"
          text={"Added to Cart"}
        />
      )}
      {cartRemoveError && (
        <Alert
          type="danger"
          popup
          background="true"
          timer="5000"
          text={cartRemoveError}
        />
      )}
      {cartRemoveSuccess && (
        <Alert
          type="secondary"
          popup
          background="true"
          timer="5000"
          text={"Removed from Cart"}
        />
      )}

      {showSizeChart === "true" && (
        <SizeChart setShowSizeChart={setShowSizeChart} />
      )}

      {showCustomSizeChart === "true" && (
        <CustomSizeChart
          setShowCustomSizeChart={setShowCustomSizeChart}
          productCustomSizeInfo={productCustomSizeInfo}
          onCustomFormSubmit={onCustomFormSubmit}
        />
      )}

      {product.name && (
        <section id="singleproduct" className="content singleproduct">
          <div className="singleproduct-breadcrumbs flex">
            {/* <p className="category">fashion</p>
            <img src={breadcrumbsArrow} alt="arrow" />
            <p className="classification">{product.name}</p> */}
          </div>

          <div className="singleproduct__content flex">
            <div className="productdetails__left">
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

                <p className="productdetailstext">
                  {product.short_description}
                </p>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {images.map((image) => (
                    <SwiperSlide>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        src={image}
                        alt={product.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="productimages">
                <div className="yellow-box"></div>
                {/* <div className="mobileproductimages"></div> */}
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
              <div className="productimages__share flex">
                <p>share : </p>
                <IconContext.Provider
                  value={{ color: "#3b5998", size: "20px" }}
                >
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      window.FB.ui(
                        {
                          method: "share",
                          href: window.location.href,
                        },
                        function (response) {
                          console.log(response);
                        }
                      );
                    }}
                  >
                    <FaFacebook />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "#25D366", size: "20px" }}
                >
                  <a
                    href={`https://api.whatsapp.com/send?text=%0D%0Ahttps%3A%2F%2F${window.location.host}%2Fproducts%2F${product["_id"]}`}
                    data-action="share/whatsapp/share"
                    target="_blank"
                    rel="noreferrer"
                    title={`${product.name}`}
                  >
                    <FaWhatsapp />
                  </a>
                </IconContext.Provider>
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

                <p className="productdetailstext">
                  {product.short_description}
                </p>

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
                        max=""
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
                    ₹<span className="strike">{product.mrp}</span> ₹{" "}
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
                  <button
                    className="checkout btn flex"
                    onClick={(e) => {
                      e.preventDefault();
                      clickBuyNow();
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="addtocart btn flex"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart();
                    }}
                    /* onClick={() => {
                      if (
                        favItems &&
                        favItems.find(
                          (favProduct) => favProduct._id === product._id
                        )
                      )
                        removeFromWishlist(product["_id"]);
                      else addToWishlist(product);
                    }} */
                  >
                    {/* {favItems &&
                    favItems.find(
                      (favProduct) => favProduct._id === product._id
                    )
                      ? "Remove from Wishlist"
                      : "add to Wishlist"} */}
                    add to cart
                  </button>
                </div>

                {/* <div className="usp">
                  <img src={usp} alt="usp" />
                </div> */}

                <div className="productdescription1">
                  <p className="heading">Product Details</p>

                  <ul className="productdescription__list">
                    {product.details.map((detail) => (
                      <li className="productdescription__list--item">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="singleproduct__description flex">
            <div className="productdescription1">
              <p className="heading">Product Details</p>

              <ul className="productdescription__list">
                {product.details.map((detail) => (
                  <li className="productdescription__list--item">{detail}</li>
                ))}

                <li className="productdescription__list--item">
                  Lightweight polo great for promotional work
                </li>

                <li className="productdescription__list--item">
                  Huge color selection
                </li>
              </ul>
            </div>
          </div> */}
          <span className="thirdline"></span>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
