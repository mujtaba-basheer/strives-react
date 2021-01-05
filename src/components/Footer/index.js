import React from "react";
import { policies, social, contact } from "./data";

import logo from "../../assets/images/footer/logo.png";
import logo_big from "../../assets/images/footer/logo_big.png";

const Index = () => {
  return (
    <footer className="footer">
      <div className="footer__policies">
        <div className="footer__policies--heading">Policies</div>
        <ul className="footer__policies--list">
          {policies.map(({ text, url }, index) => (
            <li className="footer__policies--list-item" key={index}>
              {text}
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
        <div className="footer__contact--heading">Customer support</div>
        <ul className="footer__contact--list">
          {contact.map(({ icon, text, color, subtext, type, href }, index) => (
            <li className="footer__contact--list-item" key={index}>
              <span
                style={{ backgroundColor: color }}
                className="footer__contact--list-item--icon"
              >
                <i className={icon}></i>
              </span>
              <span className="footer__contact--list-item--text">{text}</span>
              <span className={"footer__contact--list-item--sub-text " + type}>
                {href ? <a href={href}>{subtext}</a> : `${subtext}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <picture className="footer__logo">
        <source srcset={logo_big} media="(min-width: 1170px)" />
        <source srcset={logo} />
        <img className="feature__logo--img" alt="footer logo" src={logo} />
      </picture>
    </footer>
  );
};

export default Index;
