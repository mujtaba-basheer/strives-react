import React from "react";

import { occasions } from "./data";

const Occassion = () => {
  return (
    <section className="occassion">
      <div className="occassion__title section-title">Shop By Occassion</div>

      <div className="occassion__grid">
        {occasions.map((occassion) => (
          <div className="occassion__grid--container">
            <div className="image">
              <img src={occassion.img} alt={occassion.text} />
            </div>
            <p className="text">{occassion.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Occassion;
