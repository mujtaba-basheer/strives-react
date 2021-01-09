import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <LoginArea />
      <Footer />
    </>
  );
};

export default Register;

function LoginArea() {
  return (
    <section className="content container">
      <div className="loginbox flex">
        <div className="loginbox__left">
          <div className="logindetails">
            <div className="login-container">
              <div className="registerdetails__header">
                <p className="registerdetails__header--headertext">
                  Welcome to The Strives
                  <br />
                  Please Sign Up
                </p>
              </div>

              <div className="user-details">
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button className="logindetails--button">SIGN UP</button>

              <Link to="/login" className="logindetails__signuplink">
                Don’t have an account? Click here to sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="loginbox__right"></div>
      </div>
    </section>
  );
}
