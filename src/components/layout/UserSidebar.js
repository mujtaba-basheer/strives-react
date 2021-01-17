import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const UserSidebar = ({ selected }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  /* console.log(selected); */

  return (
    <div className="usersidebarbackground">
      <div className="usersidebar">
        <div className="myorders">
          <Link className="flex usersidebar__heading">
            <i class="fas fa-box-open usersidebar__heading--icon"></i>
            <p className="usersidebar__heading--text">MY ORDERS</p>
          </Link>
        </div>
        <div className="accountsettings">
          <span className="flex flex usersidebar__heading">
            <i class="fas fa-user-circle usersidebar__heading--icon"></i>
            <p className="usersidebar__heading--text">ACCOUNT SETTINGS</p>
          </span>
          <ul>
            <li>
              <Link
                to="/my-account"
                className={selected === "MyAccount" ? "active" : ""}
              >
                Profile Information
              </Link>
            </li>
            <li>
              <Link
                to="/manage-address"
                className={selected === "ManageAddress" ? "active" : ""}
              >
                Manage Addresses
              </Link>
            </li>
            <li>
              <Link
                to="change-password"
                className={selected === "ChangePassword" ? "active" : ""}
              >
                Change Password
              </Link>
            </li>
          </ul>
        </div>
        <div className="mystuff">
          <span className="flex flex usersidebar__heading">
            <p className="usersidebar__heading--text">MY STUFF</p>
          </span>
          <ul>
            <li>
              <Link to="">My Coupons</Link>
            </li>
            <li>
              <Link to="">My Reviews & Ratings</Link>
            </li>
            <li>
              <Link to="">All Notifications</Link>
            </li>
            <li>
              <Link to="">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="logout">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout());
              history.push("/");
            }}
            className="flex flex usersidebar__heading"
          >
            <p className="usersidebar__heading--text">LOGOUT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
