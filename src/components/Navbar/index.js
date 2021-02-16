import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/images/logo.png";

import hamburger from "../../assets/images/navbar/hamburger.png";
import closeicon from "../../assets/images/navbar/close.png";
import searchicon from "../../assets/images/navbar/navbar-icons/search.png";
import hearticon from "../../assets/images/navbar/navbar-icons/heart.png";
import carticon from "../../assets/images/navbar/navbar-icons/cart.png";
import usericon from "../../assets/images/navbar/navbar-icons/user.png";

/* Sidebar Imports */
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

  const [navbarHeigt, setnavbarHeigt] = useState(110);

  const [searchText, setSearchText] = useState("");

  const changeNavbar = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    var mainNav = document.getElementsByClassName("main-nav")[0];

    const urlLocation = window.location.pathname;

    if (urlLocation === "/") {
      if (window.pageYOffset < 80) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "blur(0px)";
        mainNav.classList.remove("scrolled");
        setnavbarHeigt(110);

        if (
          !document
            .getElementsByClassName("navbar__searchdiv")[0]
            .classList.contains("hide")
        ) {
          navbar.style.backgroundColor = "#fff";
        }
      } else {
        if (
          document
            .getElementsByClassName("navbar__searchdiv")[0]
            .classList.contains("hide")
        ) {
          navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
          navbar.style.backdropFilter = "blur(20px)";
          mainNav.classList.add("scrolled");
          setnavbarHeigt(71);
        } else {
          navbar.style.backgroundColor = "#fff";
        }
      }
    }
  };

  useEffect(() => {
    const urlLocation = window.location.pathname;

    if (urlLocation !== "/") {
      var navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.backgroundColor = "#fff";
      setnavbarHeigt(71);
    } else {
      document.getElementsByClassName("navbar")[0].style.border = "none";
      window.addEventListener("scroll", changeNavbar);
      setnavbarHeigt(110);
    }
  }, [window.location.pathname]);

  function changeNavbarColor() {
    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.backgroundColor = "#fff";
  }

  function resetNavbarColor() {
    var navbar = document.getElementsByClassName("navbar")[0];

    if (window.location.pathname !== "/") {
      navbar.style.backgroundColor = "#fff";
      document.body.style.opacity = "none";
    } else {
      if (window.pageYOffset > 80) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        navbar.style.backdropFilter = "blur(20px)";
        document.body.style.opacity = "none";
      }

      if (
        !document
          .getElementsByClassName("navbar__searchdiv")[0]
          .classList.contains("hide")
      ) {
        navbar.style.backgroundColor = "#fff";
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "blur(0px)";
      }
    }
  }

  function opensearchdiv() {
    document
      .getElementsByClassName("navbar__searchdiv")[0]
      .classList.remove("hide");

    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.backgroundColor = "#fff";
  }

  function closesearchdiv() {
    document
      .getElementsByClassName("navbar__searchdiv")[0]
      .classList.add("hide");

    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.location.pathname !== "/") {
      navbar.style.backgroundColor = "#fff";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";

      if (window.pageYOffset < 80) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "blur(0px)";

        if (
          !document
            .getElementsByClassName("navbar__searchdiv")[0]
            .classList.contains("hide")
        ) {
          navbar.style.backgroundColor = "#fff";
        }
      } else {
        if (
          document
            .getElementsByClassName("navbar__searchdiv")[0]
            .classList.contains("hide")
        ) {
          navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        } else {
          navbar.style.backgroundColor = "#fff";
        }
      }
    }
  }

  function openSideMenu() {
    document.getElementById("menu").style.width = "100%";
  }

  function closeSideMenu() {
    setCurrentSidebarScreen("home");
    document.getElementById("menu").style.width = "0%";
  }

  function searchProducts(e) {
    e.preventDefault();
    history.push({
      pathname: "/products",
      search: `?search=${searchText}`,
    });

    setSearchText("");

    closesearchdiv();
  }

  return (
    <>
      <div
        style={{
          height: navbarHeigt + "px",
        }}
        className="navbar flex"
      >
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
            <img
              className={navbarHeigt > 80 ? "logo-large" : "logo"}
              src={logo}
              alt="strides"
            />
          </Link>
          <nav className="nav">
            <ul className="flex">
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link className="hovermenu__listitems__home" to="/">
                  Home
                </Link>
              </li>
              <li className="main-nav--listitem">
                <div
                  className="dropdown-shop"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/my-account">Shop</Link>
                  <Shop height={navbarHeigt} />
                </div>
              </li>
              <li className="main-nav--listitem">
                <div
                  className="dropdown-brand"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/">Brands</Link>
                  <Brand height={navbarHeigt} />
                </div>
              </li>
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">Collections</Link>
              </li>
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">Discover</Link>
              </li>
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">Ethnic</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="extra-options">
          <ul className="flex">
            <li>
              <Link
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
                to={userLogin.userInfo ? "/my-account" : "/login"}
              >
                <img
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  src={usericon}
                  alt="user"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <img
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  src={hearticon}
                  alt="heart"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <img
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  src={carticon}
                  alt="cart"
                />
              </Link>
            </li>
            <li onClick={opensearchdiv}>
              <Link
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <img
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  src={searchicon}
                  alt="search"
                />
              </Link>
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

      <div
        style={{
          top: navbarHeigt + "px",
        }}
        className="navbar__searchdiv hide"
      >
        <form onSubmit={searchProducts}>
          <div className="search__div flex">
            <input
              type="text"
              placeholder="Search Items"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="searchIcon">
              <button onClick={searchProducts}>Search</button>
            </div>

            <div className="closeIcon">
              <img
                onClick={closesearchdiv}
                className="closeIcon"
                src={closeicon}
                alt="closeicon"
              />
            </div>
          </div>
        </form>
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
          <Search
            closeSideMenu={closeSideMenu}
            setCurrentSidebarScreen={setCurrentSidebarScreen}
          />
        )}

        {/* Bottom Area of the Sidebar */}
        <BottomBar setCurrentSidebarScreen={setCurrentSidebarScreen} />
      </div>
    </>
  );
};

export default Index;
