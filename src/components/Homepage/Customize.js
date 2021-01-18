import React from "react";
import sidepic from "../../assets/images/homepage/customize_1.jpg";
import midPic from "../../assets/images/homepage/customize_2.jpg";

const Customize = () => {
  return (
    <section className="customize">
      <div className="customize__features">
        <p className="customize__features--text">
          Make it personal and celebrate occasions with our customizable
          signature gift boxes.
        </p>
        <button className="customize__features--btn">learn more</button>
      </div>
      <div className="customize__pictures">
        <img
          className="customize__pictures--img customize__pictures--img-1"
          src={sidepic}
          alt="cutomization-side"
        />
        <img
          className="customize__pictures--img customize__pictures--img-2"
          src={midPic}
          alt="cutomization-middle"
        />
        <img
          className="customize__pictures--img customize__pictures--img-1"
          src={sidepic}
          alt="cutomization-side"
        />
      </div>
    </section>
  );
};

export default Customize;
