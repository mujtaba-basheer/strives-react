import React from "react";

const Themes = () => {
  return (
    <div>
      <section className="theme">
        <h2 className="theme__title">Theme &amp; Occasions</h2>
        <div className="theme__section">
          <div className="theme__image">
            <img
              className="theme__image--img"
              alt="theme 1"
              src={
                "https://chartsjs.s3.us-east-2.amazonaws.com/images/NAY04695+2.png"
              }
            />
          </div>
          <h3 className="theme__text">Diwali</h3>
        </div>
      </section>
    </div>
  );
};

export default Themes;
