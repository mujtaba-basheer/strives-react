import React, { useEffect, useState } from "react";

import cross from "./images/cross.png";
import quick2 from "./images/quick2.png";
import quick3 from "./images/quick3.png";
import thumb from "./images/thumb.png";
import main from "./images/main.png";
import ImageSlider from "../ImageSlider/ImageSlider";

const QuickView = () => {
  const [quantity, setQuantity] = useState(1);

  function hideQuickView() {
    var quickviewmodal = document.getElementById("quickviewmodal");
    quickviewmodal.style.display = "none";
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

    /* 
    hideQuickView(); */
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
    <div id="quickviewmodal" className="quickviewmodal">
      <div className="quickviewmodal__content flex">
        <span onClick={hideQuickView} className="quickviewmodal__close">
          &times;
        </span>

        <div className="mobileproductimages">
          <ImageSlider />
        </div>

        <div className="productimages">
          <div className="yellow-box"></div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
