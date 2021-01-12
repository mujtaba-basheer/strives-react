import React from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <LoginArea />
      <Footer />
    </>
  );
};

export default ForgotPassword;

function LoginArea() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
  };

  return (
    <section className="content container">
      <div className="loginbox flex">
        <div className="loginbox__left">
          <div className="logindetails forgotpass">
            <div className="login-container">
              <div className="forgotpass__header">
                <p className="forgotpass__header--headertext">
                  Please enter your email to <br /> retreive your password
                </p>
              </div>
              <div className="user-details">
                <input type="email" placeholder="Email" />
              </div>

              <button className="logindetails--button">SEND EMAIL</button>

              <Link to="/login" className="logindetails__signuplink">
                Return to login screen
              </Link>
            </div>
          </div>
        </div>

        <div className="loginbox__right"></div>
      </div>
    </section>
  );
}
