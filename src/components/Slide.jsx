import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/paginsation";
import { pagination } from "swiper/css";
// import "swiper/css/navigation";
import { navigation } from "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Slide(props) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={props.images[0]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[1]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[2]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[3]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[4]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[5]}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[6]}></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide;
