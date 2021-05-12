import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BestSeller = () => {
  const [showModal, setShowModal] = useState("false");

  const dispatch = useDispatch();

  const { favItems } = useSelector((state) => state.fav);

  const [productdetails, setProductdetails] = useState({});


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

        <div className="mobile">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
          >
            {bestSellers.map((product, index) => (
              <SwiperSlide>
                {console.log(product)}
                <div className="product-item" key={product._id}>
                  <p
                    className="heart"
                    onClick={() => {
                      if (
                        favItems &&
                        favItems.find(
                          (favProduct) =>
                            favProduct._id === product._id
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
                          (favProduct) =>
                            favProduct._id === product._id
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
                      to={`/products/${product._id.$oid}`}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="desktop">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {bestSellers.map((product, index) => (
              <SwiperSlide>
                <div className="product-item" key={product._id}>
                  <p
                    className="heart"
                    onClick={() => {
                      if (
                        favItems &&
                        favItems.find(
                          (favProduct) =>
                            favProduct._id === product._id
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
                          (favProduct) =>
                            favProduct._id === product._id
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
