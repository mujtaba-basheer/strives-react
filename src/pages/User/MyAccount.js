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

  function saveEdit() {
    var name = document.getElementById("name");
    var gender = document.getElementById("gender");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var phone = document.getElementById("phone");

    let formValid = false;

    if (name.value === "" || name.value.length > 50) {
      name.style.border = "1px solid red";
    } else if (email.value === "" || email.value.length > 50) {
      email.style.border = "1px solid red";
    } else if (dob.value === "") {
      dob.style.border = "1px solid red";
    } else if (phone.value === "" || phone.value.length > 15) {
      phone.style.border = "1px solid red";
    } else {
      formValid = true;
      name.style.border = "1px solid black";
      email.style.border = "1px solid black";
      dob.style.border = "1px solid black";
      phone.style.border = "1px solid black";
    }

    if (formValid) {
      dispatch(updateUserProfile(formData));
    }
  }

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

            <form className="userdetails">
              <div className="form-inputs">
                <label className="form-inputs__label" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="form-inputs__input"
                  id="name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                  type="text"
                  placeholder="Name"
                  required
                  disabled={formInputStatus}
                />
              </div>

              <div className="flex split-input">
                {/* Select Gender Input */}
                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    className="form-inputs__select"
                    value={formData.gender}
                    name="gender"
                    id="gender"
                    disabled={formInputStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option value="" defaultChecked disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Select Gender Input */}

                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className="form-inputs__input"
                    value={formData.dob}
                    type="date"
                    name="dob"
                    id="dob"
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                    required
                    disabled={formInputStatus}
                  />
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
                    disabled={formInputStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    value={formData.email}
                    required
                  />
                </div>

                <div className="form-inputs">
                  <label className="form-inputs__label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="form-inputs__input"
                    value={formData.phone}
                    type="number"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Phone"
                    disabled={formInputStatus}
                    id="phone"
                    maxLength="15"
                  />
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
