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
    return(
        <section className="content login">
            yo
        </section>
    )
}