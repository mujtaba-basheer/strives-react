import React from "react";
import { Link } from "react-router-dom";

import navbar1 from "../../../assets/images/navbar/brands/navbar1.png";
import navbar2 from "../../../assets/images/navbar/brands/navbar2.png";
import navbar3 from "../../../assets/images/navbar/brands/navbar3.png";

const Brand = () => {
  return (
    <div className="navbar__hovermenu brand flex">
      <div className="navbar__hovermenu__options flex">
        <div className="hovermenu__listitems">
          <h3>Explore Collections</h3>
          <ul>
            <li>
              <Link>Bridal Lehengas</Link>
            </li>
            <li>
              <Link>Drape Lehengas</Link>
            </li>
            <li>
              <Link>Printed lehengas</Link>
            </li>
            <li>
              <Link>Bridesmaid Lehengas</Link>
            </li>
            <li>
              <Link>Jacket Lehengas</Link>
            </li>
            <li>
              <Link>Jacket Lehengas</Link>
            </li>
          </ul>
        </div>
        <div className="hovermenu__listitems">
          <h3>New Arrivals</h3>
          <div className="hovermenu_listitems--split flex">
            <ul className="mr-2">
              <li>
                <Link>Silk</Link>
              </li>
              <li>
                <Link>Raw Silk</Link>
              </li>
              <li>
                <Link>Velvet</Link>
              </li>
              <li>
                <Link>Cotton</Link>
              </li>
              <li>
                <Link>Georgette</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Silk</Link>
              </li>
              <li>
                <Link>Raw Silk</Link>
              </li>
              <li>
                <Link>Velvet</Link>
              </li>
              <li>
                <Link>Cotton</Link>
              </li>
              <li>
                <Link>Georgette</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hovermenu__listitems">
          <h3>Explore Collections</h3>
          <ul>
            <li>
              <Link>Bridal Lehengas</Link>
            </li>
            <li>
              <Link>Drape Lehengas</Link>
            </li>
            <li>
              <Link>Printed lehengas</Link>
            </li>
            <li>
              <Link>Bridesmaid Lehengas</Link>
            </li>
            <li>
              <Link>Jacket Lehengas</Link>
            </li>
            <li>
              <Link>Jacket Lehengas</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hovermenu__image">
        <img src={navbar1} alt="nav img" />
        <img src={navbar2} alt="nav img" />
        <img src={navbar3} alt="nav img" />
      </div>
    </div>
  );
};

export default Brand;
