import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cartActions";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import coupon from "../assets/images/checkout/coupon.png";
import trashicon from "./User/images/trash.png";
import hearticon from "../assets/images/icons/heart.png";

const Cart = () => {
  return (
    <>
      <Navbar />
      <CartArea />
      <Footer />
    </>
  );
};

export default Cart;

function CartArea() {
  const dispatch = useDispatch();
  const [totalCartValue, setTotalCartValue] = useState(0);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { user, error } = useSelector((state) => state.userDetails);
  const { cartItems } = useSelector((state) => state.cart);

  const history = useHistory();
  const [paymentType, setPaymentType] = useState("cod");
  const [sdkReady, setSdkReady] = useState(false);
  const [shipmentType, setShipmentType] = useState("normal");
  const [applyCouponDetails, setApplyCouponDetails] = useState({
    name: "",
    inputState: "",
    couponApplied: false,
  });

  useEffect(() => {
    document.title = "Cart";
    if (cartItems.length === 0) {
      dispatch(getCart());
    }

    if (cartItems.length > 0) {
      let total = 0;
      cartItems.forEach((cart) => {
        console.log(cart.sp);
        total += cart.sp;
      });
      setTotalCartValue(total);
    }
  }, [error, cartItems]);

  function showApplyCoupon() {
    document.querySelector(".couponbox-input").style.display = "none";
    document.querySelector(".applycoupon").style.display = "block";
  }

  function removeCoupon() {
    setApplyCouponDetails({
      ...applyCouponDetails,
      inputState: "",
      couponApplied: false,
    });
  }

  function applyCoupon() {
    console.log(applyCouponDetails.name);
    setApplyCouponDetails({
      ...applyCouponDetails,
      inputState: "disabled",
      couponApplied: true,
    });
  }

  return (
    <section className="content cart">
      {console.log(cartItems)}
      <div className="heading">
        <p className="heading__text">Cart</p>
      </div>
      <div className="cartbox flex">
        <div className="cartbox__left">
          <div className="cartlist">
            <ul className="cartlist__list">
              {cartItems.map((product, index) => (
                <li className="cartlist__list--item" key={index}>
                  <div className="cartlist__list--itemcontainer flex">
                    <div className="productdetails flex">
                      <div className="image">
                        <img src={product.gallery.small[0].src} alt="thumb" />
                      </div>
                      <div className="productdetails__subdetails">
                        <p className="name">{product.name}</p>
                        <p className="size">Size: M</p>
                        <p className="quantity">Quantity: 10</p>
                        <p className="color">Color: Grey</p>
                        <p className="price">Price: ₹{product.sp}</p>
                      </div>
                    </div>
                    <span className="mobileline"></span>
                    <div className="buttons__container flex">
                      <div className="buttons flex">
                        <button
                          className="buttons__remove flex"
                          /*  onClick={() => removeFromWishlist(product._id)} */
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
                          /* onClick={addToCart} */
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
                    </div>
                  </div>

                  {index <= cartItems.length - 2 && (
                    <span className="line"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
                    <p className="total-gst--amount">₹900</p>
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
                      ₹{totalCartValue}
                    </p>
                  </div>
                  <ul>
                    <li>Free Delivery</li>
                    <li>Inclusive of GST</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="ordersummarybox__footer">
              <button
                type="submit"
                id="placeorder"
                className="ordersummarybox__footer--button"
                onClick={(e) => {
                  e.preventDefault();
                  /* testRazorpay(); */
                }}
              >
                Place your order
              </button>
            </div>
          </div>

          <div className="couponbox">
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
          </div>
          <button
            type="submit"
            id="placeorder"
            className="mobile__placeorder--button"
            onClick={(e) => {
              e.preventDefault();
              /* testRazorpay(); */
            }}
          >
            Place your order
          </button>
        </div>
      </div>
    </section>
  );
}
