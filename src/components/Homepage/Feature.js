import React from "react";
import feature_big from "../../assets/images/homepage/feature_big.png";

const Feature = () => {
  return (
    <div>
      <section className="feature">
        <div className="feature__image">
          <img
            className="feature__image--img"
            alt="feature"
            src={
              window.innerWidth >= 1170
                ? feature_big
                : "https://chartsjs.s3.us-east-2.amazonaws.com/images/NAY04725+2.png"
            }
          />
          <div className="feature__image--border"></div>
        </div>
        <div className="feature__details">
          <div>
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
          </div>
          <div>
            <div className="feature__text">
              <h3 className="feature__text--head">Screen Printing</h3>
              <p className="feature__text--p">
                Ideal for Bulk/Group Orders, specific color matching and large
                variety of products.
              </p>
            </div>
            <div className="feature__cta">
              <span className="feature__cta--text">learn more</span>
              <span className="feature__cta--arr">&rarr;</span>
            </div>
            <div className="feature__divider"></div>
          </div>
          <div>
            <div className="feature__text">
              <h3 className="feature__text--head">Sublimation</h3>
              <p className="feature__text--p">
                Perfect choice for small quantity. Sublimation allows you to
                print gradient colors on the T-shirts and has a quick turn
                around time.
              </p>
            </div>
            <div className="feature__cta">
              <span className="feature__cta--text">learn more</span>
              <span className="feature__cta--arr">&rarr;</span>
            </div>
            <div className="feature__divider"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
