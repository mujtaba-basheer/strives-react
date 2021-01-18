import React, { useEffect } from "react";

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
        <div className="accordian-item-header">Shop</div>
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

export default Home;
