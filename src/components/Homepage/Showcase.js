import React from "react";
import { Link } from "react-router-dom";

import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import { showcasedata } from "./data";

const Showcase = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

  return (
    <section className="showcase">
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "bullets" }}
      >
        {showcasedata.map((show, index) => (
          <SwiperSlide>
            <div className="showcase__div">
              <Link to="/collections/606b1d0d0d88096d07f0ed7a">
                <picture>
                  <source srcset={show.img} media="(min-width: 768px)" />
                  <source srcset={show.small} />
                  <img src={show.small} alt="qq" />
                  {/* <p
                  className={
                    index > 1 ? "showcase__text" : "showcase__text--custom"
                  }
                >
                  {show.text}
                </p> */}
                </picture>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Showcase;
