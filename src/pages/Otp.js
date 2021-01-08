import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <>
      <Navbar />
      <LoginArea />
      <Footer />
    </>
  );
};

export default Otp;

function LoginArea() {
  return (
    <section className="content container">
      <div className="loginbox flex">
        <div className="loginbox__left">
          <div className="logindetails forgotpass">
            <div className="login-container">
              <div className="otp__header">
                <p className="otp__header--headertext">
                  Please enter the OTP that <br /> came to you on mobile
                </p>
              </div>
              <div className="user-details">
                <input type="number" placeholder="Enter OTP" />
              </div>

              <button className="logindetails--button">VERIFY OTP</button>

              <Link to="/" className="logindetails__signuplink">
                Resend OTP
              </Link>
            </div>
          </div>
        </div>

        <div className="loginbox__right"></div>
      </div>
    </section>
  );
}
