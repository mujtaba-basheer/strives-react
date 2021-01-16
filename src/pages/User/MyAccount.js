import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getUserDetails,
  updateUserProfile,
} from "../../redux/actions/userActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";

const MyAccount = () => {
  const [formInputStatus, setFormInputStatus] = useState("disabled");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: undefined,
    dob: "",
    email: "",
  });

  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm();

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = useSelector((state) => state.userUpdateProfile);
  const { loading: loadingLogin, error: errorLogin, userInfo } = useSelector(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (user) {
      setFormData({
        name: user.name,
        gender: user.gender,
        phone: user.phone,
        dob: user.dob,
        email: user.email,
      });
    } else dispatch(getUserDetails());

    if (updateSuccess) setFormInputStatus("disabled");
  }, [userInfo, history, user, dispatch, updateSuccess]);

  function formEdit() {
    document.getElementsByClassName("header__btn--edit")[0].style.display =
      "none";
    document.getElementsByClassName("submit-button")[0].style.display = "block";
    setFormInputStatus("");
  }

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updateUserProfile(data));
  };

  return (
    <>
      <Navbar />

      <section className="content container">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              {" "}
              Back to shopping
            </Link>
            <UserSidebar selected="MyAccount" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Personal Information</p>
              {updateSuccess && (
                <h3 style={{ color: "green" }}>Updated Successfully</h3>
              )}
              {updateError && <h3 style={{ color: "red" }}>{updateError}</h3>}
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

              <div className="flex split-input">
                {/* Select Gender Input */}
                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    className="form-inputs__select"
                    defaultValue={formData.gender}
                    name="gender"
                    disabled={formInputStatus}
                    ref={register({
                      required: {
                        value: true,
                        message: "Gender is required",
                      },
                    })}
                  >
                    <option value="" defaultChecked disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && (
                    <div className="alert error">{errors.gender.message}</div>
                  )}
                </div>

                {/* Select Gender Input */}

                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className="form-inputs__input"
                    type="date"
                    name="dob"
                    defaultValue={formData.dob}
                    disabled={formInputStatus}
                    id="dob"
                    ref={register({
                      required: {
                        value: true,
                        message: "Date of Birth is required",
                      },
                    })}
                  />
                  {errors.dob && (
                    <div className="alert error">{errors.dob.message}</div>
                  )}
                </div>
              </div>

              <div className="flex split-input">
                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-inputs__input"
                    placeholder="Email"
                    id="email"
                    name="email"
                    defaultValue={formData.email}
                    disabled={formInputStatus}
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
                    <div className="alert error">{errors.email.message}</div>
                  )}
                </div>

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
                        value: 12,
                        message: "Your number cannot exceed 12 characters",
                      },
                    })}
                  />
                  {errors.phone && (
                    <div class="alert error">{errors.phone.message}</div>
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

export default MyAccount;
