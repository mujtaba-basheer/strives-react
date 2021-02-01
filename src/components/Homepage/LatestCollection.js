import React from "react";
import collection_image from "../../assets/images/section-1.png";

const LatestCollection = () => {
  return (
    <div>
      <section className="latest-collection">
        <div className="latest-collection__title section-title">
          The Latest Collection
        </div>
        <div className="latest-collection__wrapper-grid">
          <div className="latest-collection__container">
            <div className="latest-collection__container__text">
              <div className="latest-collection__container__text--heading">
                lorem Ipsum
              </div>
              <div className="latest-collection__container__text--text">
                lorem Ipsum
              </div>
            </div>
          </div>

          <div className="latest-collection__container">
            <div className="latest-collection__container__text">
              <div className="latest-collection__container__text--heading">
                lorem Ipsum
              </div>
              <div className="latest-collection__container__text--text">
                lorem Ipsum
              </div>
            </div>
          </div>

          <div className="latest-collection__container">
            <div className="latest-collection__container__text">
              <div className="latest-collection__container__text--heading">
                lorem Ipsum
              </div>
              <div className="latest-collection__container__text--text">
                lorem Ipsum
              </div>
            </div>
          </div>
        </div>
        <div className="latest-collection__button-area flex">
          <button className="latest-collection__btn">
            explore all our products
          </button>
        </div>
      </section>
    </div>
  );
};

export default LatestCollection;
