import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import thumb from "./images/thumb.png";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ImageSlider = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return () => {
      SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    };
  });

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={thumb}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={thumb}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={thumb}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
