import React from "react";
import { policies, social, contact, myaccount, followuson } from "./data";

import logo from "../../assets/images/footer/logo.png";
import logo_big from "../../assets/images/footer/logo_big.png";
import usp from "../Homepage/images/usp.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__policies about">
          <div className="footer__policies--heading">About The Strives</div>
          <p className="footer-text">
            At The Strives we sell amazing products, Our Hand Picked Products
            are Best In Market. Need Anything Cool, Start Shopping with Us. We
            are Best Online Store in the market.
          </p>

          <div className="usp">
            <img src={usp} alt="usp" />
          </div>
        </div>

        <div className="footer__policies">
          <div className="footer__policies--heading">My Account</div>
          <ul className="footer__policies--list">
            {myaccount.map(({ text, url }, index) => (
              <Link
                to={`/${url}`}
                className="footer__policies--list-item"
                key={index}
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="footer__policies">
          <div className="footer__policies--heading">Policies</div>
          <ul className="footer__policies--list">
            {followuson.map(({ text, url }, index) => (
              <li className="footer__policies--list-item" key={index}>
                <Link className="footer__policies--list-item" to={url}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social">
          <div className="footer__social--heading">Follow us on</div>
          <ul className="footer__social--list">
            {social.map(({ icon, title, color }, index) => (
              <li className="footer__social--list-item" key={index}>
                <span
                  style={{ color }}
                  className="footer__social--list-item--icon"
                >
                  <i className={`fab fa-${icon}`}></i>
                </span>
                <span className="footer__social--list-item--text">{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contact">
          <div className="footer__contact--heading heading">
            Customer support
          </div>
          <ul className="footer__contact--list">
            {contact.map(
              ({ icon, text, color, subtext, type, href }, index) => (
                <li className="footer__contact--list-item" key={index}>
                  <span
                    style={{ backgroundColor: color }}
                    className="footer__contact--list-item--icon"
                  >
                    <i className={icon}></i>
                  </span>
                  <span className="footer__contact--list-item--text">
                    {text}
                  </span>
                  <span
                    className={"footer__contact--list-item--sub-text " + type}
                  >
                    {href ? <a href={href}>{subtext}</a> : `${subtext}`}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </footer>
      <div className="copyright">
        <p>
          Copyright 2021. All rights reserved by The Strives a unit of C.S
          venture PVT LTD.
        </p>
      </div>
    </>
  );
};

export default Index;
