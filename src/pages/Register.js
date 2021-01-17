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
  const [registerFormError, setRegisterFormError] = useState("");
  const [otperror, setOtperror] = useState("");
  const [otpsuccess, setOtpsuccess] = useState("");

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    setUserdata(data);

    let otpObj = {
      email: data.email,
      phone: data.phone,
    };

    console.log(otpObj);

    ApiCall.post("send-otp", otpObj)
      .then((res) => {
        setRegisterstatus("otp");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setRegisterFormError(err.response.data.message);
        setRegisterstatus("register");
        console.error(err);
      });
  };

  function onResendOtp(e) {
    e.preventDefault();

    setOtpsuccess("OTP has been sent");

    let otpObj = {
      email: userdata.email,
      phone: userdata.phone,
    };


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
    setOtpsuccess("");
    console.log("uu");
    if (otp === "" || otp === "undefined") {
      setOtperror("OTP cannot be empty");
    } else {
      let otpObj = {
        email: userdata.email,
        otp: parseInt(otp),
      };

      ApiCall.post("verify-otp", otpObj)
        .then((res) => {
          console.log(res);
          if (res.data.message === "OTP verified") {
            console.log("user verified");

            ApiCall.post("register", {
              name: userdata.name,
              phone: userdata.phone,
              email: userdata.email,
              password: userdata.password,
            })
              .then((res) => {
                console.log(res);
                history.push("/");
              })
              .catch((err) => {
                console.log(err.response);

                console.error(err);
              });
          }
        })
        .catch((err) => {
          setOtperror(err.response.data.message);
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
                      <div className="alert error mb-1">
                        {errors.name.message}
                      </div>
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
                      <div className="alert error mb-1">
                        {errors.email.message}
                      </div>
                    )}
                    {registerFormError && (
                      <div className="alert error mb-1">
                        {registerFormError}
                      </div>
                    )}
                    <input
                      type="number"
                      placeholder="Phone"
                      name="phone"
                      ref={register({
                        required: {
                          value: true,
                          message: "Phone number is required",
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
                      <div class="alert error mb-1">{errors.phone.message}</div>
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
                      <div class="alert error mb-1">
                        {errors.password.message}
                      </div>
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
                      <div class="alert error mb-1">
                        {errors.password_repeat.message}
                      </div>
                    )}
                    <button type="submit" className="logindetails--button">
                      SIGN UP
                    </button>
                  </form>
                </div>

                <Link to="/login" className="logindetails__signuplink">
                  Have an account? Click here to Sign in
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
                    {otperror && (
                      <div className="alert error mb-1">{otperror}</div>
                    )}
                    {otpsuccess && (
                      <div className="alert success mb-1">{otpsuccess}</div>
                    )}
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
