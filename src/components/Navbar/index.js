import React from "react";

import logo from "../../assets/images/logo.png";

const index = () => {
  return (
    /* Navbar */
    <div className="navbar">
      <div className="container flex">
        <img src={logo} alt="strides" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="features.html">Features</a>
            </li>
            <li>
              <a href="docs.html">Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default index;
