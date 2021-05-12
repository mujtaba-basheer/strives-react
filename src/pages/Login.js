/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { getCart, getFav } from "../redux/actions/cartActions";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alert from "../components/Alert/Alert";

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error: loginError } = userLogin;

  useEffect(() => {
    document.title = "Login";

    if (userInfo) {
      dispatch(getCart());
      dispatch(getFav());
      history.push("/");
    }
  }, [userInfo, history, dispatch]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <>
      <Navbar />

      <section className="content">
        <div className="loginbox flex">
          <div className="yellow-design"></div>
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
                <div>
                  {loginError && (
                    <Alert
                      type="danger"
                      fullWidth
                      background="true"
                      text={loginError}
                    />
                  )}
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
                      <div className="alert error mb-1">
                        {errors.email.message}
                      </div>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      ref={register({
                        required: {
                          value: true,
                          message: "Password cannot be empty",
                        },
                      })}
                    />
                    {errors.password && (
                      <div class="alert error mb-1">
                        {errors.password.message}
                      </div>
                    )}
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
