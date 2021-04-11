import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";

import logo from "../../assets/images/logo.png";

import search from "./icons/search.svg";
import cart from "./icons/cart.svg";
import heart from "./icons/heart.svg";
import user from "./icons/user.svg";

import { FaRegUserCircle } from "react-icons/fa";
import { BsHeart, BsSearch } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import hamburger from "../../assets/images/navbar/hamburger.png";
import closeicon from "../../assets/images/navbar/close.png";
/* import searchicon from "../../assets/images/navbar/navbar-icons/search.png";
import hearticon from "../../assets/images/navbar/navbar-icons/heart.png";
import carticon from "../../assets/images/navbar/navbar-icons/cart.png";
import usericon from "../../assets/images/navbar/navbar-icons/user.png"; */

/* Sidebar Imports */
import Home from "./Sidebar/Home";
import BottomBar from "./Sidebar/BottomBar";
import Search from "./Sidebar/Search";
import Account from "./Sidebar/Account";

/* Navbar Hovermenu DIVS */
import Shop from "./NavbarData/Shop";
import Brand from "./NavbarData/Brand";

import { nav_data } from "./NavbarData/data";
import NavbarLink1 from "./NavbarData/NavbarLink1";
import NavbarLink3 from "./NavbarData/NavbarLink3";
import NavbarLink4 from "./NavbarData/NavbarLink4";

const Index = () => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);

  const [currentSidebarScreen, setCurrentSidebarScreen] = useState("home");

  const [navbarHeigt, setnavbarHeigt] = useState(110);

  const [searchText, setSearchText] = useState("");

  const [cartLengthValue, setCartLengthValue] = useState(0);
  const [wishlistLengthValue, setWishlistLengthValue] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { favItems } = useSelector((state) => state.fav);

  /* const [numberStyles, setNumberStyles] = useState({
    top: "-18px",
    right: "-21px",
  }); */

  /* const [singleNumberStyles, setSingleNumberStyles] = useState({
    top: "-14px",
    right: "-21px",
  }); */

  const [cartValueIconStyles, setCartValueIconStyles] = useState({
    top: "-11px",
    right: "-21px",
  });

  const [WishlistValueIconStyles, setWishlistValueIconStyles] = useState({
    top: "-16px",
    right: "-21px",
  });

  /* const singleNumberStyles = {
    top: "-18px",
    right: "-21px",
  }; */

  /* const [doubleNumberStyles, setDoubleNumberStyles] = useState({
    top: "-14px",
    right: "-21px",
  }); */

  /* const doubleNumberStyles = {
    top: "-14px",
    right: "-23px",
  }; */

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

    if (cartItems) setCartLengthValue(cartItems.length);
    if (favItems) setWishlistLengthValue(favItems.length);

    if (cartLengthValue > 9) {
      setCartValueIconStyles({
        top: "-12px",
        right: "-21px",
      });
    } else if (cartLengthValue < 10) {
      setCartValueIconStyles({
        top: "-11px",
        right: "-16px",
      });
    }

    if (wishlistLengthValue > 9) {
      setWishlistValueIconStyles({
        top: "-17px",
        right: "-21px",
      });
    } else if (wishlistLengthValue < 10) {
      setWishlistValueIconStyles({
        top: "-15px",
        right: "-15px",
      });
    }

    if (urlLocation !== "/") {
      var navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.backgroundColor = "#fff";
      setnavbarHeigt(71);
    } else {
      document.getElementsByClassName("navbar")[0].style.border = "none";
      window.addEventListener("scroll", changeNavbar);
      setnavbarHeigt(110);
    }
  }, [cartItems, favItems]);

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
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        navbar.style.backdropFilter = "blur(20px)";
      }

      if (
        !document
          .getElementsByClassName("navbar__searchdiv")[0]
          .classList.contains("hide")
      ) {
        navbar.style.backgroundColor = "#fff";
      } else {
        /* navbar.style.backgroundColor = "#fff"; */
        navbar.style.backdropFilter = "blur(20px)";

        if (window.pageYOffset < 80) {
          navbar.style.backgroundColor = "transparent";
          navbar.style.backdropFilter = "blur(0px)";
        }
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
          src="https://strives.s3.ap-south-1.amazonaws.com/assets/99605b7f-5b86-4c95-a3bd-f74704579ebb.png"
          alt="strides"
        />

        <div className="main-nav flex">
          <Link to="/">
            <img
              className={navbarHeigt > 80 ? "logo-large" : "logo"}
              src="https://strives.s3.ap-south-1.amazonaws.com/assets/99605b7f-5b86-4c95-a3bd-f74704579ebb.png"
              alt="strides"
            />
          </Link>
          <nav className="nav">
            <ul className="flex">
              {/* <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link
                  className="hovermenu__listitems__home"
                  to="/category/60212edfff106c000451ba02"
                >
                  Lehengas
                </Link>
              </li> */}
              <li className="main-nav--listitem">
                <div
                  className="dropdown-shop"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/category/60212edfff106c000451ba02">Lehengas</Link>
                  <NavbarLink1 height={navbarHeigt} />
                </div>
              </li>
              <li className="main-nav--listitem">
                <div
                  className="dropdown-shop"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/category/60212faaff106c000451ba03">
                    Salwar Kameez
                  </Link>
                  <Shop height={navbarHeigt} />
                </div>
              </li>
              <li className="main-nav--listitem">
                <div
                  className="dropdown-shop"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/category/6021307bff106c000451ba04">Gowns</Link>
                  <NavbarLink3 height={navbarHeigt} />
                </div>
              </li>
              {/* <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">Sets</Link>
              </li> */}
              <li className="main-nav--listitem">
                <div
                  className="dropdown-shop"
                  onMouseOver={changeNavbarColor}
                  onMouseLeave={resetNavbarColor}
                >
                  <Link to="/category/602130d9ff106c000451ba05">Sets</Link>
                  <NavbarLink4 height={navbarHeigt} />
                </div>
              </li>
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">New Arrivals</Link>
              </li>
              <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/collections">Collections</Link>
              </li>
              {/* <li
                className="main-nav--listitem"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <Link to="/">Ethnic</Link>
              </li> */}
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
                <img src={user} alt="user" />
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
                className="flex"
              >
                <img src={heart} alt="heart" />
                {favItems && favItems.length > 0 && (
                  <p
                    style={WishlistValueIconStyles}
                    className="number superscript"
                  >
                    {favItems.length}
                  </p>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <img src={cart} alt="cart" />
                {cartItems && cartItems.length > 0 && (
                  <p style={cartValueIconStyles} className="number superscript">
                    {cartItems.length}
                  </p>
                )}
              </Link>
            </li>
            <li onClick={opensearchdiv}>
              <Link
                onMouseOver={changeNavbarColor}
                onMouseLeave={resetNavbarColor}
              >
                <img src={search} alt="search" />
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
            <p onClick={closeSideMenu}>
              <img className="logo" src="https://strives.s3.ap-south-1.amazonaws.com/assets/99605b7f-5b86-4c95-a3bd-f74704579ebb.png" alt="logo" />
            </p>
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

        {currentSidebarScreen === "home" && (
          <Home closeSideMenu={closeSideMenu} />
        )}

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
