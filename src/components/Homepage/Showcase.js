import React from "react";

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
        {showcasedata.map((show) => (
          <SwiperSlide>
            <div>
              <img src={show} alt="qq" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Showcase;
