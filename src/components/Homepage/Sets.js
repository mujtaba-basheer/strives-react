import React from "react";

import { setsdata } from "./data";

const Sets = () => {
  return (
    <section className="occassion">
      <div className="occassion__title section-title">Shop By Sets</div>

      <div className="occassion__grid">
        {setsdata.map((occassion) => (
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

export default Sets;