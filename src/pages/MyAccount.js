import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getUserDetails,
  updateUserProfile,
} from "../redux/actions/userActions";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserSidebar from "../components/layout/UserSidebar";

const MyAccount = () => {
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

  const [value, onChange] = useState();
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
            <UserSidebar />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Personal Information</p>
              <span className="header__btns">
                <button className="header__btn--save">Save</button>
                <button className="header__btn--edit">Edit</button>
              </span>
            </div>

            <form className="userdetails">
              <div className="flex">
                <span>
                  <label htmlFor="fname">Full Name</label>
                  <input
                    value={user ? user.name : ""}
                    type="text"
                    placeholder="Name"
                  />
                </span>
              </div>

              <div className="flex">
                <span>
                  <label for="gender">Gender</label>
                  <select name="gender" id="gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </span>

                <span>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    onChange={(e) => console.log(e.target.value)}
                    type="date"
                    name="dob"
                    id="dob"
                  />
                </span>
              </div>

              <div className="flex">
                <span>
                  <label htmlFor="email">Email</label>
                  <input
                    value={user ? user.email : ""}
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </span>

                <span>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" placeholder="Phone" />
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
