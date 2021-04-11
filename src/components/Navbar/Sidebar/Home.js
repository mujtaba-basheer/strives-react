import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { nav_data } from "../NavbarData/data";

const Home = ({ closeSideMenu }) => {
  let history = useHistory();

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

  function closeOnClick(data1, data2) {
    console.log(data1, data2);
    closeSideMenu();
    history.push(`/category/${data1}/${data2}`);
  }

  return (
    <>
      <div className="accordian">
        <div className="accordian-item">
          <div className="accordian-item-header">Lehengas</div>
          <div className="accordian-item-body">
            {nav_data[0].sub_categories.map((navdata) => (
              <>
                <h3>{navdata.name}</h3>
                <ul className="flex">
                  {navdata.values.map((subnavdata) => (
                    <li>
                      <p
                        onClick={() =>
                          closeOnClick(nav_data[0]._id, subnavdata)
                        }
                      >
                        {subnavdata}
                      </p>
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
                      <p
                        onClick={() =>
                          closeOnClick(nav_data[0]._id, subnavdata)
                        }
                      >
                        {subnavdata}
                      </p>
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
                      <p
                        onClick={() =>
                          closeOnClick(nav_data[0]._id, subnavdata)
                        }
                      >
                        {subnavdata}
                      </p>
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
                      <p
                        onClick={() =>
                          closeOnClick(nav_data[0]._id, subnavdata)
                        }
                      >
                        {subnavdata}
                      </p>
                    </li>
                  ))}

                  {/* <li>
                    <p>All Sets</p>
                  </li> */}
                </ul>
              </>
            ))}
          </div>
        </div>
        <ul>
          <li>
            <Link to="/products">New Arrivals</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
