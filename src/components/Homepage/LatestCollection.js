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
        {latestCollections.map(
          ({ title, subtitle, img, url }, index) =>
            index < 3 && (
              <Link to={url}>
                <div key={index} className="latest-collection__container">
                  <picture className="latest-collection__container__picture">
                    <source srcset={img.small} media="(min-width: 1170px)" />
                    <source srcset={img.small} />
                    <img
                      className="latest-collection__container__picture--img"
                      alt={img.alt}
                      src={img.main}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </Link>
            )
        )}
      </div>

      <div className="latest-collection__wrapper-grid ">
        {latestCollections.map(
          ({ title, subtitle, img, url }, index) =>
            index > 2 && (
              <Link to={url}>
                <div key={index} className="latest-collection__container">
                  <picture className="latest-collection__container__picture">
                    <source srcset={img.small} media="(min-width: 1170px)" />
                    <source srcset={img.small} />
                    <img
                      className="latest-collection__container__picture--img"
                      alt={img.alt}
                      src={img.small}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </Link>
            )
        )}
      </div>

      <div className="latest-collection__button-area flex">
        <button
          onClick={() => history.push("/collections")}
          className="latest-collection__btn"
        >
          explore all our products
        </button>
      </div>
    </section>
  );
};

export default LatestCollection;
