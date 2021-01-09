import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useHistory } from "react-router-dom";

import ApiCall from "../utils/apiCall";

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
  let history = useHistory();

  const [registerstatus, setRegisterstatus] = useState("register");
  const [otp, setOtp] = useState();
  const [userdata, setUserdata] = useState({
    name: "",
    phone: "",
  });
  const [otperror, setOtperror] = useState("");

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    setUserdata(data);
    setRegisterstatus("otp");

    let otpObj = {
      email: data.email,
      phone: data.phone,
    };

    console.log(otpObj);

    ApiCall.post("send-otp", otpObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("user already exists");
        setRegisterstatus("register");
        console.error(err);
      });
  };

  function onResendOtp(e) {
    e.preventDefault();

    let otpObj = {
      email: userdata.email,
      phone: userdata.phone,
    };

    console.log(otpObj);

    ApiCall.post("resend-otp", otpObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function onSubmitOtp(e) {
    console.log(userdata.phone);
    e.preventDefault();
    if (otp === "undefined") {
      setOtperror("OTP cannot be empty");
    } else {
      let otpObj = {
        email: userdata.email,
        otp: parseInt(otp),
      };

      console.log(otpObj);

      ApiCall.post("verify-otp", otpObj)
        .then((res) => {
          console.log(res);
          if (res.data.message === "OTP verified") {
            console.log("user verified");
            ApiCall.post("register", userdata)
              .then((res) => {
                console.log(res);
                history.push("/");
              })
              .catch((err) => {
                console.error(err);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <section className="content container">
      <div className="loginbox flex">
        <div className="loginbox__left">
          {registerstatus === "register" && (
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      ref={register({
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        maxLength: {
                          value: 50,
                          message: "Your Name must not exceed 50 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="error">{errors.email.message}</div>
                    )}
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      ref={register({
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        maxLength: {
                          value: 50,
                          message: "Your email must not exceed 50 characters",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="error">{errors.email.message}</div>
                    )}
                    <input
                      type="number"
                      placeholder="Phone"
                      name="phone"
                      ref={register({
                        required: {
                          value: true,
                          message: "required",
                        },
                        minLength: {
                          value: 10,
                          message: "Phone number cannot be less than 10 digits",
                        },
                        maxLength: {
                          value: 12,
                          message: "Your number cannot exceed 12 characters",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div class="alert error">{errors.phone.message}</div>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      ref={register({
                        required: {
                          value: true,
                          messsage: "You must specify a password",
                        },
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <div class="alert error">{errors.password.message}</div>
                    )}
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="password_repeat"
                      ref={register({
                        validate: (value) =>
                          value === password.current ||
                          "The passwords do not match",
                      })}
                    />
                    {errors.password_repeat && (
                      <div class="alert error">
                        {errors.password_repeat.message}
                      </div>
                    )}
                    <button type="submit" className="logindetails--button">
                      SIGN UP
                    </button>
                  </form>
                </div>

                <Link to="/login" className="logindetails__signuplink">
                  Don’t have an account? Click here to sign in
                </Link>
              </div>
            </div>
          )}

          {registerstatus === "otp" && (
            <div className="logindetails forgotpass">
              <div className="login-container">
                <div className="otp__header">
                  <p className="otp__header--headertext">
                    Please enter the OTP that <br /> came to you on mobile
                  </p>
                </div>
                <div className="user-details">
                  <form>
                    <input
                      type="number"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={onSubmitOtp}
                      className="logindetails--button"
                    >
                      VERIFY OTP
                    </button>
                  </form>
                </div>

                <Link
                  onClick={onResendOtp}
                  to="/"
                  className="logindetails__signuplink"
                >
                  Resend OTP
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="loginbox__right"></div>
      </div>
    </section>
  );
}
