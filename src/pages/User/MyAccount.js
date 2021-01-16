import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";

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
    document.getElementsByClassName("header__btn--save")[0].style.display =
      "block  ";
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
                <button
                  className="header__btn--save"
                  style={{
                    display: "none",
                  }}
                  onClick={saveEdit}
                >
                  Save
                </button>
                <button className="header__btn--edit" onClick={formEdit}>
                  Edit
                </button>
              </span>
            </div>

            <form className="userdetails">
              <div className="flex">
                <span>
                  <label htmlFor="fname">Full Name</label>
                  <input
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
                </span>
              </div>

              <div className="flex">
                <span>
                  <label for="gender">Gender</label>
                  <select
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
                </span>

                <span>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
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
                </span>
              </div>

              <div className="flex">
                <span>
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    value={formData.email}
                    id="email"
                    placeholder="Email"
                    required
                    disabled={formInputStatus}
                  />
                </span>

                <span>
                  <label htmlFor="phone">Phone Number</label>
                  <input
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
                </span>
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
