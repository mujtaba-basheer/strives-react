import React from "react";
import { Link } from "react-router-dom";

import { feature } from "./data";

const Feature = () => {
  return (
    <section className="feature flex">
      <div className="feature__container">
        <div className="image">
          <img src={feature.img.main} alt="feature" />
          <div className="border"></div>
        </div>
      </div>
      <div className="feature__details">
        <p className="heading">{feature.info.text}</p>
        <p className="details">{feature.info.details}</p>
        <p className="subtext">{feature.info.subtext}</p>
        <div className="divider"></div>

        <div className="feature__cta">
          <Link to="/collections/606c302a4948870004ce9931">
            <span className="feature__cta--text">learn more</span>
            <span className="feature__cta--arr">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
