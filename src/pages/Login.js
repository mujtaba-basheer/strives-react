import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginArea />
      <Footer />
    </>
  );
};

export default Login;

function LoginArea() {
  return (
    <section className="content container">
      <div className="loginbox flex">
        <div className="loginbox__left">
          <div className="login-container">
            <div className="logindetails">
              <div className="logindetails__header">
                <p className="logindetails__header--headertext">
                  Welcome back,
                  <br />
                  please Sign In
                </p>
              </div>
              <div className="user-details">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <div className="extra-options">
                  <span className="flex">
                    <input
                      type="checkbox"
                      name="keepsignedin"
                      id="keepsignedin"
                    />
                    <label htmlFor="keepsignedin">Keep me signed in</label>
                  </span>
                  <Link>I forgot my password</Link>
                </div>
              </div>

              <button className="logindetails--button">LOGIN</button>

              <Link className="logindetails__signuplink">
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
  );
}
