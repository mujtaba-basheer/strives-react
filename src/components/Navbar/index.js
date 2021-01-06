import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import img from "../../assets/images/NAY047.png";
import { desk_home_data } from "./NavbarData";

const Index = () => {
  const [hoverarray, setHoverarray] = useState([]);

  const changeNavbar = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    var mainNav = document.getElementsByClassName("main-nav")[0];
    var logo = document.getElementsByClassName("logo")[0];
    if (window.pageYOffset < 80) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "blur(0px)";
      mainNav.classList.add("mt-1");
      mainNav.classList.add("ml-5");
      logo.classList.add("mb-1");
      mainNav.classList.remove("scrolled");
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      navbar.style.backdropFilter = "blur(20px)";
      mainNav.classList.remove("mt-1");
      mainNav.classList.remove("ml-5");
      logo.classList.remove("mb-1");
      mainNav.classList.add("scrolled");
    }
  };

  window.addEventListener("scroll", changeNavbar);

  function showHoverMenu(e) {
    const name = e.target.innerHTML;
    console.log(e.target.innerHTML);
    if (name === "Home") {
      setHoverarray(desk_home_data);
    }

    document
      .getElementsByClassName("navbar__hovermenu")[0]
      .classList.remove("hide");
  }

  function removeHoverMenu() {
    setTimeout(() => {
      document
        .getElementsByClassName("navbar__hovermenu")[0]
        .classList.add("hide");
    }, 2000);
  }

  function opensearchdiv() {
    document
      .getElementsByClassName("navbar__searchdiv")[0]
      .classList.remove("hide");
  }

  function closesearchdiv() {
    document
      .getElementsByClassName("navbar__searchdiv")[0]
      .classList.add("hide");
  }

  return (
    <>
      <div className="navbar flex">
        <div className="main-nav flex">
          <img className="logo" src={logo} alt="strides" />
          <nav className="nav">
            <ul className="flex">
              <li>
                <a
                  onMouseOver={showHoverMenu}
                  onMouseLeave={removeHoverMenu}
                  className="hovermenu__listitems__home"
                  href="/"
                >
                  Home
                </a>
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
            <li onClick={opensearchdiv}>
              <i class="fas fa-search"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar__hovermenu hide">
        <div className="hovermenu flex">
          <div className="hovermenu__listitems">
            <ul className="flex">
              {hoverarray.length > 0 &&
                hoverarray.map((h) => (
                  <li>
                    <a href="">{h}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="hovermenu__image">
            <img src={img} alt="nav img" />
          </div>
        </div>
      </div>
      <div className="navbar__searchdiv hide">
        <div className="search__div flex">
          <input type="text" placeholder="type to search here" />
          <div className="searchIcon">
            <button>Search</button>
          </div>
          <div className="closeIcon">
            <i onClick={closesearchdiv} className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
