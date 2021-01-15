import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
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
              <Link to="">Profile Information</Link>
            </li>
            <li>
              <Link to="">Manage Addresses</Link>
            </li>
            <li>
              <Link to="">PAN Card Information</Link>
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
          <Link className="flex flex usersidebar__heading">
            <p className="usersidebar__heading--text">LOGOUT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
