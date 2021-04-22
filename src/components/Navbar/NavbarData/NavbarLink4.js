import React from "react";
import { Link } from "react-router-dom";

import navbar1 from "../../../assets/images/navbar/navbar1.png";
import navbar2 from "../../../assets/images/navbar/navbar2.png";
import navbar3 from "../../../assets/images/navbar/navbar3.png";

import { nav_data } from "./data";

/* console.log(nav_data[1]) */

const NavbarLink4 = ({ height }) => {
  return (
    <div
      style={{
        top: height + "px",
      }}
      className="navbar__hovermenu shop flex"
    >
      <div className="navbar__hovermenu__options flex">
        {nav_data[3].sub_categories.map((navdata) => (
          <div className="hovermenu__listitems">
            <h3>{navdata.name}</h3>
            <ul>
              {navdata.values.map((subnavdata, index) => (
                index === 0 ? (
                  <li>
                    <Link to={`/category/602130d9ff106c000451ba05`}>
                      {subnavdata}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to={`/category/${nav_data[0]._id}/${subnavdata}`}>
                      {subnavdata}
                    </Link>
                  </li>
                )
              ))}

              {/* <li>
                <Link to="/">All Sets</Link>
              </li>
              <li>
                <Link to="/">Lehenga</Link>
              </li>
              <li>
                <Link to="/">Salwar Kameez</Link>
              </li>
              <li>
                <Link to="/">Gown Sets</Link>
              </li> */}
            </ul>
          </div>
        ))}
      </div>
      <div className="hovermenu__image">
        <img src={navbar1} alt="nav img" />
        <img src={navbar2} alt="nav img" />
        <img src={navbar3} alt="nav img" />
      </div>
    </div>
  );
};

export default NavbarLink4;
