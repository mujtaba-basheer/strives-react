import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import breadcrumbsArrow from "../../assets/images/allproduct/breadcrumbs-arrow.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import usp from "./images/usp.png";

import quick2 from "./images/quick2.png";
import quick3 from "./images/quick3.png";
import thumb from "./images/thumb.png";
import main from "./images/main.png";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

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
  const [quantity, setQuantity] = useState(1);

  function swapMainImage(event) {
    const src = event.target.src;
    const mainImage = document.getElementById("quickview-mainimage");
    mainImage.src = src;
  }

  function changeQuantity(type) {
    console.log("clickkkk");
    let count = quantity;

    if (type === "increase") {
      count++;
      setQuantity(count);
    } else if (type === "decrease") {
      count--;
      if (count < 1) count = 1;
      setQuantity(count);
    }
  }

  return (
    <section id="singleproduct" className="content singleproduct">
      <div className="singleproduct-breadcrumbs flex">
        <p className="category">fashion</p>
        <img src={breadcrumbsArrow} alt="arrow" />
        <p className="classification">t-shirt</p>
      </div>

      <div className="singleproduct__content flex">
        <div className="productdetails__left">
          <div className="productimages">
            <div className="yellow-box"></div>
            <div className="mobileproductimages">
              <ImageSlider />
            </div>
            <div className="productimages__thumbs">
              <div>
                <img
                  onClick={(e) => {
                    swapMainImage(e);
                  }}
                  src={thumb}
                  alt="quick"
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <img
                  onClick={(e) => {
                    swapMainImage(e);
                  }}
                  src={quick2}
                  alt="quick"
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <img
                  onClick={(e) => {
                    swapMainImage(e);
                  }}
                  src={quick3}
                  alt="quick"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="productimages__main">
              <img
                id="quickview-mainimage"
                src={main}
                alt="quick"
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
            <p className="mainheading">MALIHA BY ANAR AND ANOLI</p>

            <span className="line"></span>

            <p className="productdetailstext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              quibusdam. Eos odit officiis praesentium quae dolor odio, ullam
              eum consequatur fugit, dignissimos mollitia tempore a nemo
              temporibus earum repellendus totam.
            </p>

            <div className="size">
              <div className="size__header flex">
                <p className="select">Select Size</p>
                <p className="view">View Size Chart</p>
              </div>
              <div className="selectsize flex">
                <div className="selectsize-circle">
                  <p>xs</p>
                </div>
                <div className="selectsize-circle">
                  <p>xs</p>
                </div>
                <div className="selectsize-circle">
                  <p>xs</p>
                </div>
                <div className="selectsize-circle">
                  <p>xs</p>
                </div>
                <div className="selectsize-circle">
                  <p>xs</p>
                </div>
              </div>
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
                    value={quantity}
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
                  <p>You are saving ₹1,800</p>
                </div>
              </div>
            </div>

            <span className="secondline"></span>

            <div className="subtotal flex">
              <p className="subtotal__heading">Subtotal</p>
              <p className="subtotal__price">₹ 2,357</p>
            </div>

            <div className="subtotaldescription">
              <ul className="subtotaldescription__list">
                <li className="subtotaldescription__list--item">
                  Free Delivery
                </li>
                <li className="subtotaldescription__list--item">
                  Inclusive of GST
                </li>
              </ul>
            </div>

            <div className="cta">
              <a className="checkout btn flex" href="">
                proceed to checkout
              </a>
              <a className="addtocart btn flex" href="">
                add to cart
              </a>
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
  );
}

export default SingleProduct;
