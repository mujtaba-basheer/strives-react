import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateAddress, getAddress } from "../../redux/actions/userActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";

const ChangePassword = () => {
  const [formInputStatus, setFormInputStatus] = useState("disabled");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    number: "",
    dob: "",
    email: "",
  });

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const { loading: loadingLogin, error: errorLogin, userInfo } = useSelector(
    (state) => state.userLogin
  );
  const {
    loading: addressLoading,
    error: addressError,
    address: addressData,
  } = useSelector((state) => state.userAddress);

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (addressData) {
      console.log(addressData);
      // fill state with addressData
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
    dispatch(updateAddress(data));
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
                  /* defaultValue={formData.name} */
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
                  /* defaultValue={formData.name} */
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
                    /* defaultValue={formData.city} */
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
                    /* defaultValue={formData.name} */
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
                    /* defaultValue={formData.phone} */
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
                    /* defaultValue={formData.gender} */
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
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
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
