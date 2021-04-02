import React, { useState } from "react";

import { themesAndOccasions } from "./data";

const Themes = () => {
  const [current, setCurrent] = useState(0);
  const slide = (type) => {
    switch (type) {
      case "next":
        setCurrent((current + 1) % 8);
        break;
      case "prev":
        if (current === 0) setCurrent(7);
        else setCurrent((current - 1) % 8);
        break;
      default:
        break;
    }
  };

  return (
    <section className="theme">
      <div className="theme__title section-title">Theme &amp; Occasions</div>
      <div className="theme__section theme__mobile">
        <div className="theme__nav">
          <span>
            <i
              onClick={(e) => {
                e.preventDefault();
                slide("prev");
              }}
              className="theme__nav--icon fas fa-angle-left"
            ></i>
          </span>
          <span>
            <i
              onClick={(e) => {
                e.preventDefault();
                slide("next");
              }}
              className="theme__nav--icon fas fa-angle-right"
            ></i>
          </span>
        </div>
        <div className="theme__image">
          <img
            className="theme__image--img"
            alt={themesAndOccasions[current].title}
            src={themesAndOccasions[current]["img"].src}
          />
        </div>
        <h3 className="theme__text">{themesAndOccasions[current].title}</h3>
      </div>
      <div className="theme__section theme__desktop">
        {themesAndOccasions.map(({ img, title }, index) => (
          <div key={index}>
            <div className="theme__image">
              <img className="theme__image--img" alt={title} src={img.src} />
            </div>
            <h3 className="theme__text">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
