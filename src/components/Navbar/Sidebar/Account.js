import React, { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    const accordianItemHeaders = document.querySelectorAll(
      ".accordian-item-header"
    );
    accordianItemHeaders.forEach((accordianItemHeader) => {
      accordianItemHeader.addEventListener("click", (event) => {
        console.log("clicked");
        accordianItemHeader.classList.toggle("active");
      });
    });
  });

  return (
    <div className="accordian">
      <div className="accordian-item">
        <div className="accordian-item-header active">Home</div>
        <div className="accordian-item-body">
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Account Settings</div>
        <div className="accordian-item-body">
          <ul className="flex">
            <li>Profile Information</li>
            <li>Manage Address</li>
            <li>Change Password</li>
          </ul>
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Brands</div>
        <div className="accordian-item-body">
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div className="accordian-item">
        <div className="accordian-item-header">Collections</div>
        <div className="accordian-item-body">
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
