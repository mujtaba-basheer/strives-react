import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import ApiCall from "../utils/apiCall";

import forgotpassicon from "../assets/images/icons/forgotpassicon.png";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <ForgotPassArea />
      <Footer />
    </>
  );
};

export default ForgotPassword;

function ForgotPassArea() {
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
    <section className="content">
      <div className="forgotpassbox flex">
        <div className="yellow-design"></div>
        <div className="forgotpassbox__left">
          <div className="forgotpassdetails">
            <div className="forgotpass-container">
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
                  <button className="forgotpassdetails--button">
                    SEND EMAIL
                  </button>
                </div>
              </form>

              <Link to="/forgotpass" className="forgotpassdetails__signuplink">
                <img
                  style={{
                    width: "7px",
                    height: "7px",
                  }}
                  src={forgotpassicon}
                  alt="forgotpass"
                />{" "}
                Return to login screen
              </Link>
            </div>
          </div>
        </div>

        <div className="forgotpassbox__right"></div>
      </div>
    </section>
  );
}
