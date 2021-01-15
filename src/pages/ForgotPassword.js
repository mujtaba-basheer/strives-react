import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import ApiCall from "../utils/apiCall";

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
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
    ApiCall.post("gen-pass", data)
      .then((res) => {
        console.log(res);
        setFormSuccess("Email has been sent");
      })
      .catch((err) => {
        setFormError(err.response.data.message);
        console.error(err);
      });
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-details">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    ref={register({
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      maxLength: {
                        value: 50,
                        message: "Your Email must not exceed 50 characters",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="alert error mb-1">
                      {errors.email.message}
                    </div>
                  )}
                  {formError && (
                    <div className="alert error mb-1">{formError}</div>
                  )}
                  {formSuccess && (
                    <div className="alert success mb-1">{formSuccess}</div>
                  )}
                  <button className="logindetails--button">SEND EMAIL</button>
                </div>
              </form>

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
