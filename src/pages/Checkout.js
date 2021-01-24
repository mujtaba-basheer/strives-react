import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import razorpayBanner from "../assets/images/checkout/razorpay.png";
import image from "../assets/images/checkout/image.png";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutArea />
      <Footer />
    </>
  );
};

export default Checkout;

function CheckoutArea() {
  const [paymentType, setPaymentType] = useState("cod");
  const [shipmentType, setShipmentType] = useState("normal");

  return (
    <section className="content">
      <div className="checkoutbox flex">
        <div className="checkoutbox__left">
          <div className="heading">
            <p className="heading__main">Billing Details</p>
            <p className="heading__subheading">
              Already a customer? <span>Log in</span>
            </p>
          </div>
          <div className="contactinformation">
            <div className="contactinformation__flex flex">
              {/* Left Side Number  */}
              <div className="number">
                <div className="number__flex">
                  <div className="dot flex">
                    <p className="dot__text">1</p>
                  </div>
                  <div className="line"></div>
                </div>
              </div>

              <div className="contactinformation__details">
                <p className="contactinformation__details__heading">
                  Contact Information
                </p>
                <div className="flex split-input">
                  <div className="form-inputs">
                    <input
                      className="form-inputs__input"
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>

                  <div className="form-inputs">
                    <input
                      className="form-inputs__input"
                      id="number"
                      type="number"
                      placeholder="Phone Number"
                      name="number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shippingaddress">
            <div className="shippingaddress__flex flex">
              {/* Left Side Number  */}
              <div className="number">
                <div className="number__flex">
                  <div className="dot flex">
                    <p className="dot__text">2</p>
                  </div>
                  <div className="line"></div>
                </div>
              </div>

              <div className="shippingaddress__details">
                <div className="shippingaddress__details__heading">
                  <p className="shippingaddress__details__heading__main">
                    Shipping Address
                  </p>
                  <p className="shippingaddress__details__heading__sub">
                    Select or add a new address
                  </p>
                </div>
                <div className="flex split-input">
                  <div className="form-inputs">
                    <input
                      className="form-inputs__input"
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>

                  <div className="form-inputs">
                    <input
                      className="form-inputs__input"
                      id="number"
                      type="number"
                      placeholder="Phone Number"
                      name="number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shipment">
            <div className="shipment__flex flex">
              {/* Left Side Number  */}
              <div className="number">
                <div className="number__flex">
                  <div className="dot flex">
                    <p className="dot__text">3</p>
                  </div>
                  <div className="line"></div>
                </div>
              </div>

              <div className="shipment__details">
                <p className="shipment__details__heading">Shipment</p>

                <div className="shipment__type">
                  <div className="shipment__type--normal">
                    <div className="flex radio">
                      <input
                        type="radio"
                        className="radio-input"
                        name="normal"
                        id="normal"
                        onChange={() => setShipmentType("normal")}
                        checked={shipmentType === "normal"}
                      />
                      <label htmlFor="normal" className="radio-label">
                        Normal: 5-7 days delivery
                      </label>
                    </div>
                  </div>
                  <div className="shipment__type--express">
                    <div className="flex radio">
                      <input
                        type="radio"
                        className="radio-input"
                        name="express"
                        id="express"
                        checked={shipmentType === "express"}
                        onChange={() => setShipmentType("express")}
                      />
                      <label htmlFor="express" className="radio-label">
                        Express delivery: 1 day delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="payment">
            <div className="payment__flex flex">
              {/* Left Side Number  */}
              <div className="number">
                <div className="number__flex">
                  <div className="dot flex">
                    <p className="dot__text">4</p>
                  </div>
                  <div className="line"></div>
                </div>
              </div>

              <div className="payment__details">
                <p className="payment__details__heading">Payment</p>

                <div className="payment__type">
                  <div className="payment__type--cash">
                    <div className="flex radio">
                      <input
                        type="radio"
                        className="radio-input"
                        name="cod"
                        id="cod"
                        onChange={() => setPaymentType("cod")}
                        checked={paymentType === "cod"}
                      />
                      <label htmlFor="cod" className="radio-label">
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                  <div className="payment__type--razorpay">
                    <div className="flex radio">
                      <input
                        type="radio"
                        className="radio-input"
                        name="razorpay"
                        id="razorpay"
                        checked={paymentType === "razorpay"}
                        onChange={() => setPaymentType("razorpay")}
                      />
                      <label htmlFor="razorpay" className="radio-label">
                        Razorpay
                      </label>
                    </div>

                    <img
                      className="payment__type--razorpay__banner"
                      src={razorpayBanner}
                      alt="razorpay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="checkoutbox__right">
          <div className="ordersummarybox">
            <div className="ordersummary">
              <p className="ordersummary__heading">Order Summary</p>

              <div className="ordersummary__items">
                <ul className="ordersummary__items__list">
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
                </ul>

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
                    <p className="subtotal__heading--amount">₹1800</p>
                  </div>
                  <ul>
                    <li>Free Delivery</li>
                    <li>Inclusive of GST</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="couponbox">
            <input
              className="couponbox-input"
              type="text"
              placeholder="Have a coupon?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
