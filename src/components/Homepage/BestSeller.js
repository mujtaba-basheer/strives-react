import React, { useState } from "react";
import Rating from "../util/Rating";
import theme_img_1 from "../../assets/images/homepage/theme_1.png";
import theme_img_2 from "../../assets/images/homepage/theme_2.png";
import theme_img_3 from "../../assets/images/homepage/theme_3.png";
import theme_img_4 from "../../assets/images/homepage/theme_4.png";
import theme_img_5 from "../../assets/images/homepage/theme_5.png";
import theme_img_6 from "../../assets/images/homepage/theme_6.png";
import theme_img_7 from "../../assets/images/homepage/theme_7.png";
import theme_img_8 from "../../assets/images/homepage/theme_8.png";

import carticon from "../../assets/images/homepage/icons/cart.png";
import wishlisticon from "../../assets/images/homepage/icons/heart.png";
import QuickView from "../layout/QuickView";

const BestSeller = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState("false");
  const bestSellers = [
    { url: theme_img_1, text: "Diwali", rating: { value: 4.4, total: 1628 } },
    {
      url: theme_img_2,
      text: "Employee Greeting",
      rating: { value: 4, total: 1600 },
    },
    {
      url: theme_img_3,
      text: "Women’s Day",
      rating: { value: 3.9, total: 1128 },
    },
    { url: theme_img_4, text: "New Year", rating: { value: 2.1, total: 4628 } },
    { url: theme_img_5, text: "Diwali", rating: { value: 3.3, total: 628 } },
    {
      url: theme_img_6,
      text: "Employee Greeting",
      rating: { value: 4.9, total: 728 },
    },
    {
      url: theme_img_7,
      text: "Women’s Day",
      rating: { value: 5.0, total: 10 },
    },
    { url: theme_img_8, text: "New Year", rating: { value: 4.4, total: 168 } },
  ];

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
              <img
                onClick={(e) => {
                  e.preventDefault();
                  slide("next");
                }}
                style={{
                  width: "5px",
                  height: "5px",
                }}
                src={carticon}
                alt="cart"
              />
            </span>
          </div>
          <div className="best-seller__image">
            <img
              className="best-seller__image--img"
              alt="best-seller 1"
              src={bestSellers[current]["url"]}
            />
          </div>
          <div className="best-seller__details">
            <div className="best-seller__details--rating">
              <Rating
                value={bestSellers[current]["rating"]["value"]}
                total={bestSellers[current]["rating"]["total"]}
              />
            </div>
            <div className="best-seller__details--text">
              <h4>{bestSellers[current]["text"]}</h4>
              <p>₹190 per unit</p>
            </div>
          </div>
        </div>
        <div className="best-seller__section best-seller__desktop">
          {bestSellers.map(({ url, text, rating: { value, total } }, index) => (
            <div key={index}>
              <div className="best-seller__image">
                <img
                  className="best-seller__image--img"
                  alt="best-seller 1"
                  src={url}
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
                <div className="best-seller__details--rating">
                  <Rating value={value} total={total} />
                </div>
                <div className="best-seller__details--text">
                  <h4>{text}</h4>
                  <p>₹190 per unit</p>
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
