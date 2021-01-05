import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="newsletter">
        <div className="newsletter__text">Get 20% off on your next order.</div>
        <div className="newsletter__sub">
          <input
            className="newsletter__sub--input"
            type="text"
            placeholder="Your awesome email address"
          />
          <button className="newsletter__sub--btn">
            <i className="newsletter__sub--btn--icon fas fa-angle-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
