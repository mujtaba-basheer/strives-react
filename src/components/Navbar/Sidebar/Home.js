import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { nav_data } from "../NavbarData/data";

const Home = () => {
  useEffect(() => {
    const accordianItemHeaders = document.querySelectorAll(
      ".accordian-item-header"
    );
    accordianItemHeaders.forEach((accordianItemHeader) => {
      accordianItemHeader.addEventListener("click", () => {
        accordianItemHeaders.forEach((accordianItemHeader) => {
          if (accordianItemHeader.classList.contains("active")) {
            accordianItemHeader.classList.remove("active");
          }
        });
        accordianItemHeader.classList.toggle("active");
      });
    });
  });

  return (
    <div className="accordian">
      <div className="accordian-item">
        <div className="accordian-item-header active">Lehengas</div>
        <div className="accordian-item-body">
          {nav_data[0].sub_categories.map((navdata) => (
            <>
              <h3>{navdata.name}</h3>
              <ul className="flex">
                {navdata.values.map((subnavdata) => (
                  <li>
                    <Link to={`/category/${nav_data[0]._id}/${subnavdata}`}>
                      {subnavdata}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Salwar Kameez</div>
        <div className="accordian-item-body">
          {nav_data[1].sub_categories.map((navdata) => (
            <>
              <h3>{navdata.name}</h3>
              <ul className="flex">
                {navdata.values.map((subnavdata) => (
                  <li>
                    <Link to={`/category/${nav_data[0]._id}/${subnavdata}`}>
                      {subnavdata}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Gowns</div>
        <div className="accordian-item-body">
          {nav_data[2].sub_categories.map((navdata) => (
            <>
              <h3>{navdata.name}</h3>
              <ul className="flex">
                {navdata.values.map((subnavdata) => (
                  <li>
                    <Link to={`/category/${nav_data[0]._id}/${subnavdata}`}>
                      {subnavdata}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Sets</div>
        <div className="accordian-item-body">
          {nav_data[3].sub_categories.map((navdata) => (
            <>
              <h3>{navdata.name}</h3>
              <ul className="flex">
                {navdata.values.map((subnavdata) => (
                  <li>
                    <Link to={`/category/${nav_data[0]._id}/${subnavdata}`}>
                      {subnavdata}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
