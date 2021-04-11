import React from "react";
import { useHistory, Link } from "react-router-dom";

import { latestCollections } from "./data";

const LatestCollection = () => {
  const history = useHistory();

  return (
    <section className="latest-collection">
      <div className="latest-collection__title section-title">
        The Latest Collection
      </div>
      <div className="latest-collection__wrapper-grid">
        {latestCollections.map(({ title, subtitle, img }, index) => (
          <Link to="/collections/606b1d0d0d88096d07f0ed7a">
            <div key={index} className="latest-collection__container">
              <picture className="latest-collection__container__picture">
                <source srcset={img.main} media="(min-width: 1170px)" />
                {/* <source srcset={img.small} /> */}
                {/* <img
                className="latest-collection__container__picture--img"
                alt={img.alt}
                src={img.small}
              /> */}
                <img
                  className="latest-collection__container__picture--img"
                  alt={img.alt}
                  src={img.main}
                />
              </picture>
              <div className="latest-collection__container__text">
                <div className="latest-collection__container__text--heading">
                  {title.toUpperCase()}
                </div>
                {/* <div className="latest-collection__container__text--text">
                {subtitle}
              </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="latest-collection__wrapper-grid ">
        {latestCollections.map(
          ({ title, subtitle, img }, index) =>
            index < 2 && (
              <Link to="/collections/606b1d0d0d88096d07f0ed7a">
                <div key={index} className="latest-collection__container">
                  <picture className="latest-collection__container__picture">
                    {/* <source srcset={img.main} media="(min-width: 1170px)" /> */}
                    <source srcset={img.small} />
                    <img
                      className="latest-collection__container__picture--img"
                      alt={img.alt}
                      src={img.small}
                    />
                  </picture>
                  <div className="latest-collection__container__text">
                    <div className="latest-collection__container__text--heading">
                      {title}
                    </div>
                    {/* <div className="latest-collection__container__text--text">
                    {subtitle}
                  </div> */}
                  </div>
                </div>
              </Link>
            )
        )}
      </div>

      <div className="latest-collection__button-area flex">
        <button
          onClick={(e) => history.push("/collections")}
          className="latest-collection__btn"
        >
          explore all our products
        </button>
      </div>
    </section>
  );
};

export default LatestCollection;
