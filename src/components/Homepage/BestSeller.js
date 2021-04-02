import React, { useState } from "react";
import Rating from "../util/Rating";

import carticon from "../../assets/images/homepage/icons/cart.png";
import wishlisticon from "../../assets/images/homepage/icons/heart.png";
import QuickView from "../layout/QuickView";

import { bestSellers } from "./data";

const BestSeller = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState("false");

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

  function showQuickView() {
    console.log("clicked");
    var quickviewmodal = document.getElementById("quickviewmodal");
    quickviewmodal.style.display = "flex";
  }

  return (
    <>
      {showModal === "true" && (
        <QuickView /* product={productdetails} */ setShowModal={setShowModal} />
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
              alt={bestSellers[current].img.alt}
              src={bestSellers[current].img.src}
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
              <h4>{bestSellers[current].title}</h4>
              {bestSellers[current].price.mrp ===
              bestSellers[current].price.sp ? (
                <p>₹{bestSellers[current].price.mrp} per unit</p>
              ) : (
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{bestSellers[current].price.mrp}
                  </span>{" "}
                  ₹{bestSellers[current].price.sp} per unit
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="best-seller__section best-seller__desktop">
          {bestSellers.map(({ img, title, price }, index) => (
            <div key={index}>
              <div className="best-seller__image">
                <img
                  className="best-seller__image--img"
                  alt={img.alt}
                  src={img.src}
                />
                <div className="best-seller__image--actions">
                  <span className="best-seller__image--actions--icon">
                    <img
                      onClick={(e) => {
                        e.preventDefault();
                        slide("next");
                      }}
                      style={{
                        width: "27px",
                        height: "23px",
                      }}
                      src={carticon}
                      alt="cart"
                    />
                  </span>
                  <span className="best-seller__image--actions--icon">
                    <img
                      onClick={(e) => {
                        e.preventDefault();
                        slide("next");
                      }}
                      style={{
                        width: "27px",
                        height: "23px",
                      }}
                      src={wishlisticon}
                      alt="wishlist"
                    />
                  </span>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("clicked");
                    /* setProductdetails(product); */
                    setShowModal("true");

                    /* showQuickView(); */
                  }}
                  className="best-seller__image--quick-view"
                >
                  Quick View
                </div>
              </div>
              <div className="best-seller__details">
                {/* <div className="best-seller__details--rating">
                  <Rating value={value} total={total} />
                </div> */}
                <div className="best-seller__details--text">
                  <h4>{title}</h4>
                  {price.mrp === price.sp ? (
                    <p>₹{price.mrp} per unit</p>
                  ) : (
                    <p>
                      <span style={{ textDecoration: "line-through" }}>
                        ₹{price.mrp}
                      </span>{" "}
                      ₹{price.sp} per unit
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSeller;
