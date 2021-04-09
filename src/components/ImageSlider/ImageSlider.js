import React, { useEffect } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import thumb from "./images/thumb.png";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ImageSlider = () => {
  useEffect(() => {
    var mySwiper = document.querySelector(".swiper-container").swiper;
    console.log(mySwiper.autoplay.running);
    mySwiper.autoplay.start();
  }, []);

  return (
    <Swiper
      onAutoplayStart={() => alert("Ok")}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
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
    </Swiper>
  );
};

export default ImageSlider;
