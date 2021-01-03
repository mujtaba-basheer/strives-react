import React from "react";

import logo from "../../assets/images/logo.png";

const index = () => {
  const changeNavbar = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    var mainNav = document.getElementsByClassName("main-nav")[0];
    var logo = document.getElementsByClassName("logo")[0];
    if (window.pageYOffset < 80) {
      mainNav.classList.add("mt-1");
      mainNav.classList.add("ml-5");
      logo.classList.add("mb-1");
      mainNav.classList.remove("scrolled");
    } else {
      mainNav.classList.remove("mt-1");
      mainNav.classList.remove("ml-5");
      logo.classList.remove("mb-1");
      mainNav.classList.add("scrolled");
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="navbar flex">
      <div className="main-nav flex mt-1"> 
        <img className="logo mb-1" src={logo} alt="strides" />
        <nav className="nav">
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
          <li>
            <a href="">
              <i class="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
