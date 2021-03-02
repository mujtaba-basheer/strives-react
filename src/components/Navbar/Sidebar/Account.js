import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";

const Account = ({ closeSideMenu }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const accordianItemHeaders = document.querySelectorAll(
      ".accordian-item-header"
    );
    accordianItemHeaders.forEach((accordianItemHeader) => {
      accordianItemHeader.addEventListener("click", () => {
        accordianItemHeader.classList.toggle("active");
      });
    });
  });

  return (
    <>
      <ul className="sidebar-account">
        <li>
          <Link to="/my-orders">My Orders</Link>
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
          <Link
            onClick={(e) => {
              e.preventDefault();
              console.log("hi");
              dispatch(logout());
              history.push("/");
              closeSideMenu();
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Account;
