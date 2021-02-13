import React, { useEffect, useState } from "react";

/* import quick2 from "./images/quick2.png";
import quick3 from "./images/quick3.png";
import thumb from "./images/thumb.png";
import main from "./images/main.png"; */

import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const QuickView = ({ product, setShowModal }) => {
  const [quantity, setQuantity] = useState(1);

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
  if (product) product.gallery.main.map((image) => images.push(image.src));

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
      {product && (
        <div className="quickviewmodal__content flex">
          <span onClick={hideQuickView} className="quickviewmodal__close">
            &times;
          </span>

          <div className="mobileproductimages">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
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

          <div className="productdetails">
            <div className="productdetails__container">
              <p className="mainheading">{product.name}</p>

              <span className="line"></span>

              <p className="productdetailstext">{product.short_description}</p>

              <div className="size">
                <div className="size__header flex">
                  <p className="select">Select Size</p>
                  <p className="view">View Size Chart</p>
                </div>
                <div className="selectsize flex">
                  {product.available_sizes.map((size) => (
                    <div className="selectsize-circle">
                      <p>{size}</p>
                    </div>
                  ))}
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
      )}
    </div>
  );
};

export default QuickView;
