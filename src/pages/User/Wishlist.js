import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getFav, removeItemFromFav } from "../../redux/actions/cartActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";
import Alert from "../../components/Alert/Alert";
import Loader from "../../components/Loader/Loader";

import trashicon from "./images/trash.png";
import backicon from "../../assets/images/icons/back.png";

import { FAV_REMOVE_RESET } from "../../redux/constants/cartConstants";

const Wishlist = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { favItems } = useSelector((state) => state.fav);
  const { error, loading } = useSelector((state) => state.favGet);
  const { error: favRemoveError, success: favRemoveSuccess } = useSelector(
    (state) => state.favRemove
  );

  /* function addToCart() {
    console.log("clicked");
  } */

  function removeFromWishlist(id) {
    dispatch(removeItemFromFav(id));
    setTimeout(() => dispatch({ type: FAV_REMOVE_RESET }), 3000);
  }

  useEffect(() => {
    /* if (!userInfo) history.push("/login"); */

    document.title = "Wishlist";

    if (!favItems) dispatch(getFav());
  }, [userInfo, history, dispatch, favItems]);

  return (
    <>
      <Navbar />
      <section className="content container mb-2">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              <img
                src={backicon}
                alt="back"
                style={{
                  width: "8px",
                  height: "10px",
                  marginRight: "8px",
                }}
              />{" "}
              Back to shopping
            </Link>
            <UserSidebar selected="Wishlist" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Wishlist</p>
            </div>

            {favRemoveError && (
              <Alert
                type="success"
                popup
                background="true"
                /* timer="5000" */
                text={favRemoveError}
              />
            )}
            {favRemoveSuccess && (
              <Alert
                type="success"
                popup
                background="true"
                /* timer="5000" */
                text={"Product Successfully removed from wishlist"}
              />
            )}

            {error && <Alert type="danger" text={error} />}

            {loading && <Loader height={100} />}

            {!loading && favItems.length === 0 && (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                No Products has been added to the wishlist
              </h1>
            )}

            {favItems.length > 0 && (
              <div className="wishlist">
                <ul className="wishlist__list">
                  {favItems.map((product, index) => (
                    <li className="wishlist__list--item" key={index}>
                      <div className="wishlist__list--itemcontainer flex">
                        <div className="productdetails flex">
                          <div className="image">
                            <Link to={`/products/${product._id}`}>
                              <img
                                src={product.gallery.small[0].src}
                                alt={product.name}
                              />
                            </Link>
                          </div>
                          <div className="productdetails__subdetails">
                            <Link
                              to={`/products/${product._id}`}
                              className="name"
                            >
                              {product.name}
                            </Link>

                            {product.quantity && (
                              <p className="size">Size: M</p>
                            )}
                            {product.quantity && (
                              <p className="quantity">
                                Quantity: {product.quantity}
                              </p>
                            )}
                            <p className="color">Color: Grey</p>
                            <p className="price">Price: ₹{product.sp}</p>
                          </div>
                        </div>
                        <span className="mobileline"></span>
                        <div className="buttons__container flex">
                          <div className="buttons flex">
                            <button
                              className="buttons__remove flex"
                              onClick={() => removeFromWishlist(product._id)}
                            >
                              <img
                                src={trashicon}
                                alt="trash"
                                style={{
                                  width: "11px",
                                  height: "14px",
                                  marginRight: "4px",
                                }}
                              />
                              Remove Item
                            </button>
                            {/* <button
                              onClick={addToCart}
                              className="buttons__addtocart"
                            >
                              Add to Cart
                            </button> */}
                          </div>
                        </div>
                      </div>

                      {index <= favItems.length - 2 && (
                        <span className="line"></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Wishlist;
