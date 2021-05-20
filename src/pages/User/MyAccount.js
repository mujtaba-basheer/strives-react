import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteUser,
  getUserDetails,
  updateUserProfile,
} from "../../redux/actions/userActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";
import Alert from "../../components/Alert/Alert";

import pencilicon from "../../assets/images/icons/pencil.png";
import backicon from "../../assets/images/icons/back.png";

const MyAccount = () => {
  const [formInputStatus, setFormInputStatus] = useState("disabled");
  const [formData, setFormData] = useState({
    // name: "",
    firstname: "",
    lastname: "",
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
  const {
    loading: loadingLogin,
    error: errorLogin,
    userInfo,
  } = useSelector((state) => state.userLogin);

  useEffect(() => {
    /* if (!userInfo) history.push("/login"); */
    if (user) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      let spIndex = user.name.indexOf(" ");
      spIndex = spIndex === -1 ? false : spIndex;
      setFormData({
        // name: user.name,
        firstname: spIndex ? user.name.substring(0, spIndex) : user.name,
        lastname: spIndex ? user.name.substring(spIndex + 1) : "",
        gender: user.gender,
        phone: user.phone,
        dob: user.dob,
        email: user.email,
      });
      console.log({
        firstname: spIndex ? user.name.substring(0, spIndex) : user.name,
        lastname: spIndex ? user.name.substring(spIndex + 1) : "",
      });
    } else dispatch(getUserDetails());

    if (updateSuccess) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementsByClassName("header__btn--edit")[0].style.display =
        "block";
      document.getElementsByClassName("submit-button")[0].style.display =
        "none";

      setFormInputStatus("disabled");
    }
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
            <Link className="backlink flex" to="/">
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
            <UserSidebar selected="MyAccount" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Personal Information</p>
              <span className="header__btns">
                <button className="header__btn--edit" onClick={formEdit}>
                  <img
                    src={pencilicon}
                    style={{
                      height: "14px",
                      width: "14px",
                    }}
                    alt="pencil"
                  />{" "}
                  Edit
                </button>
              </span>
            </div>

            <div>
              {updateSuccess && (
                <Alert type="success" text="Updated Successfully" />
              )}
              {updateError && <Alert type="danger" text={updateError} />}
            </div>

            <form className="userdetails" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex split-input">
                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="fname">
                    First Name
                  </label>
                  <input
                    className="form-inputs__input"
                    id="fname"
                    placeholder="First Name"
                    name="firstname"
                    defaultValue={formData.firstname}
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
                  {errors.firstname && (
                    <div className="alert error">
                      {errors.firstname.message}
                    </div>
                  )}
                </div>

                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="lname">
                    Last Name
                  </label>
                  <input
                    className="form-inputs__input"
                    id="lname"
                    placeholder="Last Name"
                    name="lastname"
                    defaultValue={formData.lastname}
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
                  {errors.lastname && (
                    <div className="alert error">{errors.lastname.message}</div>
                  )}
                </div>
              </div>

              <div className="flex split-input">
                {/* Select Gender Input */}
                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    className="form-inputs__select"
                    name="gender"
                    disabled={formInputStatus}
                    ref={register({
                      required: {
                        value: true,
                        message: "Gender is required",
                      },
                    })}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option
                      selected={formData.gender === "Male" ? "selected" : ""}
                      value="Male"
                    >
                      Male
                    </option>
                    <option
                      selected={formData.gender === "Female" ? "selected" : ""}
                      value="Female"
                    >
                      Female
                    </option>
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
