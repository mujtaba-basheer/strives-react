import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserSidebar from "../components/layout/UserSidebar";

const MyAccount = () => {
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
                  <input type="text" placeholder="Name"/>
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
                  <input type="date" name="dob" id="dob" />
                </span>
              </div>

              <div className="flex">
                <span>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Email" />
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
