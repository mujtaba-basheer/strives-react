import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";

import myordersicon from "../../assets/images/icons/myorders.png";
import usericon from "../../assets/images/icons/user.png";

const UserSidebar = ({ selected }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="usersidebarbackground">
      <div className="usersidebar">
        <div className="myorders">
          <Link className="flex usersidebar__heading">
            <img
              src={myordersicon}
              style={{
                width: "30px",
                height: "30px",
              }}
              alt="myorders"
            />
            <p className="usersidebar__heading--text--margin">MY ORDERS</p>
          </Link>
        </div>
        <div className="accountsettings">
          <span className="flex usersidebar__heading">
            <img
              src={usericon}
              style={{
                width: "26px",
                height: "26px",
              }}
              alt="user"
            />
            <p className="usersidebar__heading--text--margin">
              ACCOUNT SETTINGS
            </p>
          </span>
          <ul>
            <li className={selected === "MyAccount" ? "active" : ""}>
              <Link to="/my-account">Profile Information</Link>
            </li>
            <li className={selected === "ManageAddress" ? "active" : ""}>
              <Link to="/manage-address">Manage Addresses</Link>
            </li>
            <li className={selected === "ChangePassword" ? "active" : ""}>
              <Link to="change-password">Change Password</Link>
            </li>
          </ul>
        </div>
        <div className="mystuff">
          <span className="flex usersidebar__heading">
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
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout());
              history.push("/");
            }}
            className="flex usersidebar__heading"
          >
            <p className="usersidebar__heading--text">LOGOUT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
