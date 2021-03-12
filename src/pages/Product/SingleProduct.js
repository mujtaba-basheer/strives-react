import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSingleProduct } from "../../redux/actions/productActions";
import { addItemToFav, addItemToCart } from "../../redux/actions/cartActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader/Loader";

import breadcrumbsArrow from "../../assets/images/allproduct/breadcrumbs-arrow.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import usp from "./images/usp.png";

/* import quick2 from "./images/quick2.png";
import quick3 from "./images/quick3.png";
import thumb from "./images/thumb.png";
import main from "./images/main.png"; */

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Alert from "../../components/Alert/Alert";

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

  let { id } = useParams();

  const dispatch = useDispatch();

  const { loading, product, error } = useSelector(
    (state) => state.productSingleGet
  );
  const { favItems } = useSelector((state) => state.fav);

  const images = [];

  useEffect(() => {
    dispatch(getSingleProduct(id));
    if (product.name) document.title = product.name;
  }, []);

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

  function addProductToWishlist(product) {
    /* console.log(product); */

    let isPresent = "false";

    favItems.forEach((favProduct) => {
      if (favProduct._id === product._id) {
        isPresent = "true";
      }
    });

    if (isPresent) {
      console.log(product.name);
    } else {
      dispatch(addItemToFav(product));
    }
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

    console.log(name);

    setProductSize({
      ...productSize,
      size: name,
      error: "",
    });

    document.getElementById(name).classList.add("active");
  }

  function addToCart() {
    console.log("clicked");
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

      {product.name && (
        <section id="singleproduct" className="content singleproduct">
          <div className="singleproduct-breadcrumbs flex">
            <p className="category">fashion</p>
            <img src={breadcrumbsArrow} alt="arrow" />
            <p className="classification">{product.name}</p>
          </div>

          <div className="singleproduct__content flex">
            <div className="productdetails__left">
              <div className="mobileproductimages">
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
                <div className="productimages__thumbs">
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
                <p>share: </p>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>

            <div className="productdetails">
              <div className="productdetails__container">
                <p className="mainheading">{product.name}</p>

                <span className="line"></span>

                <p className="productdetailstext">
                  {product.short_description}
                </p>

                <div className="size">
                  <div className="size__header flex">
                    <p className="select">Select Size</p>
                    <p className="view">View Size Chart</p>
                  </div>
                  <div className="selectsize flex">
                    {product.available_sizes.map((size, index) => (
                      <div
                        key={index}
                        onClick={selectProductSize}
                        id={size.toLowerCase()}
                        className="selectsize-circle"
                      >
                        <p>{size}</p>
                      </div>
                    ))}
                  </div>

                  {productSize.error && (
                    <Alert
                      text={productSize.error}
                      type="danger"
                      /* background="true" */
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
                  <p className="subtotal__price">₹ {product.sp}</p>
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
                  <button className="checkout btn flex" onClick={addToCart}>
                    Add to Cart
                  </button>
                  <button
                    className="addtocart btn flex"
                    onClick={() => {
                      addProductToWishlist(product);
                    }}
                  >
                    add to Wishlist
                  </button>
                </div>

                <div className="usp">
                  <img src={usp} alt="usp" />
                </div>
              </div>
            </div>
          </div>

          <div className="singleproduct__description flex">
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

                <li className="productdescription__list--item">
                  Blend of polyster and cotton
                </li>
              </ul>
            </div>
            <div className="productdescription2">
              <p className="heading">Product Details</p>
              <ul className="productdescription__list">
                <li className="productdescription__list--item">
                  All colors are pre-shrunk poly/cotton blend
                </li>

                <li className="productdescription__list--item">
                  Lightweight polo great for promotional work
                </li>

                <li className="productdescription__list--item">
                  Huge color selection
                </li>

                <li className="productdescription__list--item">
                  Blend of polyster and cotton
                </li>
              </ul>
            </div>
          </div>
          <span className="thirdline"></span>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
