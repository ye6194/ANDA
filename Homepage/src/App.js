import './App.css';
import { useState } from "react";

import Nav from "./components/Nav"
import Main from "./components/Main"


function App() {
  const images = [
    "/swiper-slide/anda_swiper1.png", "/swiper-slide/anda_swiper2.png",
    "/swiper-slide/anda_swiper3.png", "/swiper-slide/anda_swiper4.png",
    "/swiper-slide/anda_swiper5.png", "/swiper-slide/anda_swiper6.png",
    "/swiper-slide/anda_swiper7.png"
  ]

  return (
    <div className="App">
      <Nav />
      <Main />
      {/* 메인 밖으로 슬라이드 빼내기 */}

    </div >
  );
}

export default App;
