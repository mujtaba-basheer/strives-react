import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { nav_data } from "../NavbarData/data";

const Home = ({ closeSideMenu }) => {
  let history = useHistory();

  const [currentModal, setCurrentModal] = useState("");

  const openModal = (e) => {
    if (e.target.classList[1] === "active") {
      setCurrentModal("");
    } else {
      setCurrentModal(e.target.innerText);
    }
  };

  function closeOnClick(data1, data2) {
    closeSideMenu();
    if (data1 === "") {
      history.push(`/category/${data2}`);
    } else {
      history.push(`/category/${data1}/${data2}`);
    }
  }

  return (
    <>
      <div className="accordian">
        <div className="accordian-item" onClick={openModal}>
          <div
            className={
              currentModal === "Lehengas"
                ? "accordian-item-header active"
                : "accordian-item-header"
            }
          >
            Lehengas
          </div>
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
        <div className="accordian-item" onClick={openModal}>
          <div
            className={
              currentModal === "Salwar Kameez"
                ? "accordian-item-header active"
                : "accordian-item-header"
            }
          >
            Salwar Kameez
          </div>
          <div className="accordian-item-body">
            {nav_data[1].sub_categories.map((navdata) => (
              <>
                <h3>{navdata.name}</h3>
                <ul className="flex">
                  {navdata.values.map((subnavdata, index) =>
                    index === 0 ? (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick("", "60212faaff106c000451ba03")
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    ) : (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick(nav_data[0]._id, subnavdata)
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </>
            ))}
          </div>
        </div>
        <div className="accordian-item" onClick={openModal}>
          <div
            className={
              currentModal === "Gowns"
                ? "accordian-item-header active"
                : "accordian-item-header"
            }
          >
            Gowns
          </div>
          <div className="accordian-item-body">
            {nav_data[2].sub_categories.map((navdata) => (
              <>
                <h3>{navdata.name}</h3>
                <ul className="flex">
                  {navdata.values.map((subnavdata, index) =>
                    index === 0 ? (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick("", "6021307bff106c000451ba04")
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    ) : (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick(nav_data[0]._id, subnavdata)
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </>
            ))}
          </div>
        </div>
        <div className="accordian-item" onClick={openModal}>
          <div
            className={
              currentModal === "Sets"
                ? "accordian-item-header active"
                : "accordian-item-header"
            }
          >
            Sets
          </div>
          <div className="accordian-item-body">
            {nav_data[3].sub_categories.map((navdata) => (
              <>
                <h3>{navdata.name}</h3>
                <ul className="flex">
                  {navdata.values.map((subnavdata, index) =>
                    index === 0 ? (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick("", "602130d9ff106c000451ba05")
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    ) : (
                      <li>
                        <p
                          onClick={() =>
                            closeOnClick(nav_data[0]._id, subnavdata)
                          }
                        >
                          {subnavdata}
                        </p>
                      </li>
                    )
                  )}

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
