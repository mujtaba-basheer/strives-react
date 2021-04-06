import React from "react";

// Import Swiper React components
/* import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); */

// import Swiper core and required modules
import SwiperCore, { Navigation, autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";

import { showcasedata } from "./data";

const Showcase = () => {
  return (
    <section className="showcase">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 500 }}
        pagination={{ clickable: true }}
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
