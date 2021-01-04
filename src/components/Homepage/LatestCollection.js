import React from "react";
import collection_image from "../../assets/images/section-1.png";

const LatestCollection = () => {
  return (
    <div>
      <section className="latest-collection">
        <h2 className="latest-collection__title">The Latest Collection</h2>
        <div className="latest-collection__container">
          <div className="latest-collection__section latest-collection--1">
            <figure className="latest-collection__image">
              <img
                className="latest-collection__image--img"
                alt="collection 1"
                src={collection_image}
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
                src={collection_image}
              />
            </figure>
            <div className="latest-collection__text">
              <h3 className="latest-collection__text--head">Lorem Ipsum</h3>
              <p className="latest-collection__text--p">
                Lorem Ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="latest-collection__section latest-collection--3">
            <figure className="latest-collection__image">
              <img
                className="latest-collection__image--img"
                alt="collection 2"
                src={collection_image}
              />
            </figure>
            <div className="latest-collection__text">
              <h3 className="latest-collection__text--head">Lorem Ipsum</h3>
              <p className="latest-collection__text--p">
                Lorem Ipsum dolor sit amet
              </p>
            </div>
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
