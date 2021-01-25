import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import razorpayBanner from "../assets/images/checkout/razorpay.png";
import image from "../assets/images/checkout/image.png";
import coupon from "../assets/images/checkout/coupon.png";
import { Link } from "react-router-dom";

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

  const { register, handleSubmit, errors } = useForm();

  const [formData, setFormData] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
    phone: "",
    type: "",
    email: "",
    custphone: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="checkoutbox flex">
          <div className="checkoutbox__left">
            <div className="heading">
              <p className="heading__main">Billing Details</p>
              <p className="heading__subheading">
                Already a customer?{" "}
                <Link to="/login" className="heading__subheading--link">
                  Log in
                </Link>
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
                        defaultValue={formData.email}
                        ref={register({
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          maxLength: {
                            value: 50,
                            message: "Your email must not exceed 50 characters",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="alert error">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="form-inputs">
                      <input
                        className="form-inputs__input"
                        id="number"
                        type="number"
                        placeholder="Phone Number"
                        name="custphone"
                        defaultValue={formData.custphone}
                        ref={register({
                          required: {
                            value: true,
                            message: "Phone Number is required",
                          },
                          maxLength: {
                            value: 13,
                            message:
                              "Your Phone Number must not exceed 13 numbers",
                          },
                        })}
                      />
                      {errors.custphone && (
                        <div className="alert error">
                          {errors.custphone.message}
                        </div>
                      )}
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
                  <div className="form-inputs">
                    <label className="form-inputs__label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="form-inputs__input"
                      id="name"
                      placeholder="Name"
                      name="name"
                      defaultValue={formData.name}
                      ref={register({
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        maxLength: {
                          value: 50,
                          message: "Your Name must not exceed 50 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="alert error">{errors.name.message}</div>
                    )}
                  </div>

                  <div className="form-inputs">
                    <label className="form-inputs__label" htmlFor="address1">
                      Address Line 1
                    </label>
                    <input
                      className="form-inputs__input"
                      id="address1"
                      placeholder="Address"
                      name="address1"
                      defaultValue={formData.address1}
                      ref={register({
                        required: {
                          value: true,
                          message: "Address is required",
                        },
                        maxLength: {
                          value: 200,
                          message: "Your Name must not exceed 200 characters",
                        },
                      })}
                    />
                    {errors.address1 && (
                      <div className="alert error">
                        {errors.address1.message}
                      </div>
                    )}
                  </div>

                  <div className="form-inputs">
                    <label className="form-inputs__label" htmlFor="address2">
                      Address Line 2 (Optional)
                    </label>
                    <input
                      className="form-inputs__input"
                      id="address2"
                      placeholder="Address Line 2"
                      name="address2"
                      defaultValue={formData.address2}
                      ref={register({
                        maxLength: {
                          value: 200,
                          message: "Your Name must not exceed 200 characters",
                        },
                      })}
                    />
                    {errors.address2 && (
                      <div className="alert error">
                        {errors.address2.message}
                      </div>
                    )}
                  </div>

                  <div className="flex split-input">
                    {/* Select Gender Input */}
                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="city">
                        City
                      </label>
                      <input
                        className="form-inputs__input"
                        id="city"
                        placeholder="City"
                        name="city"
                        defaultValue={formData.city}
                        ref={register({
                          required: {
                            value: true,
                            message: "City is required",
                          },
                          maxLength: {
                            value: 50,
                            message: "City name must not exceed 50 characters",
                          },
                        })}
                      />
                      {errors.city && (
                        <div className="alert error">{errors.city.message}</div>
                      )}
                    </div>

                    {/* Select State Input */}

                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="state">
                        State
                      </label>
                      <input
                        className="form-inputs__input"
                        id="state"
                        placeholder="State"
                        name="state"
                        defaultValue={formData.state}
                        ref={register({
                          required: {
                            value: true,
                            message: "State is required",
                          },
                          maxLength: {
                            value: 50,
                            message: "State name must not exceed 50 characters",
                          },
                        })}
                      />
                      {errors.state && (
                        <div className="alert error">
                          {errors.state.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex split-input">
                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="landmark">
                        Landmark
                      </label>
                      <input
                        className="form-inputs__input"
                        id="landmark"
                        placeholder="Landmark"
                        name="landmark"
                        defaultValue={formData.landmark}
                        ref={register({
                          required: {
                            value: true,
                            message: "Landmark is required",
                          },
                          maxLength: {
                            value: 50,
                            message:
                              "Landmark name must not exceed 50 characters",
                          },
                        })}
                      />
                      {errors.landmark && (
                        <div className="alert error">
                          {errors.landmark.message}
                        </div>
                      )}
                    </div>

                    {/* Select phone Input */}
                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="pincode">
                        Pincode
                      </label>
                      <input
                        className="form-inputs__input"
                        type="number"
                        placeholder="Pincode"
                        id="pincode"
                        defaultValue={formData.pincode}
                        name="pincode"
                        ref={register({
                          required: {
                            value: true,
                            message: "Pincode is required",
                          },
                        })}
                      />
                      {errors.pincode && (
                        <div class="alert error">{errors.pincode.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex split-input">
                    {/* Select phone Input */}
                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="form-inputs__input"
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        defaultValue={formData.phone}
                        name="phone"
                        ref={register({
                          required: {
                            value: true,
                            message: "Phone number is required",
                          },
                          minLength: {
                            value: 10,
                            message:
                              "Phone number cannot be less than 10 digits",
                          },
                          maxLength: {
                            value: 13,
                            message: "Your number cannot exceed 13 characters",
                          },
                        })}
                      />
                      {errors.phone && (
                        <div class="alert error">{errors.phone.message}</div>
                      )}
                    </div>

                    {/* Select Gender Input */}

                    <div className="form-inputs">
                      <label className="form-inputs__label" htmlFor="type">
                        Address Type
                      </label>
                      <select
                        className="form-inputs__select"
                        defaultValue={formData.type}
                        name="type"
                        ref={register({
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      >
                        <option value="" defaultChecked disabled>
                          Select Address Type
                        </option>
                        <option
                          selected={formData.type === "Work" ? "selected" : ""}
                          value="Work"
                        >
                          Work
                        </option>
                        <option
                          selected={formData.type === "Home" ? "selected" : ""}
                          value="Home"
                        >
                          Home
                        </option>
                      </select>
                      {errors.type && (
                        <div className="alert error">{errors.type.message}</div>
                      )}
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

            <button
              type="submit"
              id="placeorder"
              className="checkoutbox_submit--button"
            >
              Place your order
            </button>
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

              <div className="ordersummarybox__footer">
                <button
                  type="submit"
                  id="placeorder"
                  className="ordersummarybox__footer--button"
                >
                  Place your order
                </button>
              </div>
            </div>

            <div className="couponbox">
              <button className="couponbox-input flex" type="button">
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
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
