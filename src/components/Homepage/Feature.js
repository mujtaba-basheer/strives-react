import React from "react";

import { feature } from "./data";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature__image">
        <picture>
          <source srcset={feature.img.main} media="(min-width: 1170px)" />
          <source srcset={feature.img.small} />
          <img
            className="feature__image--img"
            alt={feature.img.alt}
            src={feature.img.small}
          />
        </picture>
        <div className="feature__image--border"></div>
      </div>
      <div className="feature__details">
        {feature.info.map(({ title, text }) => (
          <div>
            <div className="feature__text">
              <div className="feature__text--head">{title}</div>
              <p className="feature__text--p">{text}</p>
            </div>
            <div className="feature__divider"></div>
          </div>
        ))}
        <div className="feature__cta">
          <span className="feature__cta--text">learn more</span>
          <span className="feature__cta--arr">&rarr;</span>
        </div>
      </div>
    </section>
  );
};

export default Feature;
