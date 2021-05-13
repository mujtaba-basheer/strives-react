import React from "react";
import { Link } from "react-router-dom";

import { festivals } from "./data";

const Festivals = () => {
  return (
    <section className="occassion">
      <div className="occassion__title section-title">Shop By Festival</div>

      <div className="occassion__grid">
        {festivals.map((festivals) => (
          <div className="occassion__grid--container">
            <Link to={festivals.url}>
              <div className="image">
                <img loading="lazy" src={festivals.img} alt={festivals.text} />
              </div>
            </Link>
            <Link to={festivals.url} className="text">
              {festivals.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Festivals;
