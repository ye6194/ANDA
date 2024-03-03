import './App.css';
import { useState } from "react";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

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
        <SwiperSlide><img src={props.images[0]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[1]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[2]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[3]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[4]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[5]}></img></SwiperSlide>
        <SwiperSlide><img src={props.images[6]}></img></SwiperSlide>
      </Swiper>
    </>
  );
};

function Main({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [expectingCount, setExpectingCount] = useState(0);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setExpectingCount(isClicked ? expectingCount - 1 : expectingCount + 1);
  }

  return (
    <main>
      <p id="p1">안경을 벗고 싶다면?</p>
      <p id="p2">안다와 함께하세요!</p>
      <div>
        <button className={isClicked ? "clicked" : ""} onClick={handleClick}>
          <img id="heart" src={isClicked ? "/pc_heart_clicked.png" : "/pc_heart.png"}></img>기대돼요
        </button>
      </div>
      <div id="expecting">{expectingCount}명이 기대하고 있어요!</div>
      {children}
    </main>
  )
}

function Nav() {
  return (
    <nav>
      <div id="menu"></div>
      <img id="logo" src="/logo/logo.png" alt="logo"></img>
    </nav>
  )
}

function Img() {
  return (
    <div>
      <img></img>
      <img></img>
      <img></img>
    </div>
  )
}

function App() {
  const images = [
    "/swiper-slide/anda_swiper1.png", "/swiper-slide/anda_swiper2.png",
    "/swiper-slide/anda_swiper3.png", "/swiper-slide/anda_swiper4.png",
    "/swiper-slide/anda_swiper5.png", "/swiper-slide/anda_swiper6.png",
    "/swiper-slide/anda_swiper7.png"
  ]

  return (
    <div className="App">
      <Nav></Nav>
      <Main><Slide images={images}></Slide></Main>

    </div >
  );
}

export default App;
