import React from "react";

const LatestCollection = () => {
  return (
    <div>
      <section className="latest-collection">
        <h2 className="latest-collection__title">The Latest Collection</h2>
        <div className="latest-collection__section latest-collection--1">
          <figure className="latest-collection__image">
            <img
              className="latest-collection__image--img"
              alt="collection 1"
              src={
                "https://chartsjs.s3.us-east-2.amazonaws.com/images/section-1.png"
              }
            />
          </figure>
          <div className="latest-collection__text">
            <h3 className="latest-collection__text--head">Lorem Ipsum</h3>
            <p className="latest-collection__text--p">
              Lorem Ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="latest-collection__section latest-collection--2">
          <figure className="latest-collection__image">
            <img
              className="latest-collection__image--img"
              alt="collection 2"
              src={
                "https://chartsjs.s3.us-east-2.amazonaws.com/images/section-1.png"
              }
            />
          </figure>
          <div className="latest-collection__text">
            <h3 className="latest-collection__text--head">Lorem Ipsum</h3>
            <p className="latest-collection__text--p">
              Lorem Ipsum dolor sit amet
            </p>
          </div>
        </div>
        <button className="latest-collection__btn">
          explore all our products
        </button>
      </section>
    </div>
  );
};

export default LatestCollection;
