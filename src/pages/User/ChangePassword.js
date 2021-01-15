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

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { loading: loadingLogin, error: errorLogin, userInfo } = useSelector(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (user) {
      console.log(user);
      // set user details to state
      //   {
      //   _id: '5ff992d324303e1808b8ebbd',
      //   name: 'Richard Rozario',
      //   email: 'richardrozario.rr@gmail.com'
      // }
    } else dispatch(getUserDetails());
  }, [userInfo, history, user, dispatch]);

  function formEdit() {
    document.getElementsByClassName("header__btn--edit")[0].style.display =
      "none";
    document.getElementsByClassName("header__btn--save")[0].style.display =
      "block  ";
    setFormInputStatus("");
  }

  function saveEdit() {
    var currentpass = document.getElementById("currentpass");
    var newpass = document.getElementById("newpass");
    var connewpass = document.getElementById("connewpass");

    console.log(typeof currentpass.value, newpass.value, connewpass.value, !(connewpass.toString() !== newpass.toString()));

    let formValid = false;

    if (currentpass.value === "") {
      currentpass.style.border = "1px solid red";
    } else if (newpass.value === "" || newpass.value.length < 8) {
      newpass.style.border = "1px solid red";
    } else if (!(connewpass.toString() !== newpass.toString())) {
      connewpass.style.border = "1px solid red";
    } else {
      console.log("yo ");
      formValid = true;
      currentpass.style.border = "1px solid black";
      newpass.style.border = "1px solid black";
      connewpass.style.border = "1px solid black";
    }

    if (formValid) {
      console.log("hh");
    }
  }

  return (
    <>
      <Navbar />

      <section className="content container mt-1 mb-2">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              {" "}
              Back to shopping
            </Link>
            <UserSidebar selected="ChangePassword" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Change Password</p>
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

            <form className="userdetails changepassword">
              <span>
                <label htmlFor="fname">Curent Password</label>
                <input
                  id="currentpass"
                  onChange={(e) => e.target.value}
                  type="text"
                  placeholder="Current Password"
                  required
                  disabled={formInputStatus}
                />
              </span>

              <div>
                <span className="mt-1">
                  <label htmlFor="fname">New Password</label>
                  <input
                    id="newpass"
                    onChange={(e) => e.target.value}
                    type="text"
                    placeholder="New Password"
                    required
                    disabled={formInputStatus}
                  />
                </span>
              </div>

              <span>
                <label htmlFor="fname">Confirm New Password</label>
                <input
                  id="connewpass"
                  onChange={(e) => e.target.value}
                  type="text"
                  placeholder="Confirm New Password"
                  required
                  disabled={formInputStatus}
                />
              </span>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChangePassword;
