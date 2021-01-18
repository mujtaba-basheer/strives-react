import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  updateAddress,
  getAddress,
  addAddress,
} from "../../redux/actions/userActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";
import Alert from "../../components/Alert/Alert";

const ChangePassword = () => {
  const [formInputStatus, setFormInputStatus] = useState("disabled");
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
  });

  const [showMessage, setShowMessage] = useState(false);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { error: addressError, address: addressData, success: addressSuccess } = useSelector(
    (state) => state.userAddress
  );

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (addressData) {
      setFormData({
        name: addressData.name,
        address1: addressData.address1,
        address2: addressData.address2,
        city: addressData.city,
        state: addressData.state,
        landmark: addressData.landmark,
        pincode: addressData.pincode,
        phone: addressData.phone,
        type: addressData.type,
      });
    } else dispatch(getAddress());
  }, [userInfo, history, dispatch, addressData]);

  function formEdit() {
    document.getElementsByClassName("header__btn--edit")[0].style.display =
      "none";
    document.getElementsByClassName("submit-button")[0].style.display = "block";
    setFormInputStatus("");
  }

  const onSubmit = (data) => {
    console.log(data);
    if (addressData === "Address Not Found") {
      dispatch(addAddress(data));
      setShowMessage(true);
    } else {
      dispatch(updateAddress(data));
      setShowMessage(true);
    }
  };

  return (
    <>
      <Navbar />

      <section className="content container mb-2">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              {" "}
              Back to shopping
            </Link>
            <UserSidebar selected="ManageAddress" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Manage Address</p>
              <span className="header__btns">
                <button className="header__btn--edit" onClick={formEdit}>
                  Edit
                </button>
              </span>
            </div>

            {showMessage && (
              <div>
                {addressSuccess && <Alert type="success" text={addressSuccess} />}
                {addressError && <Alert type="danger" text={addressError} />}
              </div>
            )}

            <form className="userdetails" onSubmit={handleSubmit(onSubmit)}>
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
                  disabled={formInputStatus}
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
                  disabled={formInputStatus}
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
                  <div className="alert error">{errors.address1.message}</div>
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
                  disabled={formInputStatus}
                  ref={register({
                    maxLength: {
                      value: 200,
                      message: "Your Name must not exceed 200 characters",
                    },
                  })}
                />
                {errors.address2 && (
                  <div className="alert error">{errors.address2.message}</div>
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
                    disabled={formInputStatus}
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
                    disabled={formInputStatus}
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
                    <div className="alert error">{errors.state.message}</div>
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
                    disabled={formInputStatus}
                    ref={register({
                      required: {
                        value: true,
                        message: "Landmark is required",
                      },
                      maxLength: {
                        value: 50,
                        message: "Landmark name must not exceed 50 characters",
                      },
                    })}
                  />
                  {errors.landmark && (
                    <div className="alert error">{errors.landmark.message}</div>
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
                    disabled={formInputStatus}
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
                    disabled={formInputStatus}
                    name="phone"
                    ref={register({
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number cannot be less than 10 digits",
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
                    disabled={formInputStatus}
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
                    <option selected={formData.type === "Work" ? "selected" : ""} value="Work">Work</option>
                    <option selected={formData.type === "Home" ? "selected" : ""} value="Home">Home</option>
                  </select>
                  {errors.type && (
                    <div className="alert error">{errors.type.message}</div>
                  )}
                </div>
              </div>
              <div className="form-footer flex">
                <button
                  style={{
                    display: "none",
                  }}
                  type="submit"
                  id="save"
                  className="submit-button"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChangePassword;
