import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="feature">
        <div className="feature__image">
          <img
            className="feature__image--img"
            alt="feature"
            src={
              "https://chartsjs.s3.us-east-2.amazonaws.com/images/NAY04725+2.png"
            }
          />
          <div className="feature__image--border"></div>
        </div>
        <div className="feature__text">
          <h3 className="feature__text--head">Embroidery</h3>
          <p className="feature__text--p">
            Works best with simple, low color count logos or artwork.
          </p>
        </div>
        <div className="feature__cta">
          <span className="feature__cta--text">learn more</span>
          <span className="feature__cta--arr">&rarr;</span>
        </div>
        <div className="feature__divider"></div>
      </section>
    </div>
  );
};

export default Feature;
