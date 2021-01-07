import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import img from "../../assets/images/NAY047.png";
import hamburger from "../../assets/images/navbar/hamburger.png";
import closeicon from "../../assets/images/navbar/close.png";
import { desk_home_data } from "./NavbarData";
import { Link } from "react-router-dom";

const Index = () => {
  const [hoverarray, setHoverarray] = useState([]);

  const changeNavbar = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    var mainNav = document.getElementsByClassName("main-nav")[0];
    
    if (window.pageYOffset < 80) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "blur(0px)";
      mainNav.classList.remove("scrolled");
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      navbar.style.backdropFilter = "blur(20px)";
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

  function openSideMenu() {
    document.getElementById("menu").style.width = "100%";
  }

  function closeSideMenu() {
    document.getElementById("menu").style.width = "0%";
  }

  function toggleSidebarSearch() {
    var accordian = document.getElementsByClassName("accordian")[0];
    var searchdiv = document.getElementsByClassName("sidebar__searchdiv")[0];
    accordian.classList.add("hide");
    searchdiv.classList.remove("hide");
  }

  function toggleSidebarSearchClose() {
    var accordian = document.getElementsByClassName("accordian")[0];
    var searchdiv = document.getElementsByClassName("sidebar__searchdiv")[0];
    accordian.classList.remove("hide");
    searchdiv.classList.add("hide");
  }

  return (
    <>
      <div className="navbar flex">
        <Link to="/">
          <img
            className="logo mobile"
            style={{
              display: "none",
            }}
            src={logo}
            alt="strides"
          />
        </Link>

        <div className="main-nav flex">
          <Link to="/">
            <img className="logo" src={logo} alt="strides" />
          </Link>
          <nav className="nav">
            <ul className="flex">
              <li>
                <Link
                  onMouseOver={showHoverMenu}
                  onMouseLeave={removeHoverMenu}
                  className="hovermenu__listitems__home"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Brands</Link>
              </li>
              <li>
                <Link to="/">Collections</Link>
              </li>
              <li>
                <Link to="/">Discover</Link>
              </li>
              <li>
                <Link to="/">Ethnic</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="extra-options">
          <ul className="flex">
            <li>
              <Link to="/login">
                <i className="far fa-user-circle"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li onClick={opensearchdiv}>
              <i class="fas fa-search"></i>
            </li>
          </ul>
        </div>
        <button
          className="hamburger-menu mobile"
          style={{
            display: "none",
          }}
        >
          <img onClick={openSideMenu} src={hamburger} alt="hamburger" />
        </button>
      </div>
      <div className="navbar__hovermenu hide">
        <div className="hovermenu flex">
          <div className="hovermenu__listitems">
            <ul className="flex">
              {hoverarray.length > 0 &&
                hoverarray.map((h) => (
                  <li>
                    <Link to="/">{h}</Link>
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
      <div
        id="menu"
        className="sidemenu"
        style={{
          width: "0%",
        }}
      >
        {/* Top Area of the Sidebar */}
        <ul className="flex top-area">
          <li>
            <img
              className="logo"
              onClick={closeSideMenu}
              src={logo}
              alt="logo"
            />
          </li>
          <li>
            <img
              className="closeicon"
              onClick={closeSideMenu}
              src={closeicon}
              alt="close"
            />
          </li>
        </ul>

        {/* Accordian */}

        <div className="accordian">
          <div className="accordian-item">
            <div className="accordian-item-header active">Home</div>
            <div className="accordian-item-body">
              <ul className="flex">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div className="accordian-item">
            <div className="accordian-item-header">Shop</div>
            <div className="accordian-item-body">
              <ul className="flex">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div className="accordian-item">
            <div className="accordian-item-header">Brands</div>
            <div className="accordian-item-body">
              <ul className="flex">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div className="accordian-item">
            <div className="accordian-item-header">Collections</div>
            <div className="accordian-item-body">
              <ul className="flex">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex sidebar__searchdiv hide">
          <img
            className="closeIcon"
            onClick={toggleSidebarSearchClose}
            src={closeicon}
            alt="closeicon"
          />
          <input type="text" placeholder="Search Items" />
        </div>

        {/* Bottom Area of the Sidebar */}
        <ul className="flex bottom-area">
          <li>
            <Link to="/">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <Link to="login">
              <i className="far fa-user-circle"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          <li onClick={toggleSidebarSearch}>
            <Link to="/">
              <i class="fas fa-search"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
