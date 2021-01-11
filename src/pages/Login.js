/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useHistory } from "react-router-dom";

import { login } from "../redux/actions/userActions";

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const onSubmit = (data) => {
    console.log(data, errors);

    dispatch(login(data));
  };

  return (
    <>
      <Navbar />

      <section className="content container">
        <div className="loginbox flex">
          <div className="loginbox__left">
            <div className="logindetails">
              <div className="login-container">
                <div className="logindetails__header">
                  <p className="logindetails__header--headertext">
                    Welcome back,
                    <br />
                    please Sign In
                  </p>
                </div>
                <div className="user-details">
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                      type="password"
                      placeholder="Password"
                      name="password"
                      ref={register}
                    />

                    {/* for incorrect password */}
                    {/* {errors.password && (
                    <div class="alert error">{errors.password.message}</div>
                  )} */}

                    <div className="extra-options">
                      <span className="flex">
                        <input
                          type="checkbox"
                          name="keepsignedin"
                          id="keepsignedin"
                        />
                        <label htmlFor="keepsignedin">Keep me signed in</label>
                      </span>
                      <Link to="/forgot">I forgot my password</Link>
                    </div>

                    <button type="submit" className="logindetails--button">
                      LOGIN
                    </button>
                  </form>
                </div>

                <Link to="/register" className="logindetails__signuplink">
                  Don’t have an account? Click here to sign up
                </Link>

                <div className="wrapper">
                  <div className="badge">OR</div>
                </div>

                <div className="social-login">
                  <a href="#" class="fb btn-social">
                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                  </a>

                  <a href="#" class="google btn-social">
                    <i class="fa fa-google fa-fw"></i> Login with Google+
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="loginbox__right"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
