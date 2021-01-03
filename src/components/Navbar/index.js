import React from "react";

import logo from "../../assets/images/logo.png";

const index = () => {
  /*const changeNavbar = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    var sticky = navbar.offsetTop;
    console.log(sticky, window.pageYOffset);
    if (window.pageYOffset === sticky) {
        console.log("true");
        navbar.classList.remove("sticky");
    } else {
        console.log("false");
        navbar.classList.add("sticky");

    }
  };

  window.addEventListener("scroll", changeNavbar); */

  return (
    /* Navbar */
    <div className="navbar flex">
      <div className="main-nav flex">
        <img className="logo" src={logo} alt="strides" />
        <nav>
          <ul className="flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Discover</a>
            </li>
            <li>
              <a href="">Ethnic</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="extra-options">
        <ul className="flex">
          <li>
            <a href="#">
              <i className="far fa-user-circle"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
