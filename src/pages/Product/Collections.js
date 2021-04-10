import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";
import QuickView from "../../components/layout/QuickView";

import { getCollections } from "../../redux/actions/productActions";

import {
  addItemToFav,
  removeItemFromFav,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
} from "../../redux/constants/cartConstants";

import heart from "./images/heart.png";
import heartfillsvg from "./images/heart-fill.svg";

const Collections = () => {
  return (
    <>
      <Navbar />
      <CollectionsArea />
    </>
  );
};

function CollectionsArea() {
  const [showModal, setShowModal] = useState("false");

  const { loading, collections, error } = useSelector(
    (state) => state.productCollections
  );

  const [productdetails, setProductdetails] = useState({});

  const { favItems } = useSelector((state) => state.fav);
  const { error: favAddError, success: favAddSuccess } = useSelector(
    (state) => state.favAdd
  );
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  let { id } = useParams();

  console.log(id);

  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    dispatch(getCollections());
  }, []);

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
      {loading && <Loader height={100} />}

      <section className="content collections">
        {favAddError && (
          <Alert
            type="warning"
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
            type="warning"
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

        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            error
          </p>
        )}

        {showModal === "true" && (
          <QuickView product={productdetails} setShowModal={setShowModal} />
        )}

        <ul className="collections__list">
          {collections &&
            collections.map((collection) => (
              <li className="collections__list--item" key={collection._id}>
                <div className="mainheading section-title">
                  {collection.name}
                </div>
                <p className="subheading">{collection.tagline}</p>

                <div className="product-container">
                  {collection.products &&
                    collection.products.map((product, index) => (
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
                            changeMainImageHover(
                              product.gallery.main,
                              "enter",
                              index
                            )
                          }
                          onMouseLeave={() =>
                            changeMainImageHover(
                              product.gallery.main,
                              "leave",
                              index
                            )
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
                    ))}
                </div>
                <button className="view-more" onClick={(e) => {
                  history.push(`/collections/${collection._id}`)
                }}>View More</button>
              </li>
            ))}
        </ul>
      </section>
      {!loading && <Footer />}
    </>
  );
}

export default Collections;
