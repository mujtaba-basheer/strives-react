import React from "react";

const LatestCollection = () => {
  return (
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
              Lorem Ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div className="latest-collection__container">
          <div className="latest-collection__container__text">
            <div className="latest-collection__container__text--heading">
              lorem Ipsum
            </div>
            <div className="latest-collection__container__text--text">
              Lorem Ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div className="latest-collection__container">
          <div className="latest-collection__container__text">
            <div className="latest-collection__container__text--heading">
              lorem Ipsum
            </div>
            <div className="latest-collection__container__text--text">
              Lorem Ipsum dolor sit amet
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
  );
};

export default LatestCollection;
