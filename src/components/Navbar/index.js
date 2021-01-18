import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/images/logo.png";

import hamburger from "../../assets/images/navbar/hamburger.png";
import closeicon from "../../assets/images/navbar/close.png";
import Home from "./Sidebar/Home";
import BottomBar from "./Sidebar/BottomBar";
import Search from "./Sidebar/Search";
import Account from "./Sidebar/Account";


/* Navbar Hovermenu DIVS */
import Shop from "./NavbarData/Shop";
import Brand from "./NavbarData/Brand";

const Index = () => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);

  const [currentSidebarScreen, setCurrentSidebarScreen] = useState("home");

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
    setCurrentSidebarScreen("home");
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

  /* console.log(currentSidebarScreen); */

  return (
    <>
      <div className="navbar flex">
        <img
          className="logo mobile"
          style={{
            display: "none",
          }}
          onClick={() => history.push("/")}
          src={logo}
          alt="strides"
        />

        <div className="main-nav flex">
          <Link to="/">
            <img className="logo" src={logo} alt="strides" />
          </Link>
          <nav className="nav">
            <ul className="flex">
              <li>
                <Link className="hovermenu__listitems__home" to="/">
                  Home
                </Link>
              </li>
              <li className="hovermenu__listitems--shop">
                <div className="dropdown-shop">
                  <Link to="/my-account">Shop</Link>
                  <Shop />
                </div>
              </li>
              <li className="hovermenu__listitems--brand">
                <div className="dropdown-brand">
                <Link to="/">Brands</Link>
                <Brand />
                </div>
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
              <Link to={userLogin.userInfo ? "/my-account" : "/login"}>
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

      

      <div className="navbar__searchdiv hide">
        <div className="search__div flex">
          <input type="text" placeholder="Search Items" />
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
            <Link onClick={closeSideMenu}>
              <img className="logo" src={logo} alt="logo" />
            </Link>
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

        {currentSidebarScreen === "home" && <Home />}

        {/* Account */}

        {currentSidebarScreen === "sidebaraccount" && (
          <Account closeSideMenu={closeSideMenu} />
        )}

        {/* Search */}

        {currentSidebarScreen === "search" && (
          <Search setCurrentSidebarScreen={setCurrentSidebarScreen} />
        )}

        {/* Bottom Area of the Sidebar */}
        <BottomBar setCurrentSidebarScreen={setCurrentSidebarScreen} />
      </div>
    </>
  );
};

export default Index;
