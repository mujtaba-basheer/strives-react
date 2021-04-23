import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getCart, removeItemFromCart } from "../../redux/actions/cartActions";

import apiCall from "../../utils/apiCall";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Alert from "../../components/Alert/Alert";
import Loader from "../../components/Loader/Loader";

const OrderConfirmation = () => {
  return (
    <>
      <Navbar />
      <OrderConfirmationArea />
      <Footer />
    </>
  );
};

export default OrderConfirmation;

function OrderConfirmationArea() {
  const [cartValue, setCartValue] = useState({
    total: 0,
    subtotal: 0,
  });
  /* const { userInfo } = useSelector((state) => state.userLogin); */
  /* const { cartItems, loading } = useSelector((state) => state.cart); */

  const [cartItems, setCartItems] = useState([]);
  const [orderid, setOrderid] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  useEffect(() => {
    document.title = "Order Details";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getOrderDetails = async () => {
    console.log("clicked");
    if (orderid === "") {
      setError("Order ID cannot be empty");
      setTimeout(() => setError(""), 5000);
    } else {
      try {
        const { data } = await apiCall.get(`order/${orderid}`, {});
        setCartItems(data.data.items);
      } catch (error) {
        if (error.response || error.response.data.message) {
          console.log(error.response.data.message, error.message);
          setError(error.response.data.message);
          setTimeout(() => setError(""), 5000);
        }
      }
    }
  };

  return (
    <section className="content cart">
      <div className="heading">
        {cartItems.length > 0 && <p className="heading__text">Order Details</p>}
      </div>

      {error !== "" && (
        <Alert
          type="danger"
          popup
          background="true"
          timer="5000"
          text={error}
        />
      )}

      {/* {loading && <Loader height={100} />} */}

      {/* {!loading && (!cartItems || cartItems.length === 0) && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Cart is empty
        </h1>
      )} */}
      <div className="cartbox flex">
        {cartItems.length === 0 && (
          <div className="orderidbox">
            <p className="heading">Enter Order ID</p>
            <input
              type="number"
              onChange={(e) => {
                setOrderid(e.target.value);
              }}
              placeholder="Order ID"
            />
            <button onClick={getOrderDetails} type="submit">
              Check Order Details
            </button>
          </div>
        )}

        {cartItems && cartItems.length > 0 && (
          <div className="cartbox__left">
            <div className="cartlist">
              <ul className="cartlist__list">
                {cartItems.map((product, index) => (
                  <li className="cartlist__list--item" key={product._id}>
                    <div className="cartlist__list--itemcontainer flex">
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
                          {product.size && (
                            <p className="size">
                              Size: {product.size.toUpperCase()}
                            </p>
                          )}
                          <p className="quantity">
                            Quantity: {product.quantity}
                          </p>
                          <p className="color">Color: Grey</p>
                          <p className="price">Price: ₹{product.sp}</p>
                        </div>
                      </div>
                      {/* <span className="mobileline"></span> */}
                      {/* <div className="buttons__container flex">
                        <div className="buttons flex">
                          <button
                            className="buttons__remove flex"
                            onClick={() => {
                              dispatch(
                                removeItemFromCart(product._id, product.size)
                              );
                            }}
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
                          <button
                            onClick={addToCart}
                            className="buttons__wishlist flex"
                          >
                            <img
                              style={{
                                width: "14px",
                                height: "13px",
                                marginRight: "5px",
                              }}
                              src={hearticon}
                              alt="heart"
                            />
                            Move to Wishlist
                          </button>
                        </div>
                      </div> */}
                    </div>

                    {index <= cartItems.length - 2 && (
                      <span className="line"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cartbox__right">
            <div className="ordersummarybox">
              <div className="ordersummary">
                <p className="ordersummary__heading">Order Summary</p>

                <div className="ordersummary__items">
                  {/* <ul className="ordersummary__items__list">
                    <li className="ordersummary__items__list--item flex">
                      <img
                        className="ordersummary__items__list--item--image"
                        src={image}
                        alt="image"
                      />
                      <div className="ordersummary__items__list--item--productdetails flex">
                        <div className="ordersummary__items__list--item--productdetails--name">
                          <p className="ordersummary__items__list--item--productdetails--name--main">
                            Collar T-shirt
                          </p>
                          <p className="ordersummary__items__list--item--productdetails--name--description">
                            Gery <span>x2</span>{" "}
                          </p>
                        </div>
                        <div className="ordersummary__items__list--item--productdetails--price">
                          ₹900
                        </div>
                      </div>
                    </li>
                  </ul> */}

                  <div className="total">
                    <div className="total-gst flex">
                      <p className="total-gst--text">Total Price (Inc GST)</p>
                      <p className="total-gst--amount">₹{cartValue.total}</p>
                    </div>
                    <div className="total-shipping flex">
                      <p className="total-shipping--text">Estimated Shipping</p>
                      <p className="total-shipping--amount">₹0</p>
                    </div>
                  </div>

                  <div className="subtotal">
                    <div className="subtotal__heading flex">
                      <p className="subtotal__heading--text">Subtotal</p>
                      <p className="subtotal__heading--amount">
                        ₹{cartValue.total}
                      </p>
                    </div>
                    <ul>
                      <li>Free Delivery</li>
                      <li>Inclusive of GST</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="ordersummarybox__footer">
                <button
                  type="submit"
                  id="placeorder"
                  className="ordersummarybox__footer--button"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/checkout");
                  }}
                >
                  Place your order
                </button>
              </div> */}
            </div>

            {/* <div className="couponbox">
              <button
                onClick={showApplyCoupon}
                className="couponbox-input flex"
                type="button"
              >
                <p>Have a coupon?</p>
                <img
                  src={coupon}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginLeft: "10px",
                  }}
                  alt="coupon"
                />
              </button>

              <div
                className="applycoupon"
                style={{
                  display: "none",
                }}
              >
                <div className="applycoupon__heading flex">
                  <p className="applycoupon__heading--text">Have a coupon?</p>
                  <img
                    src={coupon}
                    style={{
                      width: "15px",
                      height: "15px",
                      marginLeft: "10px",
                    }}
                    alt="coupon"
                  />
                </div>

                <div className="applycoupon__input">
                  <input
                    className="applycoupon__input--input"
                    placeholder="Enter Coupon"
                    type="text"
                    disabled={applyCouponDetails.inputState}
                    onChange={(e) =>
                      setApplyCouponDetails({
                        ...applyCouponDetails,
                        name: e.target.value,
                      })
                    }
                  />
                  {applyCouponDetails.couponApplied ? (
                    <button
                      onClick={removeCoupon}
                      type="button"
                      className="applycoupon__input--button"
                    >
                      Remove coupon
                    </button>
                  ) : (
                    <button
                      onClick={applyCoupon}
                      type="button"
                      className="applycoupon__input--button"
                    >
                      Apply coupon
                    </button>
                  )}
                </div>
              </div>
            </div> */}
            {/* <button
              type="submit"
              id="placeorder"
              className="mobile__placeorder--button"
              onClick={(e) => {
                e.preventDefault();
                testRazorpay();
              }}
            >
              Place your order
            </button> */}
          </div>
        )}
      </div>
    </section>
  );
}
