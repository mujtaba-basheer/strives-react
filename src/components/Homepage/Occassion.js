import React from "react";
import { Link } from "react-router-dom";

import { occasions } from "./data";

const Occassion = () => {
  return (
    <section className="occassion">
      <div className="occassion__title section-title">Shop By Occassion</div>

      <div className="occassion__grid">
        {occasions.map((occassion) => (
          <div className="occassion__grid--container">
            <Link to={occassion.url}>
              <div className="image">
                <img loading="lazy" src={occassion.img} alt={occassion.text} />
              </div>
            </Link>
            <Link to={occassion.url} className="text">
              {occassion.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Occassion;
