import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  useEffect(() => {
    const accordianItemHeaders = document.querySelectorAll(
      ".accordian-item-header"
    );
    /* console.log(accordianItemHeaders); */
    accordianItemHeaders.forEach((accordianItemHeader) => {
      accordianItemHeader.addEventListener("click", () => {
        /* console.log("clicked"); */
        accordianItemHeader.classList.toggle("active");
      });
    });
  });

  return (
    <>
      <ul className="sidebar-account">
        <li>
          <Link>My Orders</Link>
        </li>

        <li>
          <div className="accordian">
            <div className="accordian-item">
              <div className="accordian-item-header">Account Settings</div>
              <div className="accordian-item-body">
                <ul className="flex">
                  <li>
                    <Link to="/my-account">Profile Information</Link>
                  </li>
                  <li>
                    <Link to="/manage-address">Manage Address</Link>
                  </li>
                  <li>
                    <Link to="/change-password">Change Password</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link>My Stuff</Link>
        </li>

        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </>
  );
};

export default Account;
