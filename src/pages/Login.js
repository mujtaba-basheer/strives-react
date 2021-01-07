import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                <input type="text" />
                <input type="text" />

                <input type="radio" name="" id="" />
                <label htmlFor="chekc">Keep me signed in</label>

                <a href="">I forgot my password</a>
              </div>

              <button>LOGIN</button>

              <button>google</button>
              <button>facebook</button>
            </div>
          </div>
        </div>

        <div className="loginbox__right"></div>
      </div>
    </section>
  );
}
